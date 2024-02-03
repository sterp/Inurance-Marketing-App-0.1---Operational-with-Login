import { lazy } from 'react';

const Campaign = lazy(() => import('./Campaign'));

/**
 * The Example page config.
 */
const CampaignConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: 'campaign',
			element: <Campaign />
		}
	]
};

export default CampaignConfig;
