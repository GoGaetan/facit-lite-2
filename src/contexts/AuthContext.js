import { React, createContext, useEffect, useReducer, useMemo } from 'react';

const INITIAL_STATE = {
	user: JSON.parse(localStorage.getItem('user')) || null,
	loading: false,
	error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN_START':
			return {
				user: null,
				loading: true,
				error: null,
			};
		case 'LOGIN_SUCCESS':
			return {
				user: action.payload,
				loading: false,
				error: null,
			};
		case 'LOGIN_FAILURE':
			return {
				user: null,
				loading: false,
				error: action.payload,
			};
		case 'LOGOUT':
			return {
				user: null,
				loading: false,
				error: null,
			};
		default:
			return state;
	}
};

// eslint-disable-next-line react/prop-types
const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(state.user));
	}, [state.user]);

	const value = useMemo(
		() => ({
			user: state.user,
			loading: state.loading,
			error: state.error,
			dispatch,
		}),
		[state],
	);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
