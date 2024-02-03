import { lazy } from 'react';

const Local = lazy(() => import('./Local'));

const LocalConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: 'local',
			element: <Local />
		}
	]
};

export default LocalConfig;
