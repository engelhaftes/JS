function slidingWindowMax(arr, k) {
    const res = [];
    const deque = [];
    for (let i = 0; i < arr.length; i++) {
        while (deque.length && arr[deque[deque.length - 1]] < arr[i]) deque.pop();
        deque.push(i);
        if (deque[0] === i - k) deque.shift();
        if (i >= k - 1) res.push(arr[deque[0]]);
    }
    return res;
}
console.log(slidingWindowMax([1, 3, -1, -3, 5, 3, 6, 7], 3));
