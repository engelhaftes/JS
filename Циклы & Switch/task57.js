function isWeekend(day) {
    switch (day) {
        case "Суббота":
        case "Воскресенье":
            return "Выходной";
        default: return "Рабочий день";
    }
}
console.log(isWeekend("Суббота")); 
