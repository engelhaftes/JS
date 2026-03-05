function takeWhile(arr, predicate) {
    const res = [];
    for (const x of arr) {
        if (!predicate(x)) break;
        res.push(x);
    }
    return res;
}
function dropWhile(arr, predicate) {
    let i = 0;
    while (i < arr.length && predicate(arr[i])) i++;
    return arr.slice(i);
}
console.log(takeWhile([1, 2, 3, 4], x => x < 3));
console.log(dropWhile([1, 2, 3, 4], x => x < 3)); 
