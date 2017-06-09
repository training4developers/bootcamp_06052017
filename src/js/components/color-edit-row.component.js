import * as React from 'react';

import namer from 'color-namer';

import { BaseForm } from './base-form.component';

export class ColorEditRow extends BaseForm {

    constructor(props) {
        super(props);

        this.state = {
            colorCode: this.props.color.code,
        };
    }

    render() {

        return <tr>
            <td>{this.props.color.id}</td>
            <td>{namer(this.state.colorCode).ntc[0].name}</td>
            <td><input type="color" name="colorCode" value={this.state.colorCode} onChange={this.onChange} /></td>
            <td>
                <button type="button">Save</button>
                <button type="button">Cancel</button>
            </td>
        </tr>;
    }
}