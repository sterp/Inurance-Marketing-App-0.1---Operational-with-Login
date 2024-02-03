import { lazy } from 'react';

const Social = lazy(() => import('./Social'));

const SocialConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: 'social',
			element: <Social />
		}
	]
};

export default SocialConfig;
