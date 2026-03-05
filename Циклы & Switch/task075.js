function getGrade(score) {
    switch (true) {
        case score >= 90: return 'A';
        case score >= 80: return 'B';
        default: return 'F';
    }
}
console.log(getGrade(85));
