import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { refresh } from './actions/car-actions';
import { CarTool } from './components/car-tool.component';
import { carAppStore } from './car-app-store';


const mapStateToProps = ({ cars }) => ({ cars });

const mapDispatchToProps = dispatch => bindActionCreators({
    refresh,
}, dispatch);

const createContainer = connect(mapStateToProps, mapDispatchToProps);

const CarToolContainer = createContainer(CarTool);

document.addEventListener('DOMContentLoaded', () => {

    ReactDOM.render(
        <CarToolContainer store={carAppStore} />,
        document.querySelector('main')
    );

    // carAppStore.dispatch(refresh());

});

