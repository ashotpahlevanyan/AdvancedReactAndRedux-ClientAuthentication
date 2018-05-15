import React,  { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {
	handleFormSubmit({email, password}) {
		console.log(email, password);
		// Need to do something to log user in
		actions.signinUser({ email, password });
	}

	render() {
		const { handleSubmit, fields: { email, password } } = this.props;

		return(
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<fieldset className="form-group">
					<label>Email:</label>
					<Field
						{...email}
						className="form-control"
						component="input"
					  name="email"
					  type="text"
					  placeholder="you@yourdomain.com"
					/>
				</fieldset>
				<fieldset className="form-group">
					<label>Password:</label>
					<Field
						{...password}
						className="form-control"
						component="input"
						name="password"
						type="password"
						placeholder=""
					/>
				</fieldset>
				<button action="submit" className="btn btn-primary">Sign in</button>
			</form>
		);
	}
}

export default reduxForm({
	form: 'signin',
	fields: ['email', 'password']
}, null, actions)(Signin);