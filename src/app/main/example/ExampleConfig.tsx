import { lazy } from 'react';

const Example = lazy(() => import('./Example'));

const ExampleConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: 'example',
			element: <Example />
		}
	]
};

export default ExampleConfig;
