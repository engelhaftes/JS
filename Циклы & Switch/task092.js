function middleware(req) {
    switch (req.method) {
        case 'GET': console.log('GET handled'); return 'GET';
        case 'POST': console.log('POST handled'); return 'POST';
        default: console.log('Unknown'); return '404';
    }
}
console.log(middleware({method: 'GET'}));
