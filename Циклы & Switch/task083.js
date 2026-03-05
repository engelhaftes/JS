function directReturn(val) {
    return (function() {
        switch (val) {
            case 1: return 'One';
            default: return 'Other';
        }
    })();
}
console.log(directReturn(1));
