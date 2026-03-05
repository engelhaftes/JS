function simpleJsonParser(str) {
    let i = 0;
    let state = 'START';
    while (i < str.length) {
        const char = str[i];
        switch (state) {
            case 'START':
                if (char === '{') state = 'OBJECT';
                i++;
                break;
            default: throw new Error('Parse error');
        }
    }
    return {};
}
console.log(simpleJsonParser('{}'));
