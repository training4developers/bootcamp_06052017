import * as React from 'react';
import * as ReactDOM from 'react-dom';


class SimpleForm extends React.Component {

    componentDidMount() {
        this.input.focus();
    }

    render() {

        const msg = '<b>Tickets</b>';

        return <form>
           {this.props.children}
            <div>
                <label dangerouslySetInnerHTML={ ({ __html: msg }) }></label>
                <input type="text" ref={ input => this.input = input } />
            </div>
        </form>;
    }

}

const msg = 'Form Header';


ReactDOM.render(<SimpleForm><h1>{msg}</h1></SimpleForm>, document.querySelector('main'));
