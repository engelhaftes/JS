function flatten(arr) {
    const res = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            for (const sub of item) {
                res.push(sub);
            }
        } else {
            res.push(item);
        }
    }
    return res;
}
console.log(flatten([[1, 2], 3, [4]]));
