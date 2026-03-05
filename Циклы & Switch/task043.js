function longestUniqueSubstring(str) {
    let maxLen = 0;
    let start = 0;
    const seen = new Set();
    for (let i = 0; i < str.length; i++) {
        while (seen.has(str[i])) {
            seen.delete(str[start]);
            start++;
        }
        seen.add(str[i]);
        maxLen = Math.max(maxLen, i - start + 1);
    }
    return maxLen;
}
console.log(longestUniqueSubstring('abcabcbb'));
