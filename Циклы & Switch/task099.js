function reducer(state = [], action) {
    switch (action.type) {
        case 'ADD': return [...state, action.payload];
        case 'REMOVE': return state.filter(x => x !== action.payload);
        case 'RESET': return [];
        default: return state;
    }
}
let state = reducer([], {type: 'ADD', payload: 1});
console.log(reducer(state, {type: 'ADD', payload: 2}));
