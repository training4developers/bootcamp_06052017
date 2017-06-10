import * as React from 'react';

import { PropTypes } from 'prop-types';


export class ColorViewRow extends React.Component {

    static propTypes = {
        color: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            code: PropTypes.string,
        }),
        onEdit: PropTypes.func.isRequired,
        onDelete: PropTypes.func.isRequired,
    };

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