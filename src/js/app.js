import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
    addActionCreator, subtractActionCreator,
    multiplyActionCreator, divideActionCreator
} from './actions/calc-actions';
import { CalcApp } from './components/calc-app.component';
import { appStore } from './app-store';


const mapStateToProps = state => ({ result: state });

const mapDispatchToProps = dispatch => bindActionCreators({
    add: addActionCreator,
    subtract: subtractActionCreator,
    multiply: multiplyActionCreator,
    divide: divideActionCreator,
}, dispatch);

const createContainer = connect(mapStateToProps, mapDispatchToProps);

const CalcAppContainer = createContainer(CalcApp);

ReactDOM.render(
    <CalcAppContainer store={appStore} />,
    document.querySelector('main')
);