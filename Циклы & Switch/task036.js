function flattenDeep(arr, depth = Infinity) {
    const stack = [...arr.map(item => [item, depth])];
    const res = [];
    while (stack.length) {
        const [item, currDepth] = stack.pop();
        if (Array.isArray(item) && currDepth > 0) {
            stack.push(...item.map(sub => [sub, currDepth - 1]));
        } else {
            res.push(item);
        }
    }
    return res.reverse();
}
console.log(flattenDeep([[1, [2, [3]]], 4], 2));
