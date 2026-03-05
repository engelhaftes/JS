function range(start, end, step = 1) {
    const arr = [];
    let current = start;
    while (current < end) {
        arr.push(current);
        current += step;
    }
    return arr;
}
console.log(range(1, 10, 2)); 
