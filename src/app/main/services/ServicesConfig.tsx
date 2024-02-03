import { lazy } from 'react';

const Services = lazy(() => import('./Services'));

const ServicesConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: 'services',
			element: <Services />
		}
	]
};

export default ServicesConfig;
