import React from 'react';
import './App.css'

export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            count: 10,
            count2 : 1
        }
        this.incresement = this.incresement.bind(this);
        this.decresement = this.decresement.bind(this);
        this.multi = this.multi.bind(this);
    }
    
    //처음 딱 키면 바로 실행됨
    componentDidMount() {
        console.log('component did mount')
    }
    
    //변경될 때마다 실행됨 -> 감시하고 있음.
    componentDidUpdate(){
        console.log('update!')
    }

    incresement(){
        this.setState({ count: this.state.count + 1});
    }

    decresement(){
        this.setState({ count: this.state.count - 1});
    }

    multi(){
        this.setState({ count2: this.state.count2 * 2});
    }


    render() {
        return (
            <div className="container">
                <h1>App Component</h1>
                <h2>{this.state.count}</h2>
                <h2>{this.state.count2}</h2>
                <button onClick={this.incresement}>증가</button>
                <button onClick={this.decresement}>감소</button>
                <button onClick={this.multi}>2배</button>
            </div>
        );
    }
};