function testReturn(val) {
    switch (val) {
        case 1: return "One"; 
        default: return "Other";
    }
    console.log("Это не выполнится"); 
}
console.log(testReturn(1)); 
