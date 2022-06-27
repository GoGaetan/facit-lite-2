export const homeMenu = {
	intro: { id: 'intro', text: 'Intro', path: '#intro', icon: 'Vrpano', subMenu: null },
	bootstrap: {
		id: 'bootstrap',
		text: 'Bootstrap Components',
		path: '#bootstrap',
		icon: 'BootstrapFill',
		subMenu: null,
	},
	storybook: {
		id: 'storybook',
		text: 'Storybook',
		path: '#storybook',
		icon: 'CustomStorybook',
		subMenu: null,
	},
	formik: {
		id: 'formik',
		text: 'Formik',
		path: '#formik',
		icon: 'CheckBox',
		subMenu: null,
	},
	apex: {
		id: 'apex',
		text: 'Apex Charts',
		path: '#apex',
		icon: 'AreaChart',
		subMenu: null,
	},
};

export const dashboardMenu = {
	dashboard: {
		id: 'dashboard',
		text: 'Dashboard',
		path: '/',
		icon: 'Dashboard',
		subMenu: null,
	},
};

export const demoPages = {
	auth: {
		id: 'operations',
		text: 'Operations Pages',
		icon: 'Extension',
	},
	transactions: {
		id: 'transactionsList',
		text: 'Transactions',
		path: 'transactions/transactions',
		icon: 'PublishedWithChanges',
	},
	transactionID: {
		id: 'transactionID',
		text: 'transactionID',
		path: 'transactions/transaction',
		hide: true,
	},
	transaction: {
		id: 'transaction',
		text: 'transaction',
		path: 'transactions/transaction/1',
		icon: 'Badge',
		hide: true,
	},
	financialStates: {
		id: 'financialsStates',
		text: 'Financial State',
		path: 'financials/financials',
		icon: 'Store',
		subMenu: {
			onlyCotedIvoire: {
				id: 'onlyCotedIvoire',
				text: 'Cote divoire',
				path: 'financials/ci',
				icon: 'ViewAgenda',
			},
			onlySenegal: {
				id: 'onlySenegal',
				text: 'Senegal',
				path: 'financials/sn',
				icon: 'ViewStream',
			},
			onlyBurkinaFaso: {
				id: 'onlyBurkinaFaso',
				text: 'Burkina FASO',
				path: 'financials/bf',
				icon: 'ViewStream',
			},
			onlyTogo: {
				id: 'onlyTogo',
				text: 'Togo',
				path: 'financials/tg',
				icon: 'WebAsset',
			},
			onlyCameroon: {
				id: 'onlyCameroon',
				text: 'Cameroon',
				path: 'financials/cm',
				icon: 'ViewStream',
			},
			onlyMali: {
				id: 'onlyMali',
				text: 'Mali',
				path: 'financials/ml',
				icon: 'WebAsset',
			},
			onlyGuinea: {
				id: 'onlyGuinea',
				text: 'Guinea',
				path: 'financials/gn',
				icon: 'WebAsset',
			},
		},
	},
	login: {
		id: 'login',
		text: 'Login',
		path: 'auth-pages/login',
		icon: 'Login',
		hide: true,
	},
	productID: {
		id: 'productID',
		text: 'productID',
		path: 'sales/product',
		hide: true,
	},
	signUp: {
		id: 'signUp',
		text: 'Sign Up',
		path: 'auth-pages/sign-up',
		icon: 'PersonAdd',
		hide: true,
	},
	page404: {
		id: 'Page404',
		text: '404 Page',
		path: 'auth-pages/404',
		icon: 'ReportGmailerrorred',
		hide: true,
	},
	// sales: {
	// 	id: 'sales',
	// 	text: 'Sales',
	// 	path: 'sales',
	// 	icon: 'Store',
	// 	hide: true,
	// 	subMenu: {
	// 		// dashboard: dashboardMenu.dashboard,
	// 		hide: true,
	// 		salesList: {
	// 			id: 'products',
	// 			text: 'Sales List',
	// 			path: 'sales/sales-list',
	// 			icon: 'FactCheck',
	// 			hide: true,
	// 		},
	// 		productsGrid: {
	// 			id: 'productsGrid',
	// 			text: 'Products Grid',
	// 			path: 'sales/grid',
	// 			icon: 'CalendarViewMonth',
	// 			hide: true,
	// 		},
	// productID: {
	// 	id: 'productID',
	// 	text: 'productID',
	// 	path: 'sales/product',
	// 	hide: true,
	// },
	// 		product: {
	// 			id: 'product',
	// 			text: 'Product',
	// 			path: 'sales/product/1',
	// 			icon: 'QrCode2',
	// 			hide: true,
	// 		},
	// 		transactions: {
	// 			id: 'transactions',
	// 			text: 'Transactions',
	// 			path: 'sales/transactions',
	// 			icon: 'PublishedWithChanges',
	// 			hide: true,
	// 		},
	// },
	// },
};

export const layoutMenu = {
	layoutTypes: {
		id: 'layoutTypes',
		text: 'Page Layout Types',
		hide: true,
	},
	blank: {
		id: 'blank',
		text: 'Blank',
		path: 'page-layouts/blank',
		icon: 'check_box_outline_blank ',
		hide: true,
	},
	pageLayout: {
		id: 'pageLayout',
		text: 'Page Layout',
		path: 'page-layouts',
		icon: 'BackupTable',
		hide: true,
		subMenu: {
			headerAndSubheader: {
				id: 'headerAndSubheader',
				text: 'Header & Subheader',
				path: 'page-layouts/header-and-subheader',
				icon: 'ViewAgenda',
				hide: true,
			},
			onlyHeader: {
				id: 'onlyHeader',
				text: 'Only Header',
				path: 'page-layouts/only-header',
				icon: 'ViewStream',
				hide: true,
			},
			onlySubheader: {
				id: 'onlySubheader',
				text: 'Only Subheader',
				path: 'page-layouts/only-subheader',
				icon: 'ViewStream',
				hide: true,
			},
			onlyContent: {
				id: 'onlyContent',
				text: 'Only Content',
				path: 'page-layouts/only-content',
				icon: 'WebAsset',
				hide: true,
			},
		},
	},
	asideTypes: {
		id: 'asideTypes',
		text: 'Aside Types',
		path: 'aside-types',
		icon: 'Vertical Split',
		hide: true,
		subMenu: {
			defaultAside: {
				id: 'defaultAside',
				text: 'Default Aside',
				path: 'aside-types/default-aside',
				icon: 'ViewQuilt',
				hide: true,
			},
			minimizeAside: {
				id: 'minimizeAside',
				text: 'Minimize Aside',
				path: 'aside-types/minimize-aside',
				icon: 'View Compact',
				hide: true,
			},
		},
	},
};

export const productsMenu = {
	companyA: { id: 'companyA', text: 'Company A', path: 'grid-pages/products', subMenu: null },
	companyB: { id: 'companyB', text: 'Company B', path: '/', subMenu: null },
	companyC: { id: 'companyC', text: 'Company C', path: '/', subMenu: null },
	companyD: { id: 'companyD', text: 'Company D', path: '/', subMenu: null },
};
