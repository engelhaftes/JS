function uniqueWords(str) {
    const words = str.split(' ');
    const res = [];
    for (const word of words) {
        if (!res.includes(word)) res.push(word);
    }
    return res;
}
console.log(uniqueWords('hello world hello')); 
