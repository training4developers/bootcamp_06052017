import * as React from 'react';

export class ColorViewRow extends React.Component {

    constructor(props) {
        super(props);

        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
    }

    edit() {
        this.props.onEdit(this.props.color.id);
    }


    delete() {
        this.props.onDelete(this.props.color.id);
    }

    render() {
        return <tr>
            <td>{this.props.color.id}</td>
            <td>{this.props.color.name}</td>
            <td>{this.props.color.code}</td>
            <td>
                <button type="button" onClick={this.edit}>Edit</button>
                <button type="button" onClick={this.delete}>Delete</button>
            </td>
        </tr>;
    }
}