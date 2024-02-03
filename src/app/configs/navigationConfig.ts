import { FuseNavItemType } from '@fuse/core/FuseNavigation/types/FuseNavItemType';

/**
 * The navigationConfig object is an array of navigation items for the Fuse application.
 */
const navigationConfig: FuseNavItemType[] = [
	
	
	{
		id: 'overview-component',
		title: 'Overview',
		type: 'item',
		icon: 'heroicons-outline:home',
		url: 'overview'
	},
	{
		id: 'campaign-component',
		title: 'Campaign',
		type: 'item',
		icon: 'heroicons-outline:collection',
		url: 'campaign'
	},
	{
		id: 'website-component',
		title: 'Website',
		type: 'item',
		icon: 'heroicons-outline:desktop-computer',
		url: 'website'
	},
	{
		id: 'analytics-component',
		title: 'Analytics',
		type: 'item',
		icon: 'heroicons-outline:trending-up',
		url: 'analytics'
	},
	{
		id: 'tasks-component',
		title: 'Tasks',
		type: 'item',
		icon: 'heroicons-outline:clipboard-check',
		url: 'tasks'
	},
	{
		id: 'content-component',
		title: 'Content',
		type: 'item',
		icon: 'heroicons-outline:document-text',
		url: 'content'
	},
	{
		id: 'social-component',
		title: 'Social',
		type: 'item',
		icon: 'heroicons-outline:share',
		url: 'social'
	},
	{
		id: 'seo-component',
		title: 'SEO',
		type: 'item',
		icon: 'heroicons-outline:globe-alt',
		url: 'seo'
	},
	{
		id: 'local-component',
		title: 'Local',
		type: 'item',
		icon: 'heroicons-outline:location-marker',
		url: 'local'
	},
	{
		id: 'paidads-component',
		title: 'Paid Ads',
		type: 'item',
		icon: 'heroicons-outline:template',
		url: 'paidads'
	},
	{
		id: 'emailmarketing-component',
		title: 'Email Marketing',
		type: 'item',
		icon: 'heroicons-outline:mail-open',
		url: 'emailmarketing'
	},
	{
		id: 'services-component',
		title: 'Purchase Services',
		type: 'item',
		icon: 'heroicons-outline:shield-check',
		url: 'services'
	},
	{
		id: 'reputation-component',
		title: 'Reputation',
		type: 'item',
		icon: 'heroicons-outline:star',
		url: 'reputation'
	},
	{
		id: 'reports-component',
		title: 'Reports',
		type: 'item',
		icon: 'heroicons-outline:presentation-chart-line',
		url: 'reports'
	},
	{
		id: 'users-component',
		title: 'Users',
		type: 'item',
		icon: 'heroicons-outline:user-group',
		url: 'users'
	},
	{
		id: 'example-component',
		title: 'Page Template',
		type: 'item',
		icon: 'heroicons-outline:save',
		url: 'example'
	},
];

export default navigationConfig;
