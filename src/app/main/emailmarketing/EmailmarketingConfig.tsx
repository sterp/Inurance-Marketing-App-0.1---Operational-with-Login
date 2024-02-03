import { lazy } from 'react';

const Emailmarketing = lazy(() => import('./Emailmarketing'));

const EmailmarketingConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: 'emailmarketing',
			element: <Emailmarketing />
		}
	]
};

export default EmailmarketingConfig;
