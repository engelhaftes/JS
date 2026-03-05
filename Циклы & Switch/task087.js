function rpnCalculator(tokens) {
    const stack = [];
    for (const token of tokens) {
        switch (token) {
            case '+': stack.push(stack.pop() + stack.pop()); break;
            case '-': stack.push(stack.pop() - stack.pop()); break;
            case '*': stack.push(stack.pop() * stack.pop()); break;
            case '/': stack.push(stack.pop() / stack.pop()); break;
            default: stack.push(parseFloat(token));
        }
    }
    return stack[0];
}
console.log(rpnCalculator(['3', '4', '+']));
