import * as React from 'react';
import namer from 'color-namer';

import { ToolHeader } from './tool-header.component';
import { ColorTable } from './color-table.component';
import { ColorForm } from './color-form.component';

export class ColorTool extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            colorList: this.props.colorList.concat(),
        };

        this.addColor = this.addColor.bind(this);
        this.removeColor = this.removeColor.bind(this);
    }


    addColor(newColor) {
        this.setState({
            colorList: this.state.colorList.concat({
                id: this.state.colorList.reduce( (p,c) => Math.max(p, c.id), 0 ) + 1,
                name: namer(newColor).ntc[0].name,
                code: newColor,
            }),
        });
    }

    removeColor(colorId) {

        const colorIndex = this.state.colorList.findIndex( c => c.id === colorId );

        this.setState({
            colorList: this.state.colorList
                .slice(0, colorIndex)
                .concat(this.state.colorList.slice(colorIndex + 1)),
        });
    }

    saveColor = color => {

        const colorIndex = this.state.colorList.findIndex( c => c.id === color.id );

        this.setState({
            colorList: this.state.colorList
                .slice(0, colorIndex)
                .concat(color, this.state.colorList.slice(colorIndex + 1)),
        });        

    }

    render() {
        return <div>
            <ToolHeader />
            <ColorTable colorList={this.state.colorList} onDeleteColor={this.removeColor} onSaveColor={this.saveColor}  />
            <ColorForm onSubmitColor={this.addColor} /> 
        </div>;
    }
}