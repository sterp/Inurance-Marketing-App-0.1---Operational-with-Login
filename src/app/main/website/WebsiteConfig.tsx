import { lazy } from 'react';

const Website = lazy(() => import('./Website'));

const WebsiteConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: 'website',
			element: <Website />
		}
	]
};

export default WebsiteConfig;
