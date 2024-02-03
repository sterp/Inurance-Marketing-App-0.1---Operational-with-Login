import { lazy } from 'react';

const Overview = lazy(() => import('./Overview'));

const OverviewConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: 'overview',
			element: <Overview />
		}
	]
};

export default OverviewConfig;
