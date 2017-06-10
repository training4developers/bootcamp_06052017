import * as React from 'react';

import { ColorViewRow } from './color-view-row.component';
import { ColorEditRow } from './color-edit-row.component';

export class ColorTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            editRowId: 0,
        };

        this.editColor = this.editColor.bind(this);
        this.deleteColor = this.deleteColor.bind(this);
    }

    editColor(colorId) {
        this.setState({
            editRowId: colorId,
        });
    }

    deleteColor(colorId) {
        this.props.onDeleteColor(colorId);
    }

    saveColor = color => {
        this.props.onSaveColor(color);

        this.setState({
            editRowId: 0,
        });  
    };

    cancelColor = () => {
        this.setState({
            editRowId: 0,
        });        
    };

    render() {

        return <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Code</th>
                </tr>
            </thead>
            <tbody>
                {this.props.colorList.map( color =>
                    color.id === this.state.editRowId
                        ? <ColorEditRow color={color} onSave={this.saveColor} onCancel={this.cancelColor} />
                        : <ColorViewRow color={color} onDelete={this.deleteColor} onEdit={this.editColor} />
                )}
            </tbody>
        </table>;
    }

}