const handlers = {
    'user:login': [() => console.log('Login')],
    'user:logout': [() => console.log('Logout')],
};
function emit(event, data) {
    switch (event) {
        case 'user:login':
        case 'user:logout':
            (handlers[event] || []).forEach(h => h(data));
            break;
        default: console.log('Unhandled');
    }
}
emit('user:login');
