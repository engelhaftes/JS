function noteToName(note) {
    switch (note) {
        case 'C': return 'До';
        case 'D': return 'Ре';
        case 'E': return 'Ми';
        default: return 'Unknown';
    }
}
console.log(noteToName('C'));
