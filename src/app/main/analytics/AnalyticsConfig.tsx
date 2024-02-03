import { lazy } from 'react';

const Analytics = lazy(() => import('./Analytics'));

/**
 * The Example page config.
 */
const AnalyticsConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: 'analytics',
			element: <Analytics />
		}
	]
};

export default AnalyticsConfig;
