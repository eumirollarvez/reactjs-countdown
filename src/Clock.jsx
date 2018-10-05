import React, { Component } from 'react';
import './App.css'

// ES6 importing and exporting - syntax for sharing code between separate files. Used in cases like `import React from ‘react’`
export class Clock extends Component {
	// Props - similar to state, except this data inherits from parent component specifying pieces of state as properties
	constructor(props) {
		super(props);
		// State - the pertinent data to an application. Each component has its local state as long as you declare add the constructor to a Component and declare its state object
		this.state = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0
		}
	}

	getTimeUntil(deadline) {
		const time = Date.parse(deadline) - Date.parse(new Date());
		const days = Math.floor(time/(1000*60*60*24));
		const hours = Math.floor((time/(1000*60*60)) % 24);
		const minutes = Math.floor((time/1000/60) % 60);
		const seconds = Math.floor((time/1000) % 60);

		this.setState({days, hours, minutes, seconds});
	}

	// LifeCycle Methods - events in React components that trigger in cases such as rendering on or off the screen, or during state updates. Example are the `componentWillMount()` or `componentDidMount()` lifeCycle hooks
	componentWillMount() {
		this.getTimeUntil(this.props.deadline)
	}

	componentDidMount() {
		setInterval(() => this.getTimeUntil(this.props.deadline), 1000)
	}

	// Helper method with ternery expression
	leading0(number) {
		return number < 10 ? '0' + number : number;
	}

	render() {
		return (
			<div>
				<div>
					<div className="Clock-days">{this.leading0(this.state.days)} days</div>
					<div className="Clock-hours">{this.leading0(this.state.hours)} hours</div>
					<div className="Clock-minutes">{this.leading0(this.state.minutes)} minutes</div>
					<div className="Clock-seconds">{this.leading0(this.state.seconds)} seconds</div>
				</div>
			</div>
		);
	}
}

export default Clock;