// --------------------
// Login
// --------------------

import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import InputGroup from '../../components/InputGroup/InputGroup'

const Login = () => {


	return (
		<div className='Login'>
			<div className='container'>
				<h2>Login</h2>

			
				{/* <form className='Login-form' onSubmit={handleSubmit(onSubmit)}>

					<InputGroup
						label='Email'
						id='email'
						name='email'
						type='email'
						placeholder='Email'
					></InputGroup>

					<InputGroup
						label='Password'
						id='password'
						name='password'
						type='password'
						placeholder='Enter your password'
					></InputGroup>

					<button type='submit'>Submit</button>

				</form> */}
			</div>
		</div>	
	)
}

export default Login