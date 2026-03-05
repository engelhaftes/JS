const ops = {
    'add': (a, b) => a + b,
    'sub': (a, b) => a - b
};
function calc(op, a, b) {
    return (ops[op] || (() => 'Unknown'))(a, b);
}
console.log(calc('add', 5, 3));
