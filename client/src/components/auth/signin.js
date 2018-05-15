import React,  { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {
	constructor(props) {
		super(props);
	}
	handleFormSubmit({email, password}) {
		//console.log(email, password);
		// Need to do something to log user in
		this.props.signinUser({ email, password });
	}

	render() {
		const { handleSubmit, fields: { email, password } } = this.props;

		return(
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<fieldset className="form-group">
					<label>Email:</label>
					<input
						{...email}
						className="form-control"
					  name="email"
					  type="text"
					  placeholder="you@yourdomain.com"
					/>
				</fieldset>
				<fieldset className="form-group">
					<label>Password:</label>
					<input
						{...password}
						className="form-control"
						name="password"
						type="password"
						placeholder=""
					/>
				</fieldset>
				<button action="submit" type="submit" className="btn btn-primary">Sign in</button>
			</form>
		);
	}
}

export default reduxForm({
	form: 'signin',
	fields: ['email', 'password']
}, null, actions)(Signin);