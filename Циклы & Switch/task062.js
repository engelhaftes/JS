function getCorners(shape) {
    switch (shape) {
        case "circle": return 0;
        case "square": return 4;
        case "triangle": return 3;
        default: return "Неизвестная фигура";
    }
}
console.log(getCorners("triangle")); 
