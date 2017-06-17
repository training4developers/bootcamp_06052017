import * as React from 'react';
import * as ReactDOM from 'react-dom';


class Third extends React.Component {

    constructor(props) {
        super(props);
        console.log('third', 'constructor');
    }

    componentWillMount() {
        console.log('third', 'component will mount');
    }

    componentDidMount() {
        console.log('third', 'component did mount');

        setTimeout(() => {
            this.setState({ id: 2 });
        },2000);
    }

    componentWillUnmount() {
        console.log('third', 'component will unmount');
    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('third', 'should component update');

         this.setState({ id: 2 });
        return true;
    }
    
    componentWillUpdate() {

    }

    render() { 
        console.log('third', 'render');
        return <div>Third: v = {this.props.v}</div>;
    }

    componentDidUpdate() {
        
    }
}

class Second extends React.Component {

    constructor(props) {
        super(props);
        console.log('second', 'constructor');
    }

    componentWillMount() {
        console.log('second', 'component will mount');
    }

    componentDidMount() {
        console.log('second', 'component did mount');
    }

    componentWillUnmount() {
        console.log('second', 'component will unmount');
    }

    onClick() {
        this.setState({
            v: 4,
        });

        console.log(this.state.v);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('second', 'should component update');
    //     return true;
    // }
    
    render() { 
        console.log('second', 'render');
        return <div>
            Second
            <Third v={this.props.v} />
        </div>;
    }

}

class First extends React.Component {

    constructor(props) {
        super(props);
        console.log('first', 'constructor');
    }

    componentWillMount() {
        console.log('first', 'component will mount');
    }

    componentDidMount() {
        console.log('first', 'component did mount');
    }

    componentWillUnmount() {
        console.log('first', 'component will unmount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('first', 'should component update');
        return true;
    }

    render() { 
        console.log('first', 'render');
        return <div>
            First
            <Second v={this.props.v} />
        </div>;
    }

}

ReactDOM.render(<First v="3" />, document.querySelector('main'));

setTimeout(function() {
    console.log('timeout expired');
    ReactDOM.render(<First v="3" />, document.querySelector('main'));
}, 4000);