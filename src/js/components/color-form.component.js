import * as React from 'react';

export class ColorForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
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
        this.props.onSubmitColor(this.state.newColor);

        this.setState({
            newColor: ''
        });
    }

    render() {

        return <form>
            <label htmlFor="new-color-input">New Color</label>
            <input type="text" id="new-color-input" name="newColor"
                value={this.state.newColor} onChange={this.onChange} />
            <button type="button" onClick={this.onClick}>Add Color</button>
        </form>;
    }

}