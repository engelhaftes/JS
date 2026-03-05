function nextLight(state) {
    switch (state) {
        case 'red': return 'green';
        case 'green': return 'yellow';
        case 'yellow': return 'red';
        default: return 'error';
    }
}
console.log(nextLight('red'));
