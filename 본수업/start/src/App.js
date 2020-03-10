import React from 'react';
import './App.css';

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			count: 10,
			count2: 1
		};
		this.increasement = this.increasement.bind(this);
		this.decreasement = this.decreasement.bind(this);
		this.multiple = this.multiple.bind(this);
	}
	componentDidMount() {
		console.log('component did mount');
	}
	componentDidUpdate() {
		console.log('update!');
	}
	increasement() {
		this.setState({ count: this.state.count + 1});
	}
	decreasement() {
		this.setState({ count: this.state.count - 1});
	}
	multiple() {
		this.setState({ count2: this.state.count2 * 2});
	}

	render() {
		return (
			<div className="container">
				<h1>App Component</h1>
				<h2>{this.state.count}</h2>
				<h2>{this.state.count2}</h2>
				<button onClick={this.increasement}>증가</button>
				<button onClick={this.decreasement}>감소</button>
				<button onClick={this.multiple}>곱하기</button>
			</div>
		);
	}
};