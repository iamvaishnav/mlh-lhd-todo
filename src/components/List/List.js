import React from 'react';
import classes from './List.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

const List = (props) => (
	<div className={classes.list}>
		<section>
			<div className={classes.checkMark}>
				<input type='checkbox' name='todo' />
			</div>

			<div className={classes.task}>{props.todo}</div>
		</section>
		<section>
			{/* <div className={classes.edit}>
				<FontAwesomeIcon icon={faPen} color='#57606f' />
			</div> */}
			<div className={classes.delete}>
				<FontAwesomeIcon icon={faTrash} color='#e74c3c' />
			</div>
		</section>
	</div>
);

export default List;
