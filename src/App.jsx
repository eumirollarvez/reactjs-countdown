import React, { Component } from 'react';
import Clock from './Clock'
import './App.css';

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deadline: 'April 15, 2019',
			newDeadline: ''
		}
	}

	changeDeadLine() {
		// Always change the states through the setState method 
		this.setState({deadline: this.state.newDeadLine})
	}

	render() {
		return (
			<div className="App">
				<div className="App-title">Countdown to {this.state.deadline}</div>
				<Clock
					deadline={this.state.deadline}
				/>
				<input
					placeholder='new date'
					onChange={event => this.setState({newDeadline: event.target.value})}
				/>
				<button onClick={() => this.changeDeadLine()}>Submit</button>
			</div>
			);
	}
}

export default App;