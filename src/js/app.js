import * as React from 'react';
import * as ReactDOM from 'react-dom';

import keyMirror from 'key-mirror';

import { createStore, bindActionCreators } from 'redux';

const actionTypes = keyMirror({
    add: null,
    subtract: null,
    multiply: null,
    divide: null,
});

const reducer = (state = 0, action) => {
    switch (action.type) {
        case actionTypes.add:
            return state + action.value;
        case actionTypes.subtract:
            return state - action.value;
        case actionTypes.multiply:
            return state * action.value;
        case actionTypes.divide:
            return state / action.value;
        default:
            return state;
    }
};

const initialState = 0;

// const createStore = (reducerFn, initialState) => {

//     let state = initialState;
//     const subscribeFns = [];

//     return {
//         getState: () => state,
//         dispatch: action => {
//             state = reducerFn(state, action);
//             subscribeFns.forEach(cb => cb());
//         },
//         subscribe: callbackFn => {
//             subscribeFns.push(callbackFn);

//             return () => {
//                 const cbIndex = subscribeFns.indexOf(callbackFn);
//                 subscribeFns.splice(cbIndex, 1);
//             };
//         },
//     };
// };

const store = createStore(reducer, initialState);

// const unsubscribeStore = store.subscribe(() => {
//     console.log(store.getState());
//     ReactDOM.render(<CalcApp {...actions} result={store.getState()} />,
//         document.querySelector('main'));
// });

const addActionCreator = value => ({ type: actionTypes.add, value });
const subtractActionCreator = value => ({ type: actionTypes.subtract, value });
const multiplyActionCreator = value => ({ type: actionTypes.multiply, value });
const divideActionCreator = value => ({ type: actionTypes.divide, value });

// const bindActionCreators = (actionCreators, dispatch) => {

//     return Object.keys(actionCreators).reduce( (actionsDispatcher, actionKey) => {

//         actionsDispatcher[actionKey] = (...actionParams) => {
//             dispatch(actionCreators[actionKey](...actionParams));
//         };

//         return actionsDispatcher;

//     }, {} );

// };

const mapStateToProps = state => {
    return {
        result: state,
    };
};

const mapDispatchToProps = dispatch => {

    return bindActionCreators({
        add: addActionCreator,
        subtract: subtractActionCreator,
        multiply: multiplyActionCreator,
        divide: divideActionCreator,
    }, dispatch);

};

const CalcApp = props => {

    let operand;

    return <div>
        <form>
            <label>Operand:</label>
            <input type="number" defaultValue="0" ref={input => operand = input}  />
            <button type="button" onClick={() => props.add(Number(operand.value))}>+</button>
            <button type="button" onClick={() => props.subtract(Number(operand.value))}>-</button>
            <button type="button" onClick={() => props.multiply(Number(operand.value))}>*</button>
            <button type="button" onClick={() => props.divide(Number(operand.value))}>/</button>
        </form>
        <div>
            <span>Result:</span>
            {props.result}
        </div>
    </div>;
};

const connect = (mapStateToPropsFn, mapDispatchToPropsFn) => {

    return PresentationalComponent => {

        return class ContainerComponent extends React.Component {

            componentWillMount() {

                this.presentationalComponentProps =
                    mapDispatchToPropsFn(this.props.store.dispatch);

                this.storeUnsubscribe = this.props.store.subscribe(() => {

                    Object.assign(
                        this.presentationalComponentProps,
                        mapStateToPropsFn(this.props.store.getState())
                    );

                    this.forceUpdate();

                });

            }

            componentWillUnmount() {
                this.storeUnsubscribe();
            }

            render() {
                return <PresentationalComponent {...this.presentationalComponentProps} />;
            }

        };

    };

};

const CalcAppContainer = connect(mapStateToProps, mapDispatchToProps)(CalcApp);


ReactDOM.render(<CalcAppContainer store={store} />, document.querySelector('main'));