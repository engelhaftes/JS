function permutations(arr) {
    const res = [];
    const used = new Array(arr.length).fill(false);
    const perm = [];
    function backtrack() {
        if (perm.length === arr.length) {
            res.push([...perm]);
            return;
        }
        for (let i = 0; i < arr.length; i++) {
            if (used[i]) continue;
            used[i] = true;
            perm.push(arr[i]);
            backtrack();
            perm.pop();
            used[i] = false;
        }
    }
    backtrack();
    return res;
}
console.log(permutations([1, 2]));
