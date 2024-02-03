import { lazy } from 'react';

const Reports = lazy(() => import('./Reports'));

const ReportsConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: 'reports',
			element: <Reports />
		}
	]
};

export default ReportsConfig;
