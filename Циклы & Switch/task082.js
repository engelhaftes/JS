function getZodiac(month, day) {
    switch (month) {
        case 1: return day <= 20 ? 'Козерог' : 'Водолей';
        default: return 'Unknown';
    }
}
console.log(getZodiac(1, 15)); 
