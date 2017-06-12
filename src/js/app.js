
const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return state + action.value;
        case 'subtract':
            return state - action.value;
        default:
            return state;
    }
};

const initialState = 0;

const createStore = (reducerFn, initialState) => {

    let state = initialState;
    const subscribeFns = [];

    return {
        getState: () => state,
        dispatch: action => {
            state = reducerFn(state, action);
            subscribeFns.forEach(cb => cb());
        },
        subscribe: callbackFn => subscribeFns.push(callbackFn),
    };
};

const store = createStore(reducer, initialState);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({ type: 'add', value: 1 });
store.dispatch({ type: 'subtract', value: 2 });
store.dispatch({ type: 'add', value: 3 });
store.dispatch({ type: 'subtract', value: 4 });
store.dispatch({ type: 'add', value: 5 });

console.log(store.getState());