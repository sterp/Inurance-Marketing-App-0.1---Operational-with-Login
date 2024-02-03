import { lazy } from 'react';

const Reputation = lazy(() => import('./Reputation'));

const ReputationConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: 'reputation',
			element: <Reputation />
		}
	]
};

export default ReputationConfig;
