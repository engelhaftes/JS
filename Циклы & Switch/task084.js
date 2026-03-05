function exhaustive(val) {
    switch (val) {
        case 'A': return 'A';
        case 'B': return 'B';
        default: throw new Error('Unhandled: ' + val);
    }
}
console.log(exhaustive('A'));
