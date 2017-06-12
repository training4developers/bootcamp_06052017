import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ColorTool } from './components/color-tool.component';

const colors = [
    { id: 1, name: 'red', code: '#ff0000' },
    { id: 2, name: 'blue', code: '#0000ff' },
    { id: 3, name: 'green', code: '#00ff00' },
];

ReactDOM.render(
    <ColorTool headerText="Color Tool!" colorList={colors} />,
    document.querySelector('main'),
);

