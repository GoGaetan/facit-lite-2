import React, { lazy } from 'react';
import { dashboardMenu, demoPages, layoutMenu } from '../menu';
import Login from '../pages/presentation/auth/Login';

const LANDING = {
	DASHBOARD: lazy(() => import('../pages/dashboard/DashboardPage')),
};
const AUTH = {
	PAGE_404: lazy(() => import('../pages/presentation/auth/Page404')),
};
const PAGE_LAYOUTS = {
	HEADER_SUBHEADER: lazy(() => import('../pages/presentation/page-layouts/HeaderAndSubheader')),
	HEADER: lazy(() => import('../pages/presentation/page-layouts/OnlyHeader')),
	SUBHEADER: lazy(() => import('../pages/presentation/page-layouts/OnlySubheader')),
	CONTENT: lazy(() => import('../pages/presentation/page-layouts/OnlyContent')),
	BLANK: lazy(() => import('../pages/presentation/page-layouts/Blank')),
	ASIDE: lazy(() => import('../pages/presentation/aside-types/DefaultAsidePage')),
	MINIMIZE_ASIDE: lazy(() => import('../pages/presentation/aside-types/MinimizeAsidePage')),
};

const APP = {
	TRANSACTIONS: {
		TRANSACTIONS: lazy(() => import('../pages/presentation/transactions/TransactionsList')),
		// TRANSACTION: lazy(() => import('../pages/presentation/crm/Customer')),
		// SALES: lazy(() => import('../pages/presentation/crm/Sales')),
		// INVOICE: lazy(() => import('../pages/presentation/crm/Invoice')),
	},
	FINANCIALSSTATE: {
		FINANCIAL: lazy(() => import('../pages/presentation/financials-state/FinancialsState')),
		// TRANSACTION: lazy(() => import('../pages/presentation/crm/Customer')),
		// SALES: lazy(() => import('../pages/presentation/crm/Sales')),
		// INVOICE: lazy(() => import('../pages/presentation/crm/Invoice')),
	},
};

const presentation = [
	/**
	 * Landing
	 */
	{
		path: dashboardMenu.dashboard.path,
		element: <LANDING.DASHBOARD />,
		exact: true,
	},
	{
		path: demoPages.page404.path,
		element: <AUTH.PAGE_404 />,
		exact: true,
	},
	{
		path: demoPages.login.path,
		element: <Login />,
		exact: true,
	},
	{
		path: demoPages.signUp.path,
		element: <Login isSignUp />,
		exact: true,
	},

	/** ************************************************** */

	/**
	 * Page Layout Types
	 */
	{
		path: layoutMenu.blank.path,
		element: <PAGE_LAYOUTS.BLANK />,
		exact: true,
	},
	{
		path: layoutMenu.pageLayout.subMenu.headerAndSubheader.path,
		element: <PAGE_LAYOUTS.HEADER_SUBHEADER />,
		exact: true,
	},
	{
		path: layoutMenu.pageLayout.subMenu.onlyHeader.path,
		element: <PAGE_LAYOUTS.HEADER />,
		exact: true,
	},
	{
		path: layoutMenu.pageLayout.subMenu.onlySubheader.path,
		element: <PAGE_LAYOUTS.SUBHEADER />,
		exact: true,
	},
	{
		path: layoutMenu.pageLayout.subMenu.onlyContent.path,
		element: <PAGE_LAYOUTS.CONTENT />,
		exact: true,
	},
	{
		path: layoutMenu.asideTypes.subMenu.defaultAside.path,
		element: <PAGE_LAYOUTS.ASIDE />,
		exact: true,
	},
	{
		path: layoutMenu.asideTypes.subMenu.minimizeAside.path,
		element: <PAGE_LAYOUTS.MINIMIZE_ASIDE />,
		exact: true,
	},

	/**
	 * App > TRANSACTIONS
	 */
	{
		path: demoPages.transactions.path,
		element: <APP.TRANSACTIONS.TRANSACTIONS />,
		exact: true,
	},
	/**
	 * App > FINANCIALS
	 */
	// CI
	{
		path: demoPages.financialStates.subMenu.onlyCotedIvoire.path,
		element: <APP.FINANCIALSSTATE.FINANCIAL />,
		exact: true,
	},
	{
		path: demoPages.financialStates.subMenu.onlyMali.path,
		element: <APP.FINANCIALSSTATE.FINANCIAL />,
		exact: true,
	},
	{
		path: demoPages.financialStates.subMenu.onlyCameroon.path,
		element: <APP.FINANCIALSSTATE.FINANCIAL />,
		exact: true,
	},
	{
		path: demoPages.financialStates.subMenu.onlySenegal.path,
		element: <APP.FINANCIALSSTATE.FINANCIAL />,
		exact: true,
	},
	{
		path: demoPages.financialStates.subMenu.onlyGuinea.path,
		element: <APP.FINANCIALSSTATE.FINANCIAL />,
		exact: true,
	},
	{
		path: demoPages.financialStates.subMenu.onlyBurkinaFaso.path,
		element: <APP.FINANCIALSSTATE.FINANCIAL />,
		exact: true,
	},
	{
		path: demoPages.financialStates.subMenu.onlyTogo.path,
		element: <APP.FINANCIALSSTATE.FINANCIAL />,
		exact: true,
	},
];
const contents = [...presentation];

export default contents;
