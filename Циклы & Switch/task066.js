function calculate(op, a, b) {
    switch (op) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return a / b;
        default: return "Неверная операция";
    }
}
console.log(calculate("+", 5, 3));
