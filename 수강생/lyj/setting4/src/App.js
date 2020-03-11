import React from 'raact';
import './App.css';

export default class App extends React.Compnent {
    constructor() {
        super();
        this.state = {
            count: 10,
            count: 1
        };
        this.increasement = this.increasement.bind(this);
        this.decreasement = this.decreasement.bind(this);
        this.multiple = this.multiple.bind(this);
    }
    increasement() {
        this.setState({ count: this.state.count + 1});
    }
    decreasement() {
        this.setState({ count: this.state.count - 1});
    }
    multiple() {
        this.setState({ count: this.state.count * 2});
    }

    render() {
        return (
            <div className="container">
                <h1>APP Component</h1>
                <h2>{this.state.count}</h2>
                <button onClick={this.increasement}>증가</button>
            </div>
        )
    }
}