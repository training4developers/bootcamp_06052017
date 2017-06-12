const actionTypes = {
    add: 'add',
    subtract: 'subtract',
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.add:
            return state + action.value;
        case actionTypes.subtract:
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
        subscribe: callbackFn => {
            subscribeFns.push(callbackFn);

            return () => {
                const cbIndex = subscribeFns.indexOf(callbackFn);
                subscribeFns.splice(cbIndex, 1);
            };
        },
    };
};

const store = createStore(reducer, initialState);

const unsubscribeStore = store.subscribe(() => {
    console.log(store.getState());
});

const addActionCreator = value => ({ type: actionTypes.add, value });
const subtractActionCreator = value => ({ type: actionTypes.subtract, value });

const bindActionCreators = (actionCreators, dispatch) => {

    return Object.keys(actionCreators).reduce( (actionsDispatcher, actionKey) => {

        actionsDispatcher[actionKey] = (...actionParams) => {
            dispatch(actionCreators[actionKey](...actionParams));
        };

        return actionsDispatcher;

    }, {} );

};

const { add, subtract } = bindActionCreators({
    add: addActionCreator,
    subtract: subtractActionCreator,
}, store.dispatch);


add(1);
subtract(2);
add(3);
subtract(4);
add(5);

console.log(store.getState());

unsubscribeStore();