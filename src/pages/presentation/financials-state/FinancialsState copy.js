import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
// import moment from 'moment';
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
import Card, { CardBody } from '../../../components/bootstrap/Card';
// import { priceFormat } from '../../../helpers/helpers';
// import data from '../../../common/data/dummyCustomerData';   getFirstLetter, s
// import PaginationButtons, {
// 	dataPagination,
// 	PER_COUNT,
// } from '../../../components/PaginationButtons';
import Button from '../../../components/bootstrap/Button';
import Icon from '../../../components/icon/Icon';
import Input from '../../../components/bootstrap/forms/Input';
import Dropdown, {
	// DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../components/bootstrap/Dropdown';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Checks, { ChecksGroup } from '../../../components/bootstrap/forms/Checks';
import COUNTRIES from '../../../common/data/enumCountries';
// import useSortableData from '../../../hooks/useSortableData';
import InputGroup, { InputGroupText } from '../../../components/bootstrap/forms/InputGroup';
// import Popovers from '../../../components/bootstrap/Popovers';
import CustomerEditModal from './CustomerEditModal';
// import { getColorNameWithIndex } from '../../../common/data/enumColors';
// import useDarkMode from '../../../hooks/useDarkMode';

const FinancialsState = () => {
	// const { darkModeStatus } = useDarkMode();

	// const [currentPage, setCurrentPage] = useState(1);
	// const [perPage, setPerPage] = useState(PER_COUNT['10']);
	const [list, setList] = useState([]);
	const location = useLocation();
	const path = location.pathname.slice(1);

	// eslint-disable-next-line no-console
	console.log('path:', path);
	// eslint-disable-next-line no-unused-vars
	const { data } = useFetch(`/${path}`);

	useEffect(() => {
		setList(data);
	}, [data]);

	// eslint-disable-next-line no-console
	console.log('data:', data);
	// eslint-disable-next-line no-console
	console.log('list:', list);

	const handleNextLoad = async (e) => {
		e.preventDefault();
		try {
			await axios.post(`/${path}`, { lastId: list.slice(-1)[0].id }).then((datas) => {
				setList(datas != null ? [...list, ...datas.data] : [...list]);
			});
		} catch (err) {
			// eslint-disable-next-line no-console
			console.log('err catched:', err);
		}
	};

	/*
													<td>
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
																		{i.userId.IsMerchant ===
																		false
																			? getFirstLetter(
																					i.userId.Profile
																						.FirstName,
																			  )
																			: getFirstLetter(
																					i
																						.DestinationUserId
																						.Profile
																						.FirstName,
																			  )}
																	</span>
																</div>
															</div>
														</div>
													</td>
*/

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

	// const filteredData = list.filter(
	// 	(f) =>
	// 		// Name
	// 		(f.userId.IsMerchant === false
	// 			? f.id.toLowerCase().includes(formik.values.searchInput.toLowerCase()) ||
	// 			  f.userId.Profile.FirstName.toLowerCase().includes(
	// 					formik.values.searchInput.toLowerCase(),
	// 			  ) ||
	// 			  f.userId.Profile.LastName.toLowerCase().includes(
	// 					formik.values.searchInput.toLowerCase(),
	// 			  ) ||
	// 			  f.Amount.toString().includes(formik.values.searchInput.toLowerCase())
	// 			: f.id.toLowerCase().includes(formik.values.searchInput.toLowerCase()) ||
	// 			  f.DestinationUserId.Profile.FirstName.toLowerCase().includes(
	// 					formik.values.searchInput.toLowerCase(),
	// 			  ) ||
	// 			  f.DestinationUserId.Profile.LastName.toLowerCase().includes(
	// 					formik.values.searchInput.toLowerCase(),
	// 			  ) ||
	// 			  f.Amount.toString().includes(formik.values.searchInput.toLowerCase())) &&
	// 		// Price
	// 		(formik.values.minPrice === '' || f.Amount > formik.values.minPrice) &&
	// 		(formik.values.maxPrice === '' || f.Amount < formik.values.maxPrice) &&
	// 		// country Type
	// 		formik.values.country.includes(f.userId.Country.Name),
	// );

	// const { items, requestSort, getClassNamesFor } = useSortableData(filteredData);

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
						placeholder='Search transaction by Name, Tx Id or Amount...'
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
								{/*
                list.length !== filteredData.length && (
									<Popovers desc='Filtering applied' trigger='hover'>
										<span className='position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2'>
											<span className='visually-hidden'>
												there is filtering
											</span>
										</span>
									</Popovers>
                )
              */}
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
							<CardBody isScrollable className='table-responsive'>
								<table className='table table-modern table-hover'>
									<thead>
										<tr>
											<th>Customer </th>
											<th>Tx ID</th>
											<th>Date</th>
											<th className='cursor-pointer text-decoration-underline'>
												Amount
												<Icon size='lg' icon='FilterList' />
											</th>
											<th>Status</th>
											<th className='cursor-pointer text-decoration-underline'>
												Country <Icon size='lg' icon='FilterList' />
											</th>
											<td />
										</tr>
									</thead>
									<tbody>
										<Button> test </Button>
									</tbody>
								</table>
							</CardBody>
						</Card>
					</div>
				</div>
			</Page>
			<CustomerEditModal setIsOpen={setEditModalStatus} isOpen={editModalStatus} id={0} />
		</PageWrapper>
	);
};

export default FinancialsState;
