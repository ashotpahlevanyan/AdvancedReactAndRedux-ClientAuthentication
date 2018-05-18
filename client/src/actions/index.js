import axios from 'axios';
import { browserHistory } from 'react-router';
import {
	AUTH_USER,
	AUTH_ERROR,
	UNAUTH_USER,
	FETCH_MESSAGE
} from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }){
	return function(dispatch) { // we get arbitrary access to dispatch function with reduxThunk
	                            // that we injected inside main src file
		// Submit email/password to server
		axios.post(`${ROOT_URL}/signin`, { email, password })
			.then(response => {
				// If the request is good...
				// - Update state to indicate user is authenticated
				dispatch({ type: AUTH_USER });
				// - Save the JWT token
				localStorage.setItem('token', response.data.token);
				// - Redirect to the route 'feature'
				browserHistory.push('/feature');
			})
			.catch(() => {
				// If request is bad...
				// Show an error to the user
				dispatch(authError('Bad Login Info'));

			});
	};
}

export function signupUser({email, password}) {
	return function(dispatch) {
		axios.post(`${ROOT_URL}/signup`, {email, password})
			.then(response => {
				dispatch({type: AUTH_USER});
				localStorage.setItem('token', response.data.token);
				browserHistory.push('/feature');
			})
			.catch(response => dispatch(authError(response.response.data.error)));
	}
}

export function authError(error) {
	return {
		type: AUTH_ERROR,
		payload: error
	};
}

export function signoutUser() {
	localStorage.removeItem('token');
	return { type: UNAUTH_USER };
}

export function fetchMessage() {
	return function(dispatch) {
		axios.get(ROOT_URL, {
			headers: { authorization: localStorage.getItem('token') }
		})
			.then(response => {
				dispatch({
					type: FETCH_MESSAGE,
					payload: response.data.message
				});
			});
	}
}

// with redux promimse it is easier to read, but a matter of choice
// export function fetchmessage() {
// 	const request = axios.get(ROOT_URL, {
// 		headers: { authorization: localStorage.getItem('token') }
// 	});
//
// 	return {
// 		type: FETCH_MESSAGE,
// 		payload: request
// 	};
// }