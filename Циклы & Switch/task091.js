const commands = {
    add: (a, b) => a + b,
    sub: (a, b) => a - b
};
function execute(cmd, ...args) {
    switch (cmd) {
        case 'add':
        case 'sub':
            return commands[cmd](...args);
        default: return 'Unknown';
    }
}
console.log(execute('add', 5, 3));
