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

ReactDOM.render(
    <ColorTool headerText="Color Tool!" colorList={colors} />,
    document.querySelector('main'),
);

