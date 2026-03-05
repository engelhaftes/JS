function nestedSwitch(main, sub) {
    switch (main) {
        case "A":
            switch (sub) {
                case 1: return "A1";
                case 2: return "A2";
            }
            break;
        default: return "Other";
    }
}
console.log(nestedSwitch("A", 1));
