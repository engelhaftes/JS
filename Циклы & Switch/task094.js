function turingMachine(tape, rules, state = 'q0', head = 0) {
    while (state !== 'halt') {
        const symbol = tape[head] || ' ';
        const key = `${state}_${symbol}`;
        if (!rules[key]) break;
        const [newSymbol, direction, newState] = rules[key];
        tape[head] = newSymbol;
        head += direction === 'R' ? 1 : -1;
        state = newState;
    }
    return tape.join('');
}
const rules = {'q0_1': ['1', 'R', 'q0'], 'q0_ ': [' ', 'L', 'q1'], 'q1_1': [' ', 'L', 'q1'], 'q1_ ': ['1', 'R', 'halt']};
console.log(turingMachine('11'.split(''), rules));
