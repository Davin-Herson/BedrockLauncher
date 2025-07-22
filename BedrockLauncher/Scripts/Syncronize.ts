class Main {
    public address: string = "BedrockLauncher";
    public code: number = 38443;

    static code(): string {
        return '{}';
    }
}

async function sync() {
    let io = {};
    io.storeIn = "BedrockLauncher";
    let data = await fetch("https://bedrocklauncher.github.io/");
}
