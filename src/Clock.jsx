import React, { Component } from 'react';
import './App.css'

export class Clock extends Component {
	constructor(props) {
		super(props);
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

	componentWillMount() {
		this.getTimeUntil(this.props.deadline)
	}

	componentDidMount() {
		setInterval(() => this.getTimeUntil(this.props.deadline), 1000)
	}

	render() {
		return (
			<div>
				<div>
					<div className="Clock-days">{this.state.days} days</div>
					<div className="Clock-hours">{this.state.hours} hours</div>
					<div className="Clock-minutes">{this.state.minutes} minutes</div>
					<div className="Clock-seconds">{this.state.seconds} seconds</div>
				</div>
			</div>
		);
	}
}

export default Clock;
