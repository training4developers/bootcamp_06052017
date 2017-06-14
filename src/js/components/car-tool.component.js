import * as React from 'react';

export class CarTool extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            make: '',
            model: '',
            year: 1900,
            color: '',
            price: 0,
        };
    }

    onChange = (e) => {

        this.setState({
            [ e.target.name ]: e.target.value,
        });
    }

    onClick = () => {
        this.props.add(Object.assign({}, this.state));

        this.setState({
            make: '',
            model: '',
            year: 1900,
            color: '',
            price: 0,
        });
    }

    render() {
        return <div>
            <table>
                <thead>
                    <tr>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Color</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.cars.map(car => <tr>
                        <td>{car.make}</td>
                        <td>{car.model}</td>
                        <td>{car.year}</td>
                        <td>{car.color}</td>
                        <td>{car.price}</td>
                    </tr>)}
                </tbody>
            </table>
            <form>
                <div>
                    <label>Make:</label>
                    <input type="text" name="make" value={this.state.make} onChange={this.onChange} />
                </div>
                <div>
                    <label>Model:</label>
                    <input type="text" name="model" value={this.state.model} onChange={this.onChange} />
                </div>
                <div>
                    <label>Year:</label>
                    <input type="text" name="year" value={this.state.year} onChange={this.onChange} />
                </div>
                <div>
                    <label>Color:</label>
                    <input type="text" name="color" value={this.state.color} onChange={this.onChange} />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="text" name="price" value={this.state.price} onChange={this.onChange} />
                </div>
                <button type="button" onClick={this.onClick}>Add Car</button>
            </form>
        </div>;
    }
}