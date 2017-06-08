import * as React from 'react';

export class ColorTool extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            newColor: '',
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({
            [ e.target.name ]: e.target.value,
        });
    }

    render() {
        return <div>
            <h1>{this.props.headerText}</h1>
            <ul>
                {this.props.colorList.map( color => <li>{color}</li> )}
            </ul>
            <form>
                <label htmlFor="new-color-input">New Color</label>
                <input type="text" id="new-color-input"
                    name="newColor"
                    value={this.state.newColor} onChange={this.onChange} />
            </form>
        </div>;
    }
}