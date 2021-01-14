import React, { Component } from 'react';
import Header from './components/Header/Header';
import classes from './App.module.scss';
import List from './components/List/List';

class App extends Component {
	state = {
		tasks: [],
	};

	getInputTask = (data) => {
		const task = data;
		let taskArray = this.state.tasks;
		taskArray.push(task);
		this.setState(
			{
				tasks: taskArray,
			},
			() => console.log(this.state)
		);
	};

	// handleDeleteTask = () => {
	//   this.state.tasks.forEach((curr, index) => {

	//   })
	// };
	render() {
		return (
			<div className={classes.App}>
				<Header getTask={this.getInputTask} />
				<div className={classes.container}>
					{this.state.tasks.map((curr) => (
						<List todo={curr} key={curr} />
					))}
				</div>
			</div>
		);
	}
}

export default App;
