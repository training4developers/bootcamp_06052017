import * as React from 'react';

export class ItemList extends React.Component {

    render() {
        return <ul>
            {this.props.itemList.map( item => <li>{item}</li> )}
        </ul>;

    }

}