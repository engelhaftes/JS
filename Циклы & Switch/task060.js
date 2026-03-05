function getTimeOfDay(h) {
    switch (true) {
        case (h >= 0 && h <= 5): return "Ночь";
        case (h >= 6 && h <= 11): return "Утро";
        case (h >= 12 && h <= 17): return "День";
        case (h >= 18 && h <= 23): return "Вечер";
        default: return "Неверный час";
    }
}
console.log(getTimeOfDay(10));
