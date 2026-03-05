function groupBy(arr, fn) {
    const acc = {};
    for (const x of arr) {
        const key = fn(x);
        if (!acc[key]) acc[key] = [];
        acc[key].push(x);
    }
    return acc;
}
console.log(groupBy([1, 2, 3, 4], x => x % 2 === 0 ? 'even' : 'odd'));
