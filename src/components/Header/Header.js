import React from 'react';
import classes from './Header.module.scss';
import TaskContainer from '../TaskContainer/TaskContainer';

const header = (props) => (
	<div className={classes.banner}>
		<h1>Hello</h1>
		<h1>What's your main focus for today?</h1>
		<TaskContainer getInput={props.getTask} />
	</div>
);

export default header;
