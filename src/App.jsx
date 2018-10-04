import React, { Component } from 'react';
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
				<div>
					<div className="Clock-days">15 days</div>
					<div className="Clock-hours">30 hours</div>
					<div className="Clock-minutes">15 minutes</div>
					<div className="Clock-seconds">30 seconds</div>
				</div>
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