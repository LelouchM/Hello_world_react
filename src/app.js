import React from 'react';
import ChangeButton from './test1.js';
import User from './test2.js';

const App = React.createClass({
	getInitialState() {
		return {
			userName: "Anyone",
			color: "black"
		};
	},
	render() {
		return (
			<div>
				<h1 style={{color:this.state.color}}>{this.state.userName}</h1>
				<User onChange={this.onChang} />
				<ChangeButton change={this.changeColor} />
			</div>
		);
	},
	onChang(e) {
		this.setState({
			userName: e.target.value
		});
	},
	changeColor() {
		this.setState({
			color: (this.state.color === "black")? "red" : "black"
		});
	}
})
export default App;
