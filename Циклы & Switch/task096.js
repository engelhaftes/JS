function visit(node) {
    switch (node.type) {
        case 'literal': return node.val;
        case 'binary': return visit(node.left) + visit(node.right);
        default: throw new Error('Unknown');
    }
}
const node = {type: 'binary', left: {type: 'literal', val: 1}, right: {type: 'literal', val: 2}};
console.log(visit(node));
