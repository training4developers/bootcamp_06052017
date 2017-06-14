import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addActionCreator } from './actions/car-actions';
import { CarTool } from './components/car-tool.component';
import { carAppStore } from './car-app-store';


const mapStateToProps = ({ cars }) => ({ cars });

const mapDispatchToProps = dispatch => bindActionCreators({
    add: addActionCreator,
}, dispatch);

const createContainer = connect(mapStateToProps, mapDispatchToProps);

const CarToolContainer = createContainer(CarTool);

ReactDOM.render(
    <CarToolContainer store={carAppStore} />,
    document.querySelector('main')
);