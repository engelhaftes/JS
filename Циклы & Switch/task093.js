function handleShape(shape) {
    switch (shape.kind) {
        case 'circle': return Math.PI * shape.r ** 2;
        case 'rect': return shape.w * shape.h;
    }
}
const circle = {kind: 'circle', r: 5};
console.log(handleShape(circle));
