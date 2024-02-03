import { lazy } from 'react';

const Content = lazy(() => import('./Content'));

const ContentConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: 'content',
			element: <Content />
		}
	]
};

export default ContentConfig;
