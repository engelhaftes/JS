function countOccurrences(arr, val) {
    let count = 0;
    for (const x of arr) {
        if (x === val) count++;
    }
    return count;
}
console.log(countOccurrences([1, 2, 2, 3], 2));
