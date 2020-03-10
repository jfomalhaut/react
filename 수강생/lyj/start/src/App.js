import React from 'react';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 10
        }
    }

    componentDidMount() {
        console.log('component did mount');
    }

    componentDidUpdate() {
        console.log('update!');
    }

    incresement() {
        this.setState({ count: this.state.count + 1});
    }

    decresement() {
        this.setState({ count: this.state.count - 1});
    }

    render() {
        return (
            <div className="container">
                <h1>App Component</h1>
                <h2>{this.state.count}</h2>
                <button onClick={this.incresement}>증가</button>
                <button onClick={this.decresement}>감소</button>
            </div>
        );
    }
};