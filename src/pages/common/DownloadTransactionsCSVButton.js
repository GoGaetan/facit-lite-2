import React, { Component } from 'react';
import { CSVLink } from 'react-csv';
import Button from '../../components/bootstrap/Button';
// import useFetch from '../../hooks/useFetch';


const headers = [
	{ label: 'Name', key: 'name' },
	{ label: 'Username', key: 'username' },
	{ label: 'Email', key: 'email' },
	{ label: 'Phone', key: 'phone' },
	{ label: 'Website', key: 'website' },
];

class AsyncCSV extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
		};
		this.csvLinkEl = React.createRef();
		this.getUserList = this.getUserList.bind(this);
		this.downloadReport = this.downloadReport.bind(this);
	}

	/* eslint class-methods-use-this: ["error", { "exceptMethods": ["getUserList"] }] */
	getUserList() {
    	// const { data } = useFetch(`/${path}`);

		return fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());
	}

	async downloadReport() {
		// eslint-disable-next-line react/prop-types
		const { startDate } = this.props;
		// eslint-disable-next-line react/prop-types
		const { endDate } = this.props;
		// eslint-disable-next-line no-console
		console.log('date start:', startDate, ': date end:', endDate);

		const data = await this.getUserList();

		this.setState({ data }, () => {
			setTimeout(() => {
				// this.csvLinkEl.current.link.click();
			});
		});
	}

	render() {
		const { data } = this.state;

		return (
			<div>
				<Button
					color='info'
					icon='CloudDownload'
					isLight
					tag='a'
					onClick={this.downloadReport}>
					Export
				</Button>
				<CSVLink
					headers={headers}
					filename='Clue_Mediator_Report_Async.csv'
					data={data}
					ref={this.csvLinkEl}
				/>
			</div>
		);
	}
}

export default AsyncCSV;
// <input type='button' value='Export to CSV (Async)' onClick={this.downloadReport} />
