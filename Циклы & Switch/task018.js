function findFirstGreater(arr, target) {
    for (const x of arr) {
        if (x > target) return x;
    }
    return null;
}
console.log(findFirstGreater([1, 3, 5, 7], 4)); // 5
