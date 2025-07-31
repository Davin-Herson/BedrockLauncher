const f = require("fscript");
const sys = require("system");
const ref = require("reference");
const load = require("reflection");
const server = require("server");
const bridge = require("bridge");
const client = require("client");

f.stream("set", function(stream) {
    if (!stream) {
        server.start();
    } else {
        stream = 1;
        client.set("ready");
        server.get();
        server.refresh();
        server.start();
    }
});

load.namespace(f);
sys.get(ref.where());

console.log(sys.status);
