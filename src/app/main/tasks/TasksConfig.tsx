import { lazy } from 'react';

const Tasks = lazy(() => import('./Tasks'));

const TasksConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: 'tasks',
			element: <Tasks />
		}
	]
};

export default TasksConfig;
