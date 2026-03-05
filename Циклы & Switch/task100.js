function vm(bytecode) {
    const stack = [];
    let ip = 0;
    while (ip < bytecode.length) {
        const opcode = bytecode[ip++];
        switch (opcode) {
            case 'PUSH': stack.push(bytecode[ip++]); break;
            case 'POP': stack.pop(); break;
            case 'ADD': stack.push(stack.pop() + stack.pop()); break;
            case 'SUB': stack.push(stack.pop() - stack.pop()); break;
            case 'PRINT': console.log(stack.pop()); break;
            case 'HALT': return;
        }
    }
}
vm(['PUSH', 5, 'PUSH', 3, 'ADD', 'PRINT', 'HALT']);
