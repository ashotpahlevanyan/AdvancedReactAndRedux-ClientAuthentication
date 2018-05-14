


export function signinUser({ email, password }){
	return function(dispatch) { // we get arbitrary access to dispatch function with reduxThunk
	                            // that we injected inside main src file
		// Submit email/password to server
		// If the request is good
		// - Update state to indicate user is authenticated
		// - Save the JWT token
		// - Redirect to the route 'feature'


		// If request is bad
		// Show an error to the user
	};
}