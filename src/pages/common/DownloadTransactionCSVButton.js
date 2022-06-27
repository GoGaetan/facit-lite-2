import React, { useState, useEffect } from 'react';
import { CSVLink } from 'react-csv';
import axios from 'axios';
import Button from '../../components/bootstrap/Button';

const headers = [
	{ label: 'ID', key: 'id' },
	{ label: 'Date', key: 'Date' },
	{ label: 'Amount', key: 'Amount' },
	{ label: 'OpeningBalance', key: 'OpeningBalance' },
	{ label: 'ClosingBalance', key: 'ClosingBalance' },
	{ label: 'Destination User Id', key: 'DestinationUserId.id' },
	{ label: 'User Id', key: 'userId.id' },
	{ label: 'Fee', key: 'GhoFee' },
	{ label: 'Status', key: 'Status' },
];

// eslint-disable-next-line react/prop-types
const AsyncCSV = ({ startDate, endDate }) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [csvLinkEl] = useState(React.createRef());

	useEffect(() => {
		if (data.length !== 0) {
			// eslint-disable-next-line no-console
			console.log('data_:', data);
			setTimeout(() => {
				csvLinkEl.current.link.click();
			});
		}
	}, [data, csvLinkEl]);

	const DownloadReport = async () => {
		// eslint-disable-next-line no-console
		console.log('date start:', startDate, ': date end:', endDate);

		// const data_ = await fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
		// 	res.json(),
		// ); 
		// ${process.env.REACT_APP_API_BASE_URL}
		try {
			setLoading(true);
			await axios
				.post(`/transactions/getTransactionsReport`, {
					startDate,
					endDate,
				})
				.then((response) => {
					setData(response.data);
					setLoading(false);
				});
		} catch (err) {
			// eslint-disable-next-line no-console
			console.log('err catched:', err);
			setLoading(false);
		}
	};

	return (
		<>
			<Button color='info' icon='CloudDownload' isLight tag='a' onClick={DownloadReport}>
				{loading ? 'Loading csv...' : 'Export'}
			</Button>
			<CSVLink
				headers={headers}
				filename='Report_TransactionsAsync_test.csv'
				data={data}
				ref={csvLinkEl}
				separator=';'
			/>
		</>
	);
};

export default AsyncCSV;
// <input type='button' value='Export to CSV (Async)' onClick={this.downloadReport} />
