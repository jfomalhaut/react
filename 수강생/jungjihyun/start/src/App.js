import React from 'react';
import './App.css';

export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            count: 10,
            count2: 1
        }
        this.incresement = this.incresement.bind(this);
        this.multiple = this.multiple.bind(this);
        this.decresement = this.decresement.bind(this);
    }
    componentDidMount(){
        console.log('component did mount');
        //처음 실행할떄 작동
    }
    componentDidUpdate(){
        console.log('update!');
        //변하는것을 감시했다가 실행되는것 , 실시간으로 체크할수있는것

    }
    incresement(){
        this.setState({count: this.state.count + 1});
    }
    multiple(){
        this.setState({count2: this.state.count2 * 2});
    }
    decresement(){
        this.setState({count: this.state.count - 1});
    }
    render() {
        return(
            <div className="container">
                <h1>AppComponent</h1>
                <h2>{this.state.count}</h2>
                <h2>{this.state.count2}</h2>
                <button onClick={this.incresement}>증가</button>
                <button onClick={this.decresement}>감소</button>
                <button onClick={this.multiple}>2배증가</button>
            </div>
            
        );
    }
};