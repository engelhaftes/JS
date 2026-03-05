function tokenizer(input) {
    const tokens = [];
    let i = 0;
    while (i < input.length) {
        const char = input[i];
        switch (true) {
            case /\d/.test(char): {
                let num = '';
                while (i < input.length && /\d/.test(input[i])) num += input[i++];
                tokens.push({type: 'number', val: parseInt(num)});
                continue;
            }
            case ['+', '-', '*', '/'].includes(char): tokens.push({type: 'op', val: char}); i++; break;
            default: i++;
        }
    }
    return tokens;
}
console.log(tokenizer('1+2*3'));
