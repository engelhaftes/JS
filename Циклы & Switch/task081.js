function getAnimalSound(animal) {
    switch (animal) {
        case 'cat': return 'meow';
        case 'dog': return 'woof';
        default: return '...';
    }
}
console.log(getAnimalSound('cat'));
