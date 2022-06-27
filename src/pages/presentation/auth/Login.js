import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Input from '../../../components/bootstrap/forms/Input';
import Button from '../../../components/bootstrap/Button';
import LogoClp from '../../../components/LogoClp';
import useDarkMode from '../../../hooks/useDarkMode';
import { AuthContext } from '../../../contexts/AuthContext';
//  import ProviderWithMemo, { CustomCtx as CtxWithMemo } from '../../../contexts/ProviderWithMemo';
// import Child from './Child';
// 								<ProviderWithMemo>
// 									<Child ctx={CtxWithMemo} />
// 								</ProviderWithMemo>
/* isNewUser ? (
										<>
											<div className='col-12'>
												<FormGroup
													id='signup-email'
													isFloating
													label='Your email'>
													<Input type='email' autoComplete='email' />
												</FormGroup>
											</div>
											<div className='col-12'>
												<FormGroup
													id='signup-name'
													isFloating
													label='Your name'>
													<Input autoComplete='given-name' />
												</FormGroup>
											</div>
											<div className='col-12'>
												<FormGroup
													id='signup-surname'
													isFloating
													label='Your surname'>
													<Input autoComplete='family-name' />
												</FormGroup>
											</div>
											<div className='col-12'>
												<FormGroup
													id='signup-password'
													isFloating
													label='Password'>
													<Input
														type='password'
														autoComplete='password'
													/>
												</FormGroup>
											</div>
											<div className='col-12'>
												<Button
													color='info'
													className='w-100 py-3'
													onClick={handleOnClick}>
													Sign Up
												</Button>
											</div>
										</>
									) :
                   */
// eslint-disable-next-line react/prop-types
const LoginHeader = () => {
	// { isNewUser }
	// if (isNewUser) {
	// 	return (
	// 		<>
	// 			<div className='text-center h1 fw-bold mt-5'>Create Account,</div>
	// 			<div className='text-center h4 text-muted mb-5'>Sign up to get started!</div>
	// 		</>
	// 	);
	// } navigate('/'), [navigate];
	return (
		<>
			<div className='text-center h1 fw-bold mt-1'>Welcome,</div>
			<div className='text-center h4 text-muted mb-5'>Sign in to continue!</div>
		</>
	);
};

const Login = ({ isSignUp }) => {
	const { darkModeStatus } = useDarkMode();

	const [usernameInput, setUsernameInput] = useState(false);
	const [isNewUser] = useState(isSignUp);

	const [credentials, setCredentials] = useState({
		username: undefined,
		password: undefined,
	});

	const { loading, error, dispatch } = useContext(AuthContext);

	const handleChange = (e) => {
		setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault(); // 👈️ prevent page refresh
	};

	const navigate = useNavigate();
	const handleOnClick = async (e) => {
		e.preventDefault();

		// eslint-disable-next-line no-console
		console.log('credentials:', credentials);
		// eslint-disable-next-line no-console
		console.log('user:', credentials);

		// eslint-disable-next-line no-console
		console.log('dispatch:', dispatch);

		dispatch({ type: 'LOGIN_START' });
		try {
			// ${process.env.REACT_APP_API_BASE_URL}
			const res = await axios.post(`/auth/login`, credentials);
			if (res.data.isAdmin) {
				dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.details });
				navigate('/');
			} else {
				dispatch({
					type: 'LOGIN_FAILURE',
					payload: { message: 'You are not allowed!' },
				});
			}
		} catch (err) {
			dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data });
		}
	};

	return (
		<PageWrapper
			title='Login'
			className={classNames({ 'bg-warning': !isNewUser, 'bg-info': !!isNewUser })}>
			<Page className='p-0'>
				<div className='row h-100 align-items-center justify-content-center'>
					<div className='col-xl-4 col-lg-6 col-md-8 shadow-3d-container'>
						<Card className='shadow-3d-dark' data-tour='login-page'>
							<CardBody>
								<div className='text-center my-1'>
									<Link
										to='/'
										className={classNames(
											'text-decoration-none  fw-bold display-2',
											{
												'text-dark': !darkModeStatus,
												'text-light': darkModeStatus,
											},
										)}>
										<LogoClp width={200} height={200} />
									</Link>
								</div>
								<LoginHeader isNewUser={isNewUser} />

								<form className='row g-4' onSubmit={handleSubmit}>
									<div className='col-12'>
										{!usernameInput ? (
											<FormGroup
												id='username'
												isFloating
												label='Your Username'>
												<Input
													autoComplete='username'
													onChange={handleChange}
												/>
											</FormGroup>
										) : (
											<FormGroup
												id='password'
												isFloating
												label='Your Password'>
												<Input
													type='password'
													autoComplete='password'
													onChange={handleChange}
												/>
											</FormGroup>
										)}
									</div>
									<div className='col-12'>
										{!usernameInput ? (
											<Button
												color='warning'
												className='w-100 py-3'
												onClick={() => setUsernameInput(true)}>
												Continue
											</Button>
										) : (
											<Button
												color='warning'
												disabled={loading}
												className='w-100 py-3'
												onClick={handleOnClick}>
												Login
											</Button>
										)}
									</div>
								</form>
								{error && <span>{error.message}</span>}
							</CardBody>
						</Card>
						<div className='text-center'>
							<a
								href='/'
								className={classNames('text-decoration-none me-3', {
									'link-light': isNewUser,
									'link-dark': !isNewUser,
								})}>
								Privacy policy
							</a>
							<a
								href='/'
								className={classNames('link-light text-decoration-none', {
									'link-light': isNewUser,
									'link-dark': !isNewUser,
								})}>
								Terms of use
							</a>
						</div>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};
Login.propTypes = {
	isSignUp: PropTypes.bool,
};
Login.defaultProps = {
	isSignUp: false,
};

export default Login;
