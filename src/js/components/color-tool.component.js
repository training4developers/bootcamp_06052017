import * as React from 'react';

export class ColorTool extends React.Component {

    render() {
        return <div>
            <h1>{this.props.headerText}</h1>
            <ul>
                {this.props.colorList.map( color => <li>{color}</li> )}
            </ul>
        </div>;
    }
}