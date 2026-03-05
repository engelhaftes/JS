function parseToken(token) {
    switch (token.type) {
        case 'NUMBER': console.log('Number:', token.value); break;
        case 'STRING': console.log('String:', token.value); break;
        case 'OPERATOR': console.log('Op:', token.value); break;
        case 'KEYWORD': console.log('Keyword:', token.value); break;
    }
}
parseToken({type: 'NUMBER', value: 42});
