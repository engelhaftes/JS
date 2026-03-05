function getGradeDesc(grade) {
    switch (grade.toUpperCase()) {
        case "A": return "Отлично";
        case "B": return "Хорошо";
        case "C": return "Удовлетворительно";
        default: return "Неверно";
    }
}
console.log(getGradeDesc("A"));
