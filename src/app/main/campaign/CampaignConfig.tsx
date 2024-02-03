import i18next from 'i18next';
import { lazy } from 'react';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';

i18next.addResourceBundle('en', 'campaignPage', en);
i18next.addResourceBundle('tr', 'campaignPage', tr);
i18next.addResourceBundle('ar', 'campaignPage', ar);

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
