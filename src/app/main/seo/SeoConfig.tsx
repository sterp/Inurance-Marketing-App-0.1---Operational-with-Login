import { lazy } from 'react';

const Seo = lazy(() => import('./Seo'));

const SeoConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: 'seo',
			element: <Seo />
		}
	]
};

export default SeoConfig;
