// --------------------
// Login
// --------------------

import React from 'react'
import InputGroup from '../../components/InputGroup/InputGroup'

const Login = () => {
	return (
		<div className='Login'>
			<div className='container'>
				<form className='Login-form'>
					<h1>Login</h1>

					<InputGroup
						label='Name'
						id='Login-form_input_name'
						name='name'
						type='text'
						placeholder='Name'
					></InputGroup>

					<InputGroup
						label='Email'
						id='Login-form_input_email'
						name='email'
						type='email'
						placeholder='Email'
					></InputGroup>

					<button type='submit'>Submit</button>

				</form>
			</div>
		</div>	
	)
}

export default Login