function bfs(root) {
    if (!root) return [];
    const queue = [root];
    const res = [];
    while (queue.length) {
        const node = queue.shift();
        res.push(node.val);
        if (node.children) queue.push(...node.children);
    }
    return res;
}
const tree = {val:1, children:[{val:2, children:[{val:4}]}, {val:3}]};
console.log(bfs(tree));
