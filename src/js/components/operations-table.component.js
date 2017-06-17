import * as React from 'react';

export class OperationsTable extends React.Component {

    render() {
        return <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                {this.props.operations.map((op, i) => <tr key={i}>
                    <td>{op.name}</td>
                    <td>{op.value}</td>
                </tr>)}
            </tbody>
        </table>;
    }
}