function testSwitch(val) {
    switch (val) {
        case 1: return 'one';
        case 2: return 'two';
        default: return 'other';
    }
}
function testIf(val) {
    if (val === 1) return 'one';
    else if (val === 2) return 'two';
    else return 'other';
}
const lookup = {1: 'one', 2: 'two'};
function testLookup(val) {
    return lookup[val] || 'other';
}
console.log(testSwitch(1)); 
