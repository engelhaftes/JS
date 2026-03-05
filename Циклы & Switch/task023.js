function removeDuplicates(arr) {
    const res = [];
    for (const x of arr) {
        if (!res.includes(x)) res.push(x);
    }
    return res;
}
console.log(removeDuplicates([1, 2, 2, 3, 1]));
