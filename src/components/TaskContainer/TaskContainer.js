import React from 'react';
import classes from './TaskContainer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const taskContainer = (props) => {
	const handleInputData = (event) => {
		if (event.key === 'Enter' || event.type === 'click') {
			props.getInput(event.target.value);
			event.target.value = '';
		}
	};

	return (
		<div className={classes.container}>
			<input type='text' placeholder='You know you should...' onKeyPress={handleInputData} />
			<div className={classes.add} onClick={handleInputData}>
				<FontAwesomeIcon icon={faPlus} />
			</div>
		</div>
	);
};

export default taskContainer;
