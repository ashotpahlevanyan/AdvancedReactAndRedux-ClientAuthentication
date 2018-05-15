import axios from 'axios';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }){
	return function(dispatch) { // we get arbitrary access to dispatch function with reduxThunk
	                            // that we injected inside main src file

		// Submit email/password to server
		console.log('I am here');
		axios.post(`${ROOT_URL}/signin`, { email, password });

		// If the request is good...
		// - Update state to indicate user is authenticated
		// - Save the JWT token
		// - Redirect to the route 'feature'


		// If request is bad...
		// Show an error to the user
	};
}