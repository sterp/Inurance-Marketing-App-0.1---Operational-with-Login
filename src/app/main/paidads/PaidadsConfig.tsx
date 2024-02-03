import { lazy } from 'react';

const Paidads = lazy(() => import('./Paidads'));

const PaidadsConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: 'paidads',
			element: <Paidads />
		}
	]
};

export default PaidadsConfig;
