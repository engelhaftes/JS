function repl(command) {
    switch (command) {
        case 'help': console.log('Help text'); break;
        case 'exit': console.log('Exiting...'); break;
        default: console.log('Unknown');
    }
}
repl('help'); 
