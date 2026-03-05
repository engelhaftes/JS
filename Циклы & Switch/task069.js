function gradeSwitch(score) {
    switch (true) {
        case score >= 90: return 'A';
        case score >= 80: return 'B';
        case score >= 70: return 'C';
        default: return 'F';
    }
}
console.log(gradeSwitch(85));
