function route(path) {
    switch (path) {
        case '/': console.log('Home'); break;
        case '/about': console.log('About'); break;
        case '/contact': console.log('Contact'); break;
        default: console.log('404');
    }
}
route('/about');
