import React, { Component } from 'react';
import './App.css';

export class App extends Component {
	render() {
		return (			
			<div className="App">
				<div className="App-title">Countdown to April 15, 2019</div>
				<div>
					<div className="Clock-days">15 days</div>
					<div className="Clock-hours">30 hours</div>
					<div className="Clock-minutes">15 minutes</div>
					<div className="Clock-seconds">30 seconds</div>
				</div>
				<input placeholder='new date' />
				<button>Submit</button>
			</div>
			);
	}
}

export default App;