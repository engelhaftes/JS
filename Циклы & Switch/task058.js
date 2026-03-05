function handleCommand(cmd) {
    switch (cmd) {
        case "start": console.log("Starting..."); break;
        case "stop": console.log("Stopping..."); break;
        case "pause": console.log("Pausing..."); break;
        default: console.log("Unknown command");
    }
}
handleCommand("start");
