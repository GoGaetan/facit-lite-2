import React, { useEffect, useState } from 'react';
// useCallback,
import moment from 'moment';

// import { Link } from 'react-router-dom';
// useNavigate
// import classNames from 'classnames';
import { useTour } from '@reactour/tour';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import SubHeader, {
	SubHeaderLeft,
	// SubHeaderRight,
	SubheaderSeparator,
} from '../../layout/SubHeader/SubHeader';
import Page from '../../layout/Page/Page';
import Button, { ButtonGroup } from '../../components/bootstrap/Button';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../components/bootstrap/Card';
import Chart from '../../components/extras/Chart';

// import Dropdown, {
// 	DropdownItem,
// 	DropdownMenu,
// 	DropdownToggle,
// } from '../../components/bootstrap/Dropdown';
// import Alert, { AlertHeading } from '../../components/bootstrap/Alert';
// import Icon from '../../components/icon/Icon';
// import Badge from '../../components/bootstrap/Badge';

// import Popovers from '../../components/bootstrap/Popovers';
// import CommonAvatarTeam from '../../components/common/CommonAvatarTeam';
// import CommonMyWallet from '../common/CommonMyWallet';

import Company1 from '../../assets/flags/ci.png';
import Company2 from '../../assets/flags/ml.png';
import Company3 from '../../assets/flags/sn.png';
import Company4 from '../../assets/flags/cm.png';
import Company5 from '../../assets/flags/gn.png';
import Company6 from '../../assets/flags/bf.png';

// import UserContact from '../../components/UserContact';
// import Avatar, { AvatarGroup } from '../../components/Avatar';
// import USERS from '../../common/data/userDummyData';
// import { demoPages } from '../../menu';
// import data from '../../common/data/dummyProductData';
// import { average, priceFormat } from '../../helpers/helpers';
// import PercentComparison from '../../components/extras/PercentComparison';
// import PaginationButtons, { dataPagination, PER_COUNT } from '../../components/PaginationButtons';
// import useSortableData from '../../hooks/useSortableData';
import useDarkMode from '../../hooks/useDarkMode';
// import Timeline, { TimelineItem } from '../../components/extras/Timeline';
// import CommonTodo from '../common/CommonTodo';

// imgWebp, img,
// eslint-disable-next-line react/prop-types

/*
const AnswerCustomer = ({ id, name, job, value, color }) => {
	const { darkModeStatus } = useDarkMode();

	const [state] = useState({
		series: [value],
		options: {
			chart: {
				type: 'radialBar',
				width: 50,
				height: 50,
				sparkline: {
					enabled: true,
				},
			},
			dataLabels: {
				enabled: false,
			},
			plotOptions: {
				radialBar: {
					hollow: {
						margin: 0,
						size: '50%',
					},
					track: {
						margin: 0,
					},
					dataLabels: {
						show: false,
					},
				},
			},
			stroke: {
				lineCap: 'round',
			},
			colors: [
				(color === 'primary' && process.env.REACT_APP_PRIMARY_COLOR) ||
					(color === 'secondary' && process.env.REACT_APP_SECONDARY_COLOR) ||
					(color === 'success' && process.env.REACT_APP_SUCCESS_COLOR) ||
					(color === 'info' && process.env.REACT_APP_INFO_COLOR) ||
					(color === 'warning' && process.env.REACT_APP_WARNING_COLOR) ||
					(color === 'danger' && process.env.REACT_APP_DANGER_COLOR),
			],
		},
	});
	return (
		<div className='col-12'>
			<div className='row g-2'>
				<div className='col d-flex'>
					<div className='flex-shrink-0'>						
          	<Avatar
							src={img}
							srcSet={imgWebp}
							size={54}
							userName={name}
							color={color}
          />        
					</div>
					<div className='flex-grow-1 ms-3 d-flex justify-content-between align-items-center'>
						<div>
							<Link
								to={`../${demoPages.appointment.subMenu.employeeID.path}/${id}`}
								className={classNames('fw-bold fs-6 mb-0', {
									'link-dark': !darkModeStatus,
									'link-light': darkModeStatus,
								})}>
								{name}
							</Link>
							<div className='text-muted mt-n1'>
								<small>{job}</small>
							</div>
						</div>
					</div>
				</div>
				<div className='col-auto'>
					<div className='d-flex align-items-center'>
						<Popovers desc='Remaining time' trigger='hover'>
							<span className='me-3'>%{value}</span>
						</Popovers>
						<Chart
							series={state.series}
							options={state.options}
							type={state.options.chart.type}
							height={state.options.chart.height}
							width={state.options.chart.width}
							className='me-3'
						/>
						<Button
							color='info'
							isLight
							icon='ScheduleSend'
							className='text-nowrap'
							tag='a'
							href='mailto:example@site.com'>
							Send
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
*/
const DashboardPage = () => {
	/**
	 * Tour Start
	 */
	const { setIsOpen } = useTour();
	useEffect(() => {
		if (localStorage.getItem('tourModalStarted') !== 'shown') {
			setTimeout(() => {
				setIsOpen(true);
				localStorage.setItem('tourModalStarted', 'shown');
			}, 3000);
		}
		return () => {};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// , darkModeStatus
	const { themeStatus } = useDarkMode();

	// const navigate = useNavigate();
	// const handleOnClickToEmployeeListPage = useCallback(
	// 	() => navigate(`../${demoPages.appointment.subMenu.employeeList.path}`),
	// 	[navigate],
	// );

	const TABS = {
		WEEKLY: 'Weekly',
		MONTHLY: 'Monthly',
		YEARLY: 'Yearly',
	};
	const [activeTab, setActiveTab] = useState(TABS.YEARLY);

	const [sales, setSales] = useState({
		series: [
			{
				data: [34, 32, 36, 34, 34],
			},
		],
		options: {
			colors: [process.env.REACT_APP_WARNING_COLOR],
			chart: {
				type: 'line',
				width: '100%',
				height: 150,
				sparkline: {
					enabled: true,
				},
			},
			tooltip: {
				theme: 'dark',
				fixed: {
					enabled: false,
				},
				x: {
					show: false,
				},
				y: {
					title: {
						// eslint-disable-next-line no-unused-vars
						formatter(seriesName) {
							return '';
						},
					},
				},
			},
			stroke: {
				curve: 'smooth',
				width: 2,
			},
		},
		sales: {
			compare: 24,
		},
		campaigns: {
			price: 3265.72,
			compare: 5000,
		},
		coupons: {
			price: 2654.2,
			compare: 2300,
		},
	});
	useEffect(() => {
		if (activeTab === TABS.YEARLY) {
			setSales({
				series: [
					{
						data: [34, 32, 36, 34, 34],
					},
				],
				sales: {
					compare: 24,
				},
				campaigns: {
					price: 3265.72,
					compare: 5000,
				},
				coupons: {
					price: 2654.2,
					compare: 2300,
				},
				options: sales.options,
			});
		}
		if (activeTab === TABS.MONTHLY) {
			setSales({
				series: [
					{
						data: [32, 35, 40, 30, 32],
					},
				],
				sales: {
					compare: 27,
				},
				campaigns: {
					price: 450,
					compare: 480,
				},
				coupons: {
					price: 98,
					compare: 120,
				},
				options: sales.options,
			});
		}
		if (activeTab === TABS.WEEKLY) {
			setSales({
				series: [
					{
						data: [28, 32, 30, 29, 30],
					},
				],
				sales: {
					compare: 12,
				},
				campaigns: {
					price: 94,
					compare: 80,
				},
				coupons: {
					price: 80,
					compare: 45,
				},
				options: sales.options,
			});
		}
		return () => {};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeTab]);

	const [year, setYear] = useState(Number(moment().format('YYYY')));
	const companies = [
		{ name: "Cote d'ivoire", img: Company1 },
		{ name: 'Mali', img: Company2 },
		{ name: 'Senegal', img: Company3 },
		{ name: 'Cameroon', img: Company4 },
		{ name: 'Guin??e', img: Company5 },
		{ name: 'Burkina FASO', img: Company6 },
	];
	const COMPANIES_TAB = {
		COMP1: companies[0].name,
		COMP2: companies[1].name,
		COMP3: companies[2].name,
		COMP4: companies[3].name,
		COMP5: companies[4].name,
		COMP6: companies[5].name,
	};
	const [activeCompanyTab, setActiveCompanyTab] = useState(COMPANIES_TAB.COMP1);
	function randomize(value, x = year) {
		if (x === 2019) {
			if (value.toFixed(0) % 2) {
				return (value * 1.5).toFixed(2);
			}
			return (value / 1.4).toFixed(2);
		}
		if (x === 2020) {
			if (value.toFixed(0) % 2) {
				return (value / 1.5).toFixed(2);
			}
			return (value * 1.4).toFixed(2);
		}
		if (x === 2021) {
			if (value.toFixed(0) % 2) {
				return (value / 2).toFixed(2);
			}
			return (value * 1.4).toFixed(2);
		}
		return value.toFixed(2);
	}

	const salesByStoreOptions = {
		chart: {
			height: 370,
			type: 'line',
			stacked: false,
			toolbar: { show: false },
		},
		colors: [
			process.env.REACT_APP_INFO_COLOR,
			process.env.REACT_APP_SUCCESS_COLOR,
			process.env.REACT_APP_WARNING_COLOR,
		],
		dataLabels: {
			enabled: false,
		},
		stroke: {
			width: [1, 1, 4],
			curve: 'smooth',
		},
		plotOptions: {
			bar: {
				borderRadius: 5,
				columnWidth: '20px',
			},
		},
		xaxis: {
			categories: [
				'Jan',
				'Feb',
				'Mar',
				'Apr',
				'May',
				'Jun',
				'Jul',
				'Aug',
				'Sep',
				'Oct',
				'Nov',
				'Dec',
			],
		},
		yaxis: [
			{
				axisTicks: {
					show: true,
				},
				axisBorder: {
					show: true,
					color: process.env.REACT_APP_INFO_COLOR,
				},
				labels: {
					style: {
						colors: process.env.REACT_APP_INFO_COLOR,
					},
				},
				title: {
					text: 'Income (thousand cores)',
					style: {
						color: process.env.REACT_APP_INFO_COLOR,
					},
				},
				tooltip: {
					enabled: true,
				},
			},
			{
				seriesName: 'Income',
				opposite: true,
				axisTicks: {
					show: true,
				},
				axisBorder: {
					show: true,
					color: process.env.REACT_APP_SUCCESS_COLOR,
				},
				labels: {
					style: {
						colors: process.env.REACT_APP_SUCCESS_COLOR,
					},
				},
				title: {
					text: 'Operating Cash Flow (thousand cores)',
					style: {
						color: process.env.REACT_APP_SUCCESS_COLOR,
					},
				},
			},
			{
				seriesName: 'Revenue',
				opposite: true,
				axisTicks: {
					show: true,
				},
				axisBorder: {
					show: true,
					color: process.env.REACT_APP_WARNING_COLOR,
				},
				labels: {
					style: {
						colors: process.env.REACT_APP_WARNING_COLOR,
					},
				},
				title: {
					text: 'Revenue (thousand cores)',
					style: {
						color: process.env.REACT_APP_WARNING_COLOR,
					},
				},
			},
		],
		tooltip: {
			theme: 'dark',
			fixed: {
				enabled: true,
				position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
				offsetY: 30,
				offsetX: 60,
			},
		},
		legend: {
			horizontalAlign: 'left',
			offsetX: 40,
		},
	};
	const salesByStoreSeries1 = [
		{
			name: 'Income',
			type: 'column',
			data: [
				randomize(1.4),
				randomize(2),
				randomize(2.5),
				randomize(1.5),
				randomize(2.5),
				randomize(2.8),
				randomize(3.8),
				randomize(4.6),
			],
		},
		{
			name: 'Cash Flow',
			type: 'column',
			data: [
				randomize(1.1),
				randomize(3),
				randomize(3.1),
				randomize(4),
				randomize(4.1),
				randomize(4.9),
				randomize(6.5),
				randomize(8.5),
			],
		},
		{
			name: 'Revenue',
			type: 'line',
			data: [
				randomize(20),
				randomize(29),
				randomize(37),
				randomize(36),
				randomize(44),
				randomize(45),
				randomize(50),
				randomize(58),
			],
		},
	];
	const salesByStoreSeries2 = [
		{
			name: 'Income',
			type: 'column',
			data: [
				randomize(4.4),
				randomize(5),
				randomize(6.5),
				randomize(7.5),
				randomize(6.5),
				randomize(9.8),
				randomize(7.8),
				randomize(6.6),
			],
		},
		{
			name: 'Cash Flow',
			type: 'column',
			data: [
				randomize(3),
				randomize(3),
				randomize(5.1),
				randomize(5),
				randomize(7.1),
				randomize(9.9),
				randomize(8.5),
				randomize(9.5),
			],
		},
		{
			name: 'Revenue',
			type: 'line',
			data: [
				randomize(34),
				randomize(54),
				randomize(43),
				randomize(63),
				randomize(35),
				randomize(63),
				randomize(46),
				randomize(53),
			],
		},
	];
	const salesByStoreSeries3 = [
		{
			name: 'Income',
			type: 'column',
			data: [
				randomize(4),
				randomize(3),
				randomize(2.5),
				randomize(1.5),
				randomize(2.5),
				randomize(3.8),
				randomize(3.8),
				randomize(4.6),
			],
		},
		{
			name: 'Cash Flow',
			type: 'column',
			data: [
				randomize(2),
				randomize(5),
				randomize(6.1),
				randomize(2),
				randomize(6.1),
				randomize(3.9),
				randomize(6.5),
				randomize(8.5),
			],
		},
		{
			name: 'Revenue',
			type: 'line',
			data: [
				randomize(34),
				randomize(21),
				randomize(54),
				randomize(56),
				randomize(34),
				randomize(43),
				randomize(37),
				randomize(43),
			],
		},
	];
	const salesByStoreSeries4 = [
		{
			name: 'Income',
			type: 'column',
			data: [
				randomize(3),
				randomize(3.2),
				randomize(1.4),
				randomize(1.9),
				randomize(2.9),
				randomize(1.8),
				randomize(4.6),
				randomize(4.2),
			],
		},
		{
			name: 'Cash Flow',
			type: 'column',
			data: [
				randomize(3),
				randomize(2),
				randomize(3.1),
				randomize(5),
				randomize(3.1),
				randomize(3.9),
				randomize(3.5),
				randomize(5.5),
			],
		},
		{
			name: 'Revenue',
			type: 'line',
			data: [
				randomize(30),
				randomize(43),
				randomize(51),
				randomize(19),
				randomize(32),
				randomize(25),
				randomize(39),
				randomize(42),
			],
		},
	];
	const salesByStoreSeries5 = [
		{
			name: 'Income',
			type: 'column',
			data: [
				randomize(4),
				randomize(3),
				randomize(2.5),
				randomize(1.5),
				randomize(2.5),
				randomize(3.8),
				randomize(3.8),
				randomize(4.6),
			],
		},
		{
			name: 'Cash Flow',
			type: 'column',
			data: [
				randomize(2),
				randomize(5),
				randomize(6.1),
				randomize(2),
				randomize(6.1),
				randomize(3.9),
				randomize(6.5),
				randomize(8.5),
			],
		},
		{
			name: 'Revenue',
			type: 'line',
			data: [
				randomize(34),
				randomize(21),
				randomize(54),
				randomize(56),
				randomize(34),
				randomize(43),
				randomize(37),
				randomize(43),
			],
		},
	];
	const salesByStoreSeries6 = [
		{
			name: 'Income',
			type: 'column',
			data: [
				randomize(3),
				randomize(3.2),
				randomize(1.4),
				randomize(1.9),
				randomize(2.9),
				randomize(1.8),
				randomize(4.6),
				randomize(4.2),
			],
		},
		{
			name: 'Cash Flow',
			type: 'column',
			data: [
				randomize(3),
				randomize(2),
				randomize(3.1),
				randomize(5),
				randomize(3.1),
				randomize(3.9),
				randomize(3.5),
				randomize(5.5),
			],
		},
		{
			name: 'Revenue',
			type: 'line',
			data: [
				randomize(30),
				randomize(43),
				randomize(51),
				randomize(19),
				randomize(32),
				randomize(25),
				randomize(39),
				randomize(42),
			],
		},
	];

	// function compareLabel(amount = -1, name = false) {
	// 	if (activeTab === TABS.YEARLY) {
	// 		return name ? 'year' : moment().add(amount, 'year').format('YYYY');
	// 	}
	// 	if (activeTab === TABS.MONTHLY) {
	// 		return name ? 'month' : moment().add(amount, 'month').format('MMMM');
	// 	}
	// 	return name ? 'week' : moment().add(amount, 'week').format('w [th week]');
	// }

	return (
		<PageWrapper title='demoPages.sales.subMenu.dashboard.text'>
			{/* */}
			<SubHeader>
				<SubHeaderLeft>
					<span className='h4 mb-0 fw-bold'>Overview</span>
					<SubheaderSeparator />
					<ButtonGroup>
						{Object.keys(TABS).map((key) => (
							<Button
								key={key}
								color={activeTab === TABS[key] ? 'success' : themeStatus}
								onClick={() => setActiveTab(TABS[key])}>
								{TABS[key]}
							</Button>
						))}
					</ButtonGroup>
				</SubHeaderLeft>
				{/*
				<SubHeaderRight>
					<CommonAvatarTeam>
						<strong>Marketing</strong> Team
					</CommonAvatarTeam>
				</SubHeaderRight>
            */}
			</SubHeader>
			<Page container='fluid'>
				<div className='row'>
					{/*
        	<div className='col-12'>
						<Alert
							icon='Verified'
							isLight
							color='primary'
							borderWidth={0}
							className='shadow-3d-primary'
							isDismissible>
							<AlertHeading tag='h2' className='h4'>
								Congratulations! ????
							</AlertHeading>
							<span>You have reached your monthly sales targets.</span>
						</Alert>
					</div>

					
        	<div className='col-xl-4'>
						<UserContact
							name={`${USERS.SAM.name} ${USERS.SAM.surname}`}
							position='Team Lead'
							mail={`${USERS.SAM.username}@site.com`}
							phone='1234567'
							onChat={() =>
								navigate(`../${demoPages.chat.subMenu.withListChat.path}`)
							}
							src={USERS.SAM.src}
							srcSet={USERS.SAM.srcSet}
							color={USERS.SAM.color}
						/>
					</div> 
            
					<div className='col-xl-4'>
						<Card stretch>
							<CardHeader className='bg-transparent'>
								<CardLabel>
									<CardTitle tag='h4' className='h5'>
										Marketing Team
									</CardTitle>
									<CardSubTitle tag='h5' className='h6 text-muted'>
										There is a meeting at 12 o'clock.
									</CardSubTitle>
								</CardLabel>
								<CardActions>
									<Button
										icon='ArrowForwardIos'
										aria-label='Read More'
										hoverShadow='default'
										color={darkModeStatus ? 'dark' : null}
										onClick={handleOnClickToEmployeeListPage}
									/>
								</CardActions>
							</CardHeader>
							<CardBody>
								<AvatarGroup>
									<Avatar
										srcSet={USERS.GRACE.srcSet}
										src={USERS.GRACE.src}
										userName={`${USERS.GRACE.name} ${USERS.GRACE.surname}`}
										color={USERS.GRACE.color}
									/>
									<Avatar
										srcSet={USERS.SAM.srcSet}
										src={USERS.SAM.src}
										userName={`${USERS.SAM.name} ${USERS.SAM.surname}`}
										color={USERS.SAM.color}
									/>
									<Avatar
										srcSet={USERS.CHLOE.srcSet}
										src={USERS.CHLOE.src}
										userName={`${USERS.CHLOE.name} ${USERS.CHLOE.surname}`}
										color={USERS.CHLOE.color}
									/>

									<Avatar
										srcSet={USERS.JANE.srcSet}
										src={USERS.JANE.src}
										userName={`${USERS.JANE.name} ${USERS.JANE.surname}`}
										color={USERS.JANE.color}
									/>
									<Avatar
										srcSet={USERS.JOHN.srcSet}
										src={USERS.JOHN.src}
										userName={`${USERS.JOHN.name} ${USERS.JOHN.surname}`}
										color={USERS.JOHN.color}
									/>
									<Avatar
										srcSet={USERS.RYAN.srcSet}
										src={USERS.RYAN.src}
										userName={`${USERS.RYAN.name} ${USERS.RYAN.surname}`}
										color={USERS.RYAN.color}
									/>
								</AvatarGroup>
							</CardBody>
						</Card>
					</div> 
            
					<div className='col-xl-4'>
						<Card stretch>
							<CardHeader className='bg-transparent'>
								<CardLabel>
									<CardTitle tag='h4' className='h5'>
										Design Team
									</CardTitle>
									<CardSubTitle tag='h5' className='h6 text-muted'>
										There is a meeting at 15 o'clock.
									</CardSubTitle>
								</CardLabel>
								<CardActions>
									<Button
										icon='ArrowForwardIos'
										aria-label='Read More'
										hoverShadow='default'
										color={darkModeStatus ? 'dark' : null}
										onClick={handleOnClickToEmployeeListPage}
									/>
								</CardActions>
							</CardHeader>
							<CardBody>
								<AvatarGroup>
									<Avatar
										srcSet={USERS.JANE.srcSet}
										src={USERS.JANE.src}
										userName={`${USERS.JANE.name} ${USERS.JANE.surname}`}
										color={USERS.JANE.color}
									/>
									<Avatar
										srcSet={USERS.JOHN.srcSet}
										src={USERS.JOHN.src}
										userName={`${USERS.JOHN.name} ${USERS.JOHN.surname}`}
										color={USERS.JOHN.color}
									/>
									<Avatar
										srcSet={USERS.ELLA.srcSet}
										src={USERS.ELLA.src}
										userName={`${USERS.ELLA.name} ${USERS.ELLA.surname}`}
										color={USERS.ELLA.color}
									/>
									<Avatar
										srcSet={USERS.RYAN.srcSet}
										src={USERS.RYAN.src}
										userName={`${USERS.RYAN.name} ${USERS.RYAN.surname}`}
										color={USERS.RYAN.color}
									/>
								</AvatarGroup>
							</CardBody>
						</Card>
					</div>
            
					<div className='col-xxl-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='PointOfSale' iconColor='success'>
									<CardTitle tag='h4' className='h5'>
										Income
									</CardTitle>
									<CardSubTitle>{activeTab}</CardSubTitle>
								</CardLabel>
								<CardActions>
									<Dropdown>
										<DropdownToggle>
											<Button color='info' icon='Compare' isLight>
												Compared to <strong>{compareLabel()}</strong>
											</Button>
										</DropdownToggle>
										<DropdownMenu isAlignmentEnd size='sm'>
											<DropdownItem>
												<Button>{compareLabel(-2)}</Button>
											</DropdownItem>
											<DropdownItem>
												<Button>{compareLabel(-3)}</Button>
											</DropdownItem>
										</DropdownMenu>
									</Dropdown>
								</CardActions>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<div className='col-md-6'>
										<Card
											className={classNames(
												'transition-base rounded-2 mb-0 text-dark',
												{
													'bg-l25-warning bg-l10-warning-hover':
														!darkModeStatus,
													'bg-lo50-warning bg-lo25-warning-hover':
														darkModeStatus,
												},
											)}
											stretch
											shadow='sm'>
											<CardHeader className='bg-transparent'>
												<CardLabel>
													<CardTitle tag='h4' className='h5'>
														Sales
													</CardTitle>
												</CardLabel>
											</CardHeader>
											<CardBody>
												<Chart
													className='mx-n4'
													series={sales.series}
													options={sales.options}
													type={sales.options.chart.type}
													height={sales.options.chart.height}
													width={sales.options.chart.width}
												/>
												<div className='d-flex align-items-center pb-3'>
													<div className='flex-shrink-0'>
														<Icon
															icon='AttachMoney'
															size='4x'
															color='warning'
														/>
													</div>
													<div className='flex-grow-1 ms-3'>
														<div className='fw-bold fs-3 mb-0'>
															{priceFormat(
																average(sales.series[0].data),
															)}
															<PercentComparison
																valueOne={average(
																	sales.series[0].data,
																)}
																valueTwo={sales.sales.compare}
															/>
														</div>
														<div
															className={classNames({
																'text-muted': !darkModeStatus,
																'text-light': darkModeStatus,
															})}>
															Compared to (
															{priceFormat(sales.sales.compare)} last{' '}
															{compareLabel(0, true)})
														</div>
													</div>
												</div>
											</CardBody>
										</Card>
									</div>
									<div className='col-md-6'>
										<Card
											className={classNames(
												'transition-base rounded-2 mb-4 text-dark',
												{
													'bg-l25-secondary bg-l10-secondary-hover':
														!darkModeStatus,
													'bg-lo50-secondary bg-lo25-secondary-hover':
														darkModeStatus,
												},
											)}
											shadow='sm'>
											<CardHeader className='bg-transparent'>
												<CardLabel>
													<CardTitle tag='h4' className='h5'>
														Campaigns
													</CardTitle>
												</CardLabel>
											</CardHeader>
											<CardBody>
												<div className='d-flex align-items-center pb-3'>
													<div className='flex-shrink-0'>
														<Icon
															icon='LocalOffer'
															size='4x'
															color='secondary'
														/>
													</div>
													<div className='flex-grow-1 ms-3'>
														<div className='fw-bold fs-3 mb-0'>
															{priceFormat(sales.campaigns.price)}
															<PercentComparison
																valueOne={sales.campaigns.price}
																valueTwo={sales.campaigns.compare}
															/>
														</div>
														<div
															className={classNames({
																'text-muted': !darkModeStatus,
																'text-light': darkModeStatus,
															})}>
															Compared to (
															{priceFormat(sales.campaigns.compare)}{' '}
															last {compareLabel(0, true)})
														</div>
													</div>
												</div>
											</CardBody>
										</Card>
										<Card
											className={classNames(
												'transition-base rounded-2 mb-0 text-dark',
												{
													'bg-l25-primary bg-l10-primary-hover':
														!darkModeStatus,
													'bg-lo50-primary bg-lo25-primary-hover':
														darkModeStatus,
												},
											)}
											shadow='sm'>
											<CardHeader className='bg-transparent'>
												<CardLabel>
													<CardTitle tag='h4' className='h5'>
														Coupons
													</CardTitle>
												</CardLabel>
											</CardHeader>
											<CardBody>
												<div className='d-flex align-items-center pb-3'>
													<div className='flex-shrink-0'>
														<Icon
															icon='ConfirmationNumber'
															size='4x'
															color='primary'
														/>
													</div>
													<div className='flex-grow-1 ms-3'>
														<div className='fw-bold fs-3 mb-0'>
															{priceFormat(sales.coupons.price)}
															<PercentComparison
																valueOne={sales.coupons.price}
																valueTwo={sales.coupons.compare}
															/>
														</div>
														<div
															className={classNames({
																'text-muted': !darkModeStatus,
																'text-light': darkModeStatus,
															})}>
															Compared to (
															{priceFormat(sales.coupons.compare)}{' '}
															last {compareLabel(0, true)})
														</div>
													</div>
												</div>
											</CardBody>
										</Card>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
          
					<div className='col-xxl-3'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='NotificationsActive' iconColor='warning'>
									<CardTitle tag='h4' className='h5'>
										Recent Activities
									</CardTitle>
									<CardSubTitle>last 2 weeks</CardSubTitle>
								</CardLabel>
							</CardHeader>
							<CardBody isScrollable>
								<Timeline>
									<TimelineItem
										label={moment().add(-0.25, 'hours').format('LT')}
										color='primary'>
										Extended license purchased from France.
									</TimelineItem>
									<TimelineItem
										label={moment().add(-4.54, 'hours').format('LT')}
										color='success'>
										<Popovers desc='5 stars' trigger='hover'>
											<span>
												<Icon icon='StarFill' color='warning' />
												<Icon icon='StarFill' color='warning' />
												<Icon icon='StarFill' color='warning' />
												<Icon icon='StarFill' color='warning' />
												<Icon icon='StarFill' color='warning' />
											</span>
										</Popovers>
										<b>, a new rating has been received.</b>
									</TimelineItem>
									<TimelineItem
										label={moment().add(-9.34, 'hours').format('LT')}
										color='warning'>
										Customer's problem solved.
									</TimelineItem>
									<TimelineItem
										label={moment().add(-1, 'day').fromNow()}
										color='primary'>
										Regular license purchased from United Kingdom.
									</TimelineItem>
									<TimelineItem
										label={moment().add(-1, 'day').fromNow()}
										color='primary'>
										Regular license purchased from Italy.
									</TimelineItem>
									<TimelineItem
										label={moment().add(-2, 'day').fromNow()}
										color='info'>
										<span className='text-muted'>
											New version released.{' '}
											<a href='/' className='fw-bold'>
												V12.1.0
											</a>
										</span>
									</TimelineItem>
									<TimelineItem
										label={moment().add(-3, 'day').fromNow()}
										color='danger'>
										Market research meeting for new product.
									</TimelineItem>
									<TimelineItem
										label={moment().add(-7, 'day').fromNow()}
										color='secondary'>
										Updating, compiling and going live the product introduction
										page.
									</TimelineItem>
									<TimelineItem
										label={moment().add(-8, 'day').fromNow()}
										color='primary'>
										Regular license purchased from Germany.
									</TimelineItem>
								</Timeline>
							</CardBody>
						</Card>
					</div>
					<div className='col-xxl-3'>
						<CommonTodo />
					</div>
          */}
					<div className='col-xxl-12'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='ReceiptLong'>
									<CardTitle tag='h4' className='h5'>
										Sales by Countries
									</CardTitle>
									<CardSubTitle tag='h5' className='h6'>
										Reports
									</CardSubTitle>
								</CardLabel>
								<CardActions>
									<ButtonGroup>
										<Button
											color='primary'
											isLight
											icon='ChevronLeft'
											aria-label='Previous Year'
											isDisable={year <= 2019}
											onClick={() => setYear(year - 1)}
										/>
										<Button color='primary' isLight isDisable>
											{year}
										</Button>
										<Button
											color='primary'
											isLight
											icon='ChevronRight'
											aria-label='Next Year'
											isDisable={year >= 2021}
											onClick={() => setYear(year + 1)}
										/>
									</ButtonGroup>
								</CardActions>
							</CardHeader>
							<CardBody>
								<div className='row'>
									<div className='col-xl-3 col-xxl-2'>
										<div className='row g-3'>
											{/* className='w-100 py-4'
														shadow='sm' */}
											{companies.map((company) => (
												<div
													key={company.name}
													className='col-xl-12 col-lg-6 col-sm-12'>
													<Button
														isLight={activeCompanyTab !== company.name}
														onClick={() =>
															setActiveCompanyTab(company.name)
														}
														color={themeStatus}
														hoverShadow='none'>
														<img
															src={company.img}
															alt={company.name}
															width='auto'
															height={18}
															className='country-name'
														/>{' '}
														<span>{company.name}</span>
													</Button>
												</div>
											))}
										</div>
									</div>
									<div className='col-xl-9 col-xxl-10'>
										<Chart
											series={
												(activeCompanyTab === COMPANIES_TAB.COMP1 &&
													salesByStoreSeries1) ||
												(activeCompanyTab === COMPANIES_TAB.COMP2 &&
													salesByStoreSeries2) ||
												(activeCompanyTab === COMPANIES_TAB.COMP3 &&
													salesByStoreSeries3) ||
												(activeCompanyTab === COMPANIES_TAB.COMP4 &&
													salesByStoreSeries4) ||
												(activeCompanyTab === COMPANIES_TAB.COMP5 &&
													salesByStoreSeries5) ||
												(activeCompanyTab === COMPANIES_TAB.COMP6 &&
													salesByStoreSeries6)
											}
											options={salesByStoreOptions}
											type={salesByStoreOptions.chart.type}
											height={salesByStoreOptions.chart.height}
										/>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					{/*
					<div className='col-xxl-4 col-xl-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='ContactSupport' iconColor='secondary'>
									<CardTitle tag='h4' className='h5'>
										Waiting for an Answer
									</CardTitle>
									<CardSubTitle tag='h5' className='h6'>
										Customer
									</CardSubTitle>
								</CardLabel>
								<CardActions>
									<Dropdown>
										<DropdownToggle hasIcon={false}>
											<Button
												color={darkModeStatus ? 'light' : 'dark'}
												isLink
												hoverShadow='default'
												icon='MoreHoriz'
												aria-label='More Actions'
											/>
										</DropdownToggle>
										<DropdownMenu isAlignmentEnd>
											<DropdownItem>
												<Button
													icon='Send'
													tag='a'
													href='mailto:example@site.com'>
													Send Bulk Mail
												</Button>
											</DropdownItem>
										</DropdownMenu>
									</Dropdown>
								</CardActions>
							</CardHeader>
							<CardBody>
								<div className='row g-3'>
									<AnswerCustomer
										id={USERS.GRACE.id}
										img={USERS.GRACE.src}
										imgWebp={USERS.GRACE.srcSet}
										name={`${USERS.GRACE.name} ${USERS.GRACE.surname}`}
										color={USERS.GRACE.color}
										job='Maryland'
										value={43}
									/>
									<AnswerCustomer
										id={USERS.JANE.id}
										img={USERS.JANE.src}
										imgWebp={USERS.JANE.srcSet}
										name={`${USERS.JANE.name} ${USERS.JANE.surname}`}
										color={USERS.JANE.color}
										job='North Carolina'
										value={35}
									/>
									<AnswerCustomer
										id={USERS.RYAN.id}
										img={USERS.RYAN.src}
										imgWebp={USERS.RYAN.srcSet}
										name={`${USERS.RYAN.name} ${USERS.RYAN.surname}`}
										color={USERS.RYAN.color}
										job='Rhode Island'
										value={27}
									/>
									<AnswerCustomer
										id={USERS.ELLA.id}
										img={USERS.ELLA.src}
										imgWebp={USERS.ELLA.srcSet}
										name={`${USERS.ELLA.name} ${USERS.ELLA.surname}`}
										color={USERS.ELLA.color}
										job='Washington'
										value={15}
									/>
									<AnswerCustomer
										id={USERS.CHLOE.id}
										img={USERS.CHLOE.src}
										imgWebp={USERS.CHLOE.srcSet}
										name={`${USERS.CHLOE.name} ${USERS.CHLOE.surname}`}
										color={USERS.CHLOE.color}
										job='Kentucky'
										value={12}
									/>
									<AnswerCustomer
										id={USERS.SAM.id}
										img={USERS.SAM.src}
										imgWebp={USERS.SAM.srcSet}
										name={`${USERS.SAM.name} ${USERS.SAM.surname}`}
										color={USERS.SAM.color}
										job='Michigan'
										value={12}
									/>
								</div>
							</CardBody>
						</Card>
					</div> 
          

					<div className='col-xxl-4 col-xl-6'>
						<CommonMyWallet />
					</div>
          */}
				</div>
			</Page>
		</PageWrapper>
	);
};

export default DashboardPage;
