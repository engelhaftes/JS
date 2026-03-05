function access(role) {
    switch (role) {
        case 'admin':
        case 'superadmin': console.log('Full access'); break;
        case 'user': console.log('Limited access'); break;
    }
}
access('admin');
