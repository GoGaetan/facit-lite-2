import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { demoPages } from '../menu';

const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const { dispatch } = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const res = await axios.post(url);
				setData(res.data);
			} catch (err) {
				setError(err);
				if (
					err.response.status === 401 ||
					err.response.status === 500 ||
					err.response.status === 403
				) {
					dispatch({ type: 'LOGOUT' });
					navigate(`../${demoPages.login.path}`);
				}
			}
			setLoading(false);
		};
		fetchData();
	}, [dispatch, navigate, url]);

	const reFetch = async () => {
		setLoading(true);
		try {
			const res = await axios.post(url);
			setData(res.data);
		} catch (err) {
			setError(err);
		}
		setLoading(false);
	};

	return { data, loading, error, reFetch };
};

export default useFetch;
