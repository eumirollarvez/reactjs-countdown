import React, { Component } from 'react';
import Clock from './Clock'
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap'

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
		this.setState({deadline: this.state.newDeadline})
	}

	render() {
		return (
			<div className="App">
				<div className="App-title">Countdown to {this.state.deadline}</div>
				<Clock
					deadline={this.state.deadline}
				/>
				<Form inline>
					<FormControl
					className="Deadline-input"
					placeholder='new date'
					onChange={event => this.setState({newDeadline: event.target.value})}
					/>
					<Button onClick={() => this.changeDeadLine()}>Submit</Button>
				</Form>
			</div>
			);
	}
}

export default App;