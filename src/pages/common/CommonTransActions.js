import React, { useEffect, useState } from 'react';
// import { useHoverDirty } from 'react-use'; useRef,
// import { Link } from 'react-router-dom';
import moment from 'moment';
import classNames from 'classnames';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../components/bootstrap/Card';
import Button from '../../components/bootstrap/Button';
// import Badge from '../../components/bootstrap/Badge';
// import Chart from '../../components/extras/Chart';

// import { demoPages } from '../../menu';

// import TransferAction from '../../components/TransferAction';
// import Spinner from '../../components/bootstrap/Spinner';

import showNotification from '../../components/extras/showNotification';
import Icon from '../../components/icon/Icon';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../components/bootstrap/Dropdown';
import useDarkMode from '../../hooks/useDarkMode';
import {
	financialFormat,
	priceFormat,
	priceFormatUSD,
	priceFormatEURO,
} from '../../helpers/helpers';
import PaginationButtons, { dataPagination, PER_COUNT } from '../../components/PaginationButtons';
import useSortableData from '../../hooks/useSortableData';

// eslint-disable-next-line react/prop-types
const TableRow = ({ id, data, date }) => {
	// const { darkModeStatus } = useDarkMode();

	// const dummyOptions = {
	// 	colors: [color],
	// 	chart: {
	// 		type: 'line',
	// 		width: 100,
	// 		height: 35,
	// 		sparkline: {
	// 			enabled: true,
	// 		},
	// 	},
	// 	tooltip: {
	// 		theme: 'dark',
	// 		fixed: {
	// 			enabled: false,
	// 		},
	// 		x: {
	// 			show: false,
	// 		},
	// 		y: {
	// 			title: {
	// 				// eslint-disable-next-line no-unused-vars
	// 				formatter(seriesName) {
	// 					return '';
	// 				},
	// 			},
	// 		},
	// 	},
	// 	stroke: {
	// 		curve: 'smooth',
	// 		width: 2,
	// 	},
	// };
	return (
		<tr>
			<th scope='row'>{id}</th>
			<td>{date} </td>
			<td>
				<div>
					{/*	<Link
						to={`../${demoPages.sales.subMenu.productID.path}/${id}`}
						className={classNames('fw-bold', {
							'link-dark': !darkModeStatus,
							'link-light': darkModeStatus,
						})}>	</Link>
          */}

					{
						// eslint-disable-next-line react/prop-types
						data.cashout && data.cashout.count
					}

					<div className='text-muted'>
						<small>category</small>
					</div>
				</div>
			</td>
			<td>
				{
					// eslint-disable-next-line react/prop-types
					data.cashin && data.cashin.count
				}
			</td>
			<td>
				{/*
        <Chart
					series={series}
					options={dummyOptions}
					type={dummyOptions.chart.type}
					height={dummyOptions.chart.height}
					width={dummyOptions.chart.width}
          />
        */}
				Serie
			</td>
			<td>
				<span>
					{
						// eslint-disable-next-line react/prop-types
						financialFormat(data.cashout && data.cashout.Total)
					}
				</span>
			</td>
			<td>
				<span>
					{
						// eslint-disable-next-line react/prop-types
						financialFormat(data.cashin && data.cashin.Total)
					}
				</span>
			</td>
			<td className='h5'>
				{
					// eslint-disable-next-line react/prop-types
					financialFormat(
						// eslint-disable-next-line react/prop-types
						Number.parseFloat(data.cashout && data.cashout.Total) -
							// eslint-disable-next-line react/prop-types
							Number.parseFloat(data.cashin && data.cashin.Total),
					)
				}
				{/* <Badge color='success'>	</Badge> */}
			</td>
		</tr>
	);
};

// eslint-disable-next-line react/prop-types
const CommonTransActions = ({ data }) => {
	const { themeStatus, darkModeStatus } = useDarkMode();
	const [isLoading, setIsLoading] = useState(false);

	const TOP_SELLER_FILTER = {
		DAY: 'day',
		WEEK: 'week',
		MONTH: 'month',
	};
	const [topSellerFilter, setTopSellerFilter] = useState(TOP_SELLER_FILTER.DAY);
	const filteredDataPayment =
		// eslint-disable-next-line react/prop-types
		data.DataPayment != null
			? // eslint-disable-next-line react/prop-types
			  data.DataPayment.filter(
					(f) =>
						(topSellerFilter === TOP_SELLER_FILTER.DAY && f.id < 100) ||
						(topSellerFilter === TOP_SELLER_FILTER.WEEK && f.id > 10) ||
						(topSellerFilter === TOP_SELLER_FILTER.MONTH && f.date === '2022-01-01'),
			  ).filter((c, index) => index < 100)
			: [];

	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(PER_COUNT['3']);
	const { items, requestSort, getClassNamesFor } = useSortableData(filteredDataPayment);

	// const [sales] = useState({
	// 	series: [
	// 		{
	// 			name: 'Sales',
	// 			data: [12, 28, 16, 43, 28],
	// 		},
	// 	],
	// 	options: {
	// 		chart: {
	// 			type: 'area',
	// 			height: '138',
	// 			sparkline: {
	// 				enabled: true,
	// 			},
	// 		},
	// 		stroke: {
	// 			curve: 'smooth',
	// 		},
	// 		fill: {
	// 			type: 'gradient',
	// 			gradient: {
	// 				shadeIntensity: 1,
	// 				opacityFrom: 0.7,
	// 				opacityTo: 0,
	// 				stops: [0, 100],
	// 			},
	// 		},
	// 		xaxis: {
	// 			crosshairs: {
	// 				width: 1,
	// 			},
	// 			categories: [
	// 				'Jan',
	// 				'Feb',
	// 				'Mar',
	// 				'Apr',
	// 				'May',
	// 				'Jun',
	// 				'Jul',
	// 				'Aug',
	// 				'Sep',
	// 				'Oct',
	// 				'Nov',
	// 				'Dec',
	// 			],
	// 		},
	// 		yaxis: {
	// 			min: 0,
	// 		},
	// 		tooltip: {
	// 			theme: 'dark',
	// 		},
	// 		title: {
	// 			offsetX: 0,
	// 			offsetY: 15,
	// 			style: {
	// 				fontSize: '1.25rem',
	// 				color: 'var(--bs-body-color)',
	// 			},
	// 			text: '$986',
	// 		},
	// 		subtitle: {
	// 			offsetX: 0,
	// 			offsetY: 35,
	// 			style: {
	// 				fontSize: '0.9rem',
	// 				color: 'var(--bs-gray)',
	// 			},
	// 			text: 'All Earning',
	// 		},
	// 		colors: [process.env.REACT_APP_INFO_COLOR],
	// 	},
	// });

	useEffect(() => {
		const timer = isLoading
			? setTimeout(() => {
					setIsLoading(false);
					// setDemoStatus('Completed');
					showNotification(
						<span className='d-flex align-items-center'>
							<Icon icon='Info' size='lg' className='me-1' />
							<span>Updated Successfully</span>
						</span>,
						'Transfer list has been updated successfully',
					);
			  }, 1500)
			: null;
		return () => clearTimeout(timer);
	}, [isLoading]);
	return (
		<>
			<div className='row mb-5'>
				<div className='col-lg-12'>
					<Card>
						<CardBody>
							<div className='row'>
								<div className='col-3'>
									<div className='ratio ratio-1x1'>
										<Card
											className={classNames(
												'transition-base rounded-2 mb-4',
												{
													'bg-l25-success ': !darkModeStatus,
													'bg-lo50-success ': darkModeStatus,
												},
											)}>
											<CardHeader className='bg-transparent'>
												<CardLabel>
													<CardTitle tag='h4' className='h5'>
														Balance
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
														<div
															className={classNames(
																'fw-bold fs-3 mb-0',
																{
																	'text-muted': !darkModeStatus,
																	'text-light': darkModeStatus,
																},
															)}>
															{
																// eslint-disable-next-line react/prop-types
																data.Wallet != null
																	? priceFormatEURO(
																			// eslint-disable-next-line react/prop-types
																			data.Wallet.Balance,
																	  )
																	: 0
															}
														</div>
														<div
															className={classNames(
																'fw-bold fs-3 mb-0',
																{
																	'text-muted': !darkModeStatus,
																	'text-light': darkModeStatus,
																},
															)}>
															{
																// eslint-disable-next-line react/prop-types
																data.Wallet != null
																	? priceFormatUSD(
																			// eslint-disable-next-line react/prop-types
																			data.Wallet.Balance,
																	  )
																	: 0
															}
														</div>
														<div
															className={classNames(
																'fw-bold fs-3 mb-0',
																{
																	'text-muted': !darkModeStatus,
																	'text-light': darkModeStatus,
																},
															)}>
															{
																// eslint-disable-next-line react/prop-types
																data.Wallet != null
																	? priceFormat(
																			// eslint-disable-next-line react/prop-types
																			data.Wallet.Balance,
																	  )
																	: 0
															}
														</div>
														<div
															className={classNames({
																'text-muted': !darkModeStatus,
																'text-light': darkModeStatus,
															})}>
															As of now
														</div>
													</div>
												</div>
											</CardBody>
										</Card>
									</div>
								</div>
								<div className='col-3'>
									<div className='ratio ratio-1x1'>
										{/*
                      <div>
												<span className='text-info fs-3 fw-bold'>
													Count Cashin {'  '}
													{
														// eslint-disable-next-line react/prop-types
														data.CountCashin != null
															? // eslint-disable-next-line react/prop-types
															  data.CountCashin
															: 0
													}
												</span>
                        </div> */}
										<Card
											className={classNames({
												'bg-l25-primary': !darkModeStatus,
												'bg-lo50-primary': darkModeStatus,
											})}>
											<CardHeader className='bg-transparent'>
												<CardLabel>
													<CardTitle tag='h4' className='h5'>
														Count Cashin
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
															{
																// eslint-disable-next-line react/prop-types
																// eslint-disable-next-line react/prop-types
																data.CountCashin != null
																	? // eslint-disable-next-line react/prop-types
																	  data.CountCashin
																	: 0
															}
														</div>
														<div
															className={classNames({
																'text-muted': !darkModeStatus,
																'text-light': darkModeStatus,
															})}>
															As of now
														</div>
													</div>
												</div>
											</CardBody>
										</Card>
									</div>
								</div>
								<div className='col-3'>
									<div className='ratio ratio-1x1'>
										{/*
                    <div
											className={classNames(
												'rounded-2',
												'd-flex align-items-center justify-content-center',
												{
													'bg-l10-info': !darkModeStatus,
													'bg-lo25-info': darkModeStatus,
												},
											)}>
											<div>
												<span className='text-info fs-3 fw-bold'>
													Count Cashout {'  '}
													{
														// eslint-disable-next-line react/prop-types
														data.CountCashout != null
															? // eslint-disable-next-line react/prop-types
															  data.CountCashout
															: 0
													}
												</span>
											</div>
                        </div>
                      */}
										<Card
											className={classNames({
												'bg-l10-info': !darkModeStatus,
												'bg-lo50-info': darkModeStatus,
											})}>
											<CardHeader className='bg-transparent'>
												<CardLabel>
													<CardTitle tag='h4' className='h5'>
														Count Cashout
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
															{
																// eslint-disable-next-line react/prop-types
																data.CountCashout != null
																	? // eslint-disable-next-line react/prop-types
																	  data.CountCashout
																	: 0
															}
														</div>
														<div
															className={classNames({
																'text-muted': !darkModeStatus,
																'text-light': darkModeStatus,
															})}>
															As of now
														</div>
													</div>
												</div>
											</CardBody>
										</Card>
									</div>
								</div>
								<div className='col-auto ms-auto'>
									<Dropdown>
										<DropdownToggle hasIcon={false}>
											<Button
												icon='MoreHoriz'
												color={themeStatus}
												shadow='default'
												hoverShadow='none'
											/>
										</DropdownToggle>
										<DropdownMenu isAlignmentEnd>
											<DropdownItem>
												<button
													type='button'
													onClick={() => {
														showNotification(
															<span className='d-flex align-items-center'>
																<Icon
																	icon='Info'
																	size='lg'
																	className='me-1'
																/>
																<span>Updated Successfully</span>
															</span>,
															'My earnings has been updated successfully',
														);
													}}>
													<Icon icon='Refresh' /> Refresh
												</button>
											</DropdownItem>
											<DropdownItem isDivider />
											<DropdownItem>
												<a href='mailto:info@example.com?subject=My Earning&body=Dollar - 389, Euro - 472'>
													<Icon icon='Email' /> Share by email
												</a>
											</DropdownItem>
										</DropdownMenu>
									</Dropdown>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>
				<div className='col-lg-12'>
					<Card>
						<CardHeader>
							<CardLabel icon='Storefront' iconColor='info'>
								<CardTitle tag='h4' className='h5'>
									Sales
								</CardTitle>
							</CardLabel>
							<CardActions>
								<Dropdown isButtonGroup>
									<Button color='success' isLight icon='WaterfallChart'>
										{(topSellerFilter === TOP_SELLER_FILTER.DAY &&
											moment().format('MMM Do')) ||
											(topSellerFilter === TOP_SELLER_FILTER.WEEK &&
												`${moment()
													.startOf('week')
													.format('MMM Do')} - ${moment()
													.endOf('week')
													.format('MMM Do')}`) ||
											(topSellerFilter === TOP_SELLER_FILTER.MONTH &&
												moment().format('MMM YYYY'))}
									</Button>
									<DropdownToggle>
										<Button color='success' isLight isVisuallyHidden />
									</DropdownToggle>
									<DropdownMenu isAlignmentEnd>
										<DropdownItem>
											<Button
												onClick={() =>
													setTopSellerFilter(TOP_SELLER_FILTER.DAY)
												}>
												Last Day
											</Button>
										</DropdownItem>
										<DropdownItem>
											<Button
												onClick={() =>
													setTopSellerFilter(TOP_SELLER_FILTER.WEEK)
												}>
												Last Week
											</Button>
										</DropdownItem>
										<DropdownItem>
											<Button
												onClick={() =>
													setTopSellerFilter(TOP_SELLER_FILTER.MONTH)
												}>
												Last Month
											</Button>
										</DropdownItem>
									</DropdownMenu>
								</Dropdown>
								<Button
									color='info'
									icon='CloudDownload'
									isLight
									tag='a'
									to='/somefile.txt'
									target='_blank'
									download>
									Export
								</Button>
							</CardActions>
						</CardHeader>
						<CardBody className='table-responsive'>
							<table className='table table-modern table-hover'>
								<thead>
									<tr>
										<th
											scope='col'
											onClick={() => requestSort('id')}
											className='cursor-pointer text-decoration-underline'>
											#{' '}
											<Icon
												size='lg'
												className={getClassNamesFor('id')}
												icon='FilterList'
											/>
										</th>
										<th scope='col'>Date</th>
										<th
											scope='col'
											onClick={() => requestSort('name')}
											className='cursor-pointer text-decoration-underline'>
											Cashout Qty{' '}
											<Icon
												size='lg'
												className={getClassNamesFor('name')}
												icon='FilterList'
											/>
										</th>
										<th scope='col'>Cashin Qty</th>
										<th scope='col'>Sales</th>
										<th
											scope='col'
											onClick={() => requestSort('price')}
											className='cursor-pointer text-decoration-underline'>
											Total Cashout{' '}
											<Icon
												size='lg'
												className={getClassNamesFor('price')}
												icon='FilterList'
											/>
										</th>
										<th
											scope='col'
											onClick={() => requestSort('stock')}
											className='cursor-pointer text-decoration-underline'>
											Total Cashin{' '}
											<Icon
												size='lg'
												className={getClassNamesFor('stock')}
												icon='FilterList'
											/>
										</th>
										<th
											scope='col'
											onClick={() => requestSort('store')}
											className='cursor-pointer text-decoration-underline'>
											Balance{' '}
											<Icon
												size='lg'
												className={getClassNamesFor('store')}
												icon='FilterList'
											/>
										</th>
									</tr>
								</thead>
								<tbody>
									{dataPagination(items, currentPage, perPage).map((i) => (
										// eslint-disable-next-line react/jsx-props-no-spreading
										<TableRow key={i.id} {...i} />
									))}
								</tbody>
							</table>
						</CardBody>
						<PaginationButtons
							data={items}
							label='items'
							setCurrentPage={setCurrentPage}
							currentPage={currentPage}
							perPage={perPage}
							setPerPage={setPerPage}
						/>
					</Card>
				</div>
				{/*
        <div className='col-lg-4'>
					<CardHeader className='px-0 bg-transparent'>
						<CardLabel>
							<CardTitle>Fee</CardTitle>
						</CardLabel>
					</CardHeader>
					<Card>
						<CardBody>
							<div className='row'>
								<div className='col-3'>
									<div className='ratio ratio-1x1'>
										<div
											className={classNames(
												'rounded-2',
												'd-flex align-items-center justify-content-center',
												{
													'bg-l10-danger': !darkModeStatus,
													'bg-lo25-danger': darkModeStatus,
												},
											)}>
											<div>
												<span className='text-danger fs-5 fw-bold align-text-bottom'>
													$
												</span>
												<span className='text-danger fs-3 fw-bold'>64</span>
											</div>
										</div>
									</div>
								</div>
								<div className='col-auto ms-auto'>
									<Dropdown>
										<DropdownToggle hasIcon={false}>
											<Button
												icon='MoreHoriz'
												color={themeStatus}
												shadow='default'
												hoverShadow='none'
											/>
										</DropdownToggle>
										<DropdownMenu isAlignmentEnd>
											<DropdownItem>
												<button
													type='button'
													onClick={() => {
														showNotification(
															<span className='d-flex align-items-center'>
																<Icon
																	icon='Info'
																	size='lg'
																	className='me-1'
																/>
																<span>Updated Successfully</span>
															</span>,
															'My fee has been updated successfully',
														);
													}}>
													<Icon icon='Refresh' /> Refresh
												</button>
											</DropdownItem>
											<DropdownItem isDivider />
											<DropdownItem>
												<a href='mailto:info@example.com?subject=My Fee&body=Dollar - 64'>
													<Icon icon='Email' /> Share by email
												</a>
											</DropdownItem>
										</DropdownMenu>
									</Dropdown>
								</div>
							</div>
						</CardBody>
					</Card>
                        </div> 
				<div className='col-lg-4'>
					<Card>
						<CardBody className='h-100'>
							<Chart
								series={sales.series}
								options={sales.options}
								type={sales.options.chart.type}
								height={sales.options.chart.height}
								className='h-100'
							/>
						</CardBody>
					</Card>
				</div>
      */}
			</div>
			<div className='row'>
				{/*
        <div className='col-lg-8'>
					<CardHeader className='px-0 bg-transparent'>
						<CardLabel>
							<CardTitle>Recent Transfer</CardTitle>
						</CardLabel>
						<CardActions>
							<Button
								ref={ref}
								color='info'
								isLight
								icon={isLoading ? null : 'PublishedWithChanges'}
								onClick={() => {
									ref.current.blur();
									setIsLoading(true);
								}}>
								{isLoading && (
									<Spinner color={isHovering ? 'light' : 'info'} inButton isSmall>
										Loading...
									</Spinner>
								)}
								Refresh
							</Button>
						</CardActions>
					</CardHeader>
					<TransferAction currency='$' amount={200} status={demoStatus} img={Bank1} />
					<TransferAction currency='$' amount={80} status='Completed' img={Bank2} />
					<TransferAction currency='€' amount={70} status='Completed' img={Bank2} />
					<TransferAction
						currency='€'
						amount={120}
						status='Failed'
						img={Bank3}
						className='shadow-3d-info'
					/>
				</div>
                */}
			</div>
		</>
	);
};

export default CommonTransActions;
