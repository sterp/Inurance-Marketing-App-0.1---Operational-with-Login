import FuseUtils from '@fuse/utils';
import FuseLoading from '@fuse/core/FuseLoading';
import { Navigate } from 'react-router-dom';
import settingsConfig from 'app/configs/settingsConfig';
import { FuseRouteConfigsType, FuseRoutesType } from '@fuse/utils/FuseUtils';
import SignInConfig from '../main/sign-in/SignInConfig';
import SignUpConfig from '../main/sign-up/SignUpConfig';
import SignOutConfig from '../main/sign-out/SignOutConfig';
import Error404Page from '../main/404/Error404Page';
import ExampleConfig from '../main/example/ExampleConfig';
import CampaignConfig from '../main/campaign/CampaignConfig';
import AnalyticsConfig from '../main/analytics/AnalyticsConfig';
import OverviewConfig from '../main/overview/OverviewConfig';
import WebsiteConfig from '../main/website/WebsiteConfig';
import TasksConfig from '../main/tasks/TasksConfig';
import ContentConfig from '../main/content/ContentConfig';
import SocialConfig from '../main/social/SocialConfig';
import SeoConfig from '../main/seo/SeoConfig';
import LocalConfig from '../main/local/LocalConfig';
import PaidadsConfig from '../main/paidads/PaidadsConfig';
import EmailmarketingConfig from '../main/emailmarketing/EmailmarketingConfig';
import ServicesConfig from '../main/services/ServicesConfig';
import ReputationConfig from '../main/reputation/ReputationConfig';
import ReportsConfig from '../main/reports/ReportsConfig';
import UsersConfig from '../main/users/UsersConfig';
import DemoContent from '@fuse/core/DemoContent';



const routeConfigs: FuseRouteConfigsType = [UsersConfig, ReportsConfig, ReputationConfig, ServicesConfig, EmailmarketingConfig, PaidadsConfig, LocalConfig, SeoConfig, SocialConfig, ContentConfig, TasksConfig, WebsiteConfig, OverviewConfig, AnalyticsConfig, CampaignConfig, ExampleConfig, SignOutConfig, SignInConfig, SignUpConfig];

/**
 * The routes of the application.
 */
const routes: FuseRoutesType = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs, settingsConfig.defaultAuth),
	{
		path: '/',
		element: <Navigate to="/" />,
		auth: settingsConfig.defaultAuth
	},
	{
		path: 'loading',
		element: <FuseLoading />
	},
	{
		path: '404',
		element: <Error404Page />
	},
	{
		path: '*',
		element: <Navigate to="404" />
	}
];

export default routes;
