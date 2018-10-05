import React, { Component } from 'react';
import Clock from './Clock'
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap'

// ES6 importing and exporting - syntax for sharing code between separate files. Used in cases like `import React from ‘react’`
export class App extends Component {
	// Props - similar to state, except this data inherits from parent component specifying pieces of state as properties
	constructor(props) {
		super(props);
		// State - the pertinent data to an application. Each component has its local state as long as you declare add the constructor to a Component and declare its state object
		this.state = {
			deadline: 'April 15, 2019',
			newDeadline: ''
		}
	}

	changeDeadLine() {
		// Updating State - When updating state, make sure to never mutate state directly. Doing so will lead to fatal errors in your application. Instead, re-declare new instances of state arrays or objects and use the setState() function to update state.
		this.setState({deadline: this.state.newDeadline})
	}

	// Clock Component - re-usable and independent pieces of React code that comprise the User Interface
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