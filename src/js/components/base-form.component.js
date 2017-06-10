import * as React from 'react';

export class BaseForm extends React.Component {

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {

        let value;

        if (e.type === 'number') {
            value = Number(e.target.value);
        } else {
            value = e.target.value;
        }

        this.setState({
            [ e.target.name ]: value,
        });
    }
}
