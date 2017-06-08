import * as React from 'react';

import { ToolHeader } from './tool-header.component';

export class ColorTool extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            colorList: this.props.colorList.concat(),
            newColor: '',
        };

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onChange(e) {
        this.setState({
            [ e.target.name ]: e.target.value,
        });
    }

    onClick() {

        this.setState({
            colorList: this.state.colorList.concat(this.state.newColor),
            newColor: '',
        });

    }

    render() {
        return <div>
            <ToolHeader headerText="Color Tool"></ToolHeader>
            <ul>
                {this.state.colorList.map( color => <li>{color}</li> )}
            </ul>
            <form>
                <label htmlFor="new-color-input">New Color</label>
                <input type="text" id="new-color-input" name="newColor"
                    value={this.state.newColor} onChange={this.onChange} />
                <button type="button" onClick={this.onClick}>Add Color</button>
            </form>
        </div>;
    }
}