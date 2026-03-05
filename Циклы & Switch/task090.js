const TYPE_A = Symbol('A');
const TYPE_B = Symbol('B');
function handleSym(sym) {
    switch (sym) {
        case TYPE_A: return 'A';
        case TYPE_B: return 'B';
    }
}
console.log(handleSym(TYPE_A));
