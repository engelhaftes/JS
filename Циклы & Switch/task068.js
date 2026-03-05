function handleKey(key) {
    switch (key) {
        case "ArrowUp": console.log("Up"); break;
        case "ArrowDown": console.log("Down"); break;
        case "ArrowLeft": console.log("Left"); break;
        case "ArrowRight": console.log("Right"); break;
        default: console.log("Other key");
    }
}
handleKey("ArrowUp");
