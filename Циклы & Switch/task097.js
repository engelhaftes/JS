function safeSwitch(val) {
    switch (val) {
        case 'A': return 'A';
        case 'B': return 'B';
        default: throw new TypeError(`Unexpected value: ${val} (type: ${typeof val})`);
    }
}
console.log(safeSwitch('A')); 
