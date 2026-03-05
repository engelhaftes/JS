function evalAST(node) {
    switch (node.type) {
        case 'add': return evalAST(node.left) + evalAST(node.right);
        case 'num': return node.val;
        default: throw new Error('Unknown type');
    }
}
const ast = {type:'add', left:{type:'num', val:1}, right:{type:'num', val:2}};
console.log(evalAST(ast));
