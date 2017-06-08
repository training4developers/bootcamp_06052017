import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ColorTool } from './components/color-tool.component';

const colors = [
    'green',
    'blue',
    'purple',
    'pink',
    'black',
    'yellow',
    'grey',
    'red',
    'teal',
];

const cars = [
    { id: 1, make: 'Toyota', model: 'Camry', color:'blue', year: 2017, price: 20183 },
];

ReactDOM.render(
    <ColorTool headerText="Color Tool!" colorList={colors} />,
    document.querySelector('main'),
);

