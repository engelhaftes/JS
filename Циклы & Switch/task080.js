function handleEvent(event) {
    switch (event.type) {
        case 'click': console.log('Clicked'); break;
        case 'mouseover': console.log('Hovered'); break;
        case 'keydown': console.log('Key pressed'); break;
    }
}
handleEvent({type: 'click'});
