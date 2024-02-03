import i18next from 'i18next';
import { FuseNavItemType } from '@fuse/core/FuseNavigation/types/FuseNavItemType';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

/**
 * The navigationConfig object is an array of navigation items for the Fuse application.
 */
const navigationConfig: FuseNavItemType[] = [
	
	
	{
		id: 'example-component',
		title: 'Example',
		type: 'item',
		icon: 'heroicons-outline:star',
		url: 'example'
	},
	{
		id: 'campaign-component',
		title: 'Campaign',
		type: 'item',
		icon: 'heroicons-outline:star',
		url: 'campaign'
	},{
		id: 'analytics-component',
		title: 'Analytics',
		type: 'item',
		icon: 'heroicons-outline:star',
		url: 'analytics'
	},
	/*
	{
		id: 'content-component',
		title: 'Content',
		translate: 'CONTENT',
		type: 'item',
		icon: 'heroicons-outline:star',
		url: 'content'
	},
	{
		id: 'website-component',
		title: 'Website',
		translate: 'WEBSITE',
		type: 'item',
		icon: 'heroicons-outline:star',
		url: 'campaign'
	},
	{
		id: 'analytics-component',
		title: 'Analytics',
		translate: 'ANALYTICS',
		type: 'item',
		icon: 'heroicons-outline:star',
		url: 'campaign'
	},
	{
		id: 'tasks-component',
		title: 'Tasks',
		translate: 'TASKS',
		type: 'item',
		icon: 'heroicons-outline:star',
		url: 'campaign'
	},
	{
		id: 'social-component',
		title: 'Social',
		translate: 'SOCIAL',
		type: 'item',
		icon: 'heroicons-outline:star',
		url: 'campaign'
	},
	{
		id: 'seo-component',
		title: 'SEO',
		translate: 'SEO',
		type: 'item',
		icon: 'heroicons-outline:star',
		url: 'campaign'
	},
	{
		id: 'local-component',
		title: 'Local',
		translate: 'LOCAL',
		type: 'item',
		icon: 'heroicons-outline:star',
		url: 'campaign'
	},
	{
		id: 'paidads-component',
		title: 'Paid Ads',
		translate: 'PAIDADS',
		type: 'item',
		icon: 'heroicons-outline:star',
		url: 'campaign'
	},
	{
		id: 'emailmarketing-component',
		title: 'Email Marketing',
		translate: 'EMAILMARKETING',
		type: 'item',
		icon: 'heroicons-outline:star',
		url: 'campaign'
	},
	{
		id: 'services-component',
		title: 'Purchase Services',
		translate: 'SERVICES',
		type: 'item',
		icon: 'heroicons-outline:star',
		url: 'campaign'
	},
	{
		id: 'reputation-component',
		title: 'Reputation',
		translate: 'REPUTATION',
		type: 'item',
		icon: 'heroicons-outline:star',
		url: 'campaign'
	},
	{
		id: 'reports-component',
		title: 'Reports',
		translate: 'REPORTS',
		type: 'item',
		icon: 'heroicons-outline:star',
		url: 'campaign'
	},
	{
		id: 'users-component',
		title: 'Users',
		translate: 'USERS',
		type: 'item',
		icon: 'heroicons-outline:star',
		url: 'campaign'
	},*/
];

export default navigationConfig;
