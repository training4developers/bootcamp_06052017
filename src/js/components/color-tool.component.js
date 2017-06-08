import * as React from 'react';

import { ToolHeader } from './tool-header.component';
import { ItemList } from './item-list.component';
import { ColorForm } from './color-form.component';

export class ColorTool extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            colorList: this.props.colorList.concat(),
        };

        this.addColor = this.addColor.bind(this);
    }


    addColor(newColor) {
        this.setState({
            colorList: this.state.colorList.concat(newColor),
        });
    }

    render() {
        return <div>
            <ToolHeader headerText="Color Tool" />
            <ItemList itemList={this.state.colorList} />
            <ColorForm onSubmitColor={this.addColor} /> 
        </div>;
    }
}