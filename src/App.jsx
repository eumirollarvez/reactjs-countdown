import React, { Component } from 'react';
import Clock from './Clock'
import './App.css';

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deadLine: 'April 15, 2019',
			newDeadLine: ''
		}
	}

	changeDeadLine() {
		// Always change the states through the setState method 
		this.setState({deadLine: this.state.newDeadLine})
	}

	render() {
		return (
			<div className="App">
				<div className="App-title">Countdown to {this.state.deadLine}</div>
				<Clock />
				<input
					placeholder='new date'
					onChange={event => this.setState({newDeadLine: event.target.value})}
				/>
				<button onClick={() => this.changeDeadLine()}>Submit</button>
			</div>
			);
	}
}

export default App;