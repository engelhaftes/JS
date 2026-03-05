function throttle(fn, delay) {
    let last = 0;
    return (...args) => {
        const now = Date.now();
        if (now - last >= delay) {
            last = now;
            fn(...args);
        }
    };
}
const throttled = throttle(() => console.log('Throttled'), 1000);
throttled();
throttled();
