import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import moment from 'moment';
import { DateRangePicker } from 'react-date-range';
import { useLocation } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import SubHeader, {
	SubHeaderLeft,
	SubHeaderRight,
	// SubheaderSeparator,
} from '../../../layout/SubHeader/SubHeader';
import Page from '../../../layout/Page/Page';
import { demoPages } from '../../../menu';
import Card, {
	CardBody,
	CardHeader,
	CardTitle,
	CardLabel,
	CardActions,
} from '../../../components/bootstrap/Card';
import { getFirstLetter, priceFormat } from '../../../helpers/helpers';
// import data from '../../../common/data/dummyCustomerData';   ,
import PaginationButtons, {
	dataPagination,
	PER_COUNT,
} from '../../../components/PaginationButtons';
import Button from '../../../components/bootstrap/Button';
import Icon from '../../../components/icon/Icon';
import Input from '../../../components/bootstrap/forms/Input';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../components/bootstrap/Dropdown';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Checks, { ChecksGroup } from '../../../components/bootstrap/forms/Checks';
import COUNTRIES from '../../../common/data/enumCountries';
import useSortableData from '../../../hooks/useSortableData';
import InputGroup, { InputGroupText } from '../../../components/bootstrap/forms/InputGroup';
import Popovers from '../../../components/bootstrap/Popovers';
import CustomerEditModal from './CustomerEditModal';

import { getColorNameWithIndex } from '../../../common/data/enumColors';
import useDarkMode from '../../../hooks/useDarkMode';
// import DownloadTransactionsCSVButton from '../../common/DownloadTransactionsCSVButton';
import DownloadTransactionCSVButton from '../../common/DownloadTransactionCSVButton';

const CustomersList = () => {
	const [list, setList] = useState([]);
	const { themeStatus, darkModeStatus } = useDarkMode();

	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(PER_COUNT['10']);

	const location = useLocation();
	const path = location.pathname.split('/')[1];

	// eslint-disable-next-line no-unused-vars
	const { data } = useFetch(`/${path}`);

	useEffect(() => {
		setList(data);
	}, [data]);

	// console.log('REACT_APP_API_BASE_URL:', `${process.env.REACT_APP_API_BASE_URL}/${path}`);

	const handleNextLoad = async (e) => {
		e.preventDefault();
		try {
			await axios
				.post(`/${path}/getTransactions/`, {
					lastId: list.slice(-1)[0]._id,
				})
				.then((datas) => {
					setList(datas != null ? [...list, ...datas.data] : [...list]);
				});
		} catch (err) {
			// eslint-disable-next-line no-console
			console.log('err catched:', err);
		}
	};

	// , loading, error

	const formik = useFormik({
		initialValues: {
			searchInput: '',
			country: Object.keys(COUNTRIES).map((i) => COUNTRIES[i].name),
			minPrice: '',
			maxPrice: '',
			selectAll: false,
		},
		// eslint-disable-next-line no-unused-vars
		onSubmit: (values) => {
			// alert(JSON.stringify(values, null, 2));
		},
	});

	const filteredData = list.filter(
		(f) =>
			// Name
			(f.userId.IsMerchant === false
				? f._id.toLowerCase().includes(formik.values.searchInput.toLowerCase()) ||
				  f.userId.Profile.FirstName.toLowerCase().includes(
						formik.values.searchInput.toLowerCase(),
				  ) ||
				  f.userId.Profile.LastName.toLowerCase().includes(
						formik.values.searchInput.toLowerCase(),
				  ) ||
				  f.Amount.toString().includes(formik.values.searchInput.toLowerCase())
				: f._id.toLowerCase().includes(formik.values.searchInput.toLowerCase()) ||
				  f.DestinationUserId.Profile.FirstName.toLowerCase().includes(
						formik.values.searchInput.toLowerCase(),
				  ) ||
				  f.DestinationUserId.Profile.LastName.toLowerCase().includes(
						formik.values.searchInput.toLowerCase(),
				  ) ||
				  f.Amount.toString().includes(formik.values.searchInput.toLowerCase())) &&
			// Price
			(formik.values.minPrice === '' || f.Amount > formik.values.minPrice) &&
			(formik.values.maxPrice === '' || f.Amount < formik.values.maxPrice) &&
			// country Type
			formik.values.country.includes(f.userId.Country.Name),
	);

	const { items, requestSort, getClassNamesFor } = useSortableData(filteredData);

	const [editModalStatus, setEditModalStatus] = useState(false);

	const unCheckAll = () => {
		formik.setFieldValue('country', []);
	};
	const checkAll = () => {
		formik.setFieldValue(
			'country',
			Object.keys(COUNTRIES).map((i) => COUNTRIES[i].name),
		);
	};

	const [state, setState] = useState({
		selection: {
			startDate: moment().startOf('week').add('-1', 'week').toDate(),
			endDate: moment().endOf('week').toDate(),
			key: 'selection',
		},
	});

	const datePicker = (
		<DateRangePicker
			onChange={(item) => setState({ ...state, ...item })}
			showSelectionPreview
			moveRangeOnFirstSelection={false}
			retainEndDateOnFirstSelection={false}
			months={2}
			ranges={[state.selection]}
			direction='horizontal'
			rangeColors={[process.env.REACT_APP_PRIMARY_COLOR]}
		/>
	);

	return (
		<PageWrapper title={demoPages.transactions.text}>
			<SubHeader>
				<SubHeaderLeft>
					<label
						className='border-0 bg-transparent cursor-pointer me-0'
						htmlFor='searchInput'>
						<Icon icon='Search' size='2x' color='primary' />
					</label>
					<Input
						id='searchInput'
						type='search'
						className='border-0 shadow-none bg-transparent'
						placeholder='Filter transaction by Tx Id or Amount...'
						onChange={formik.handleChange}
						value={formik.values.searchInput}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<Dropdown>
						<DropdownToggle hasIcon={false}>
							<Button
								icon='FilterAlt'
								color='dark'
								isLight
								className='btn-only-icon position-relative'>
								{list.length !== filteredData.length && (
									<Popovers desc='Filtering applied' trigger='hover'>
										<span className='position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2'>
											<span className='visually-hidden'>
												there is filtering
											</span>
										</span>
									</Popovers>
								)}
							</Button>
						</DropdownToggle>
						<DropdownMenu isAlignmentEnd size='lg'>
							<div className='container py-2'>
								<div className='row g-3'>
									<FormGroup label='Balance' className='col-12'>
										<InputGroup>
											<Input
												id='minPrice'
												ariaLabel='Minimum price'
												placeholder='Min.'
												onChange={formik.handleChange}
												value={formik.values.minPrice}
											/>
											<InputGroupText>to</InputGroupText>
											<Input
												id='maxPrice'
												ariaLabel='Maximum price'
												placeholder='Max.'
												onChange={formik.handleChange}
												value={formik.values.maxPrice}
											/>
										</InputGroup>
									</FormGroup>
									<FormGroup label='Countries' className='col-12'>
										<ChecksGroup>
											<Checks
												className='mb-1'
												key='select_all'
												id='select_all'
												name='selectAll'
												label={`${
													formik.values.selectAll === true
														? 'UnCheck All'
														: 'Check All'
												}`}
												checked={formik.values.selectAll}
												onChange={() => {
													if (formik.values.selectAll) {
														formik.setFieldValue('selectAll', false);
														unCheckAll();
													} else {
														formik.setFieldValue('selectAll', true);
														checkAll();
													}
												}}
											/>
										</ChecksGroup>
										<ChecksGroup>
											{Object.keys(COUNTRIES).map((country) => (
												<Checks
													key={COUNTRIES[country].name}
													id={COUNTRIES[country].name}
													label={COUNTRIES[country].name}
													name='country'
													value={COUNTRIES[country].name}
													onChange={formik.handleChange}
													checked={formik.values.country.includes(
														COUNTRIES[country].name,
													)}
												/>
											))}
										</ChecksGroup>
									</FormGroup>
								</div>
							</div>
						</DropdownMenu>
					</Dropdown>
					{/*	<SubheaderSeparator />
					<Button
						icon='PersonAdd'
						color='primary'
						isLight
						onClick={() => setEditModalStatus(true)}>
						New Customer
                          </Button> */}

					<Button
						icon='ReadMore'
						color='primary'
						isLight
						className='position-relative'
						onClick={(e) => handleNextLoad(e)}>
						{' '}
						Load More
					</Button>
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='row h-100'>
					<div className='col-12'>
						<Card stretch>
							<CardHeader>
								<CardLabel iconColor='info'>
									<CardTitle>Last Transactions</CardTitle>
								</CardLabel>
								<CardActions>
									<Popovers
										placement='bottom-end'
										className='mw-100 overflow-hidden'
										data-tour='date-range-menu'
										bodyClassName='p-0'
										trigger='click'
										desc={datePicker}>
										<Button color='dark' isLight data-tour='date-range'>
											{`${moment(state.selection.startDate).format(
												'MMM Do YY',
											)} - ${moment(state.selection.endDate).format(
												'MMM Do YY',
											)}`}
										</Button>
									</Popovers>
									<DownloadTransactionCSVButton
										color={themeStatus}
										startDate={state.selection.startDate}
										endDate={state.selection.endDate}
									/>
								</CardActions>
							</CardHeader>
							<CardBody isScrollable className='table-responsive'>
								<table className='table table-modern table-hover'>
									<thead>
										<tr>
											<th>Customer </th>
											<th>Tx ID</th>
											<th>Date</th>
											<th
												onClick={() => requestSort('Amount')}
												className='cursor-pointer text-decoration-underline'>
												Amount
												<Icon
													size='lg'
													className={getClassNamesFor('Amount')}
													icon='FilterList'
												/>
											</th>
											<th>Status</th>
											<th
												onClick={() => requestSort('payout')}
												className='cursor-pointer text-decoration-underline'>
												Country{' '}
												<Icon
													size='lg'
													className={getClassNamesFor('payout')}
													icon='FilterList'
												/>
											</th>
											<td />
										</tr>
									</thead>
									<tbody>
										{dataPagination(items, currentPage, perPage).map(
											(i, index) => (
												// eslint-disable-next-line react/no-array-index-key
												<tr key={index}>
													<td>
														<div className='d-flex align-items-center'>
															<div className='flex-grow-1'>
																<div className='fs-6 fw-bold'>
																	{/*
                                   i.userId.IsMerchant === false
																		? `${i.userId.Profile.FirstName} ${i.userId.Profile.LastName}`
                      : `${i.DestinationUserId.Profile.FirstName} ${i.DestinationUserId.Profile.LastName}` 
                    */}
																	<div className='flex-shrink-0'>
																		<div
																			className='ratio ratio-1x1 me-3'
																			style={{ width: 48 }}>
																			<div
																				className={`bg-l${
																					darkModeStatus
																						? 'o25'
																						: '25'
																				}-${getColorNameWithIndex(
																					index,
																				)} text-${getColorNameWithIndex(
																					index,
																				)} rounded-2 d-flex align-items-center justify-content-center`}>
																				<span className='fw-bold'>
																					{i.userId
																						.IsMerchant ===
																					false
																						? (getFirstLetter(
																								i
																									.userId
																									.Profile
																									.FirstName,
																						  ),
																						  getFirstLetter(
																								i
																									.userId
																									.Profile
																									.LastName,
																						  ))
																						: (getFirstLetter(
																								i
																									.DestinationUserId
																									.Profile
																									.FirstName,
																						  ),
																						  getFirstLetter(
																								i
																									.DestinationUserId
																									.Profile
																									.LastName,
																						  ))}
																				</span>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</td>
													<td>{i._id}</td>
													<td>
														<div>{moment.utc(i.Date).format('ll')}</div>
														<div>
															<small className='text-muted'>
																{moment.utc(i.Date).fromNow()}
															</small>
														</div>
													</td>
													<td>
														{i.userId.IsMerchant === false ? (
															<span className='text-danger'>
																{priceFormat(i.Amount)}{' '}
																<Icon icon='ArrowDownward' />
															</span>
														) : (
															<span className='text-success'>
																{priceFormat(i.Amount)}{' '}
																<Icon icon='ArrowUpward' />{' '}
															</span>
														)}
													</td>
													<td>
														{' '}
														{i.Status === 1 ? (
															<span className='text-success'>
																Success
															</span>
														) : (
															<span className='text-danger'>
																Pending
															</span>
														)}{' '}
													</td>
													<td>
														<Icon
															size='lg'
															icon={`custom ${i.userId.Country.Name.replace(
																' ',
																'',
															).toLowerCase()}`}
														/>{' '}
														{i.userId.Country.Name}
													</td>
													<td>
														<Dropdown>
															<DropdownToggle hasIcon={false}>
																<Button
																	icon='MoreHoriz'
																	color='dark'
																	isLight
																	shadow='sm'
																/>
															</DropdownToggle>
															<DropdownMenu isAlignmentEnd>
																<DropdownItem>
																	<Button
																		icon='Visibility'
																		tag='a'
																		to={`../${demoPages.transactionID.path}/${i._id}`}>
																		View
																	</Button>
																</DropdownItem>
															</DropdownMenu>
														</Dropdown>
													</td>
												</tr>
											),
										)}
									</tbody>
								</table>
							</CardBody>
							<PaginationButtons
								data={filteredData}
								label='customers'
								setCurrentPage={setCurrentPage}
								currentPage={currentPage}
								perPage={perPage}
								setPerPage={setPerPage}
							/>
						</Card>
					</div>
				</div>
			</Page>
			<CustomerEditModal setIsOpen={setEditModalStatus} isOpen={editModalStatus} id={0} />
		</PageWrapper>
	);
};

export default CustomersList;
