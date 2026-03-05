function zip(a, b) {
    const res = [];
    const len = Math.min(a.length, b.length);
    for (let i = 0; i < len; i++) {
        res.push([a[i], b[i]]);
    }
    return res;
}
console.log(zip([1, 2, 3], ['a', 'b', 'c']));
