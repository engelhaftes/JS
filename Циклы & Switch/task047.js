function dfs(graph, start) {
    const stack = [start];
    const visited = new Set();
    const res = [];
    while (stack.length) {
        const v = stack.pop();
        if (!visited.has(v)) {
            visited.add(v);
            res.push(v);
            if (graph[v]) stack.push(...graph[v].reverse());
        }
    }
    return res;
}
console.log(dfs({A:['B','C'], B:['D']}, 'A'));
