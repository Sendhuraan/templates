import React from 'react';

import Profile from '../../components/Profile';
import Tasks from '../../components/Tasks';

import './index.scss';

function Main() {
	return (
		<div className="flex main-container">
			<Profile />
			<Tasks />
		</div>
	);
}

export default Main;