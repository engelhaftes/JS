function findMax(arr) {
    if (arr.length === 0) return null;
    let max = arr[0];
    for (const x of arr) {
        if (x > max) max = x;
    }
    return max;
}
console.log(findMax([5, 3, 8, 1]));
