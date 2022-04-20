// --------------------
// Login
// --------------------

import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import InputGroup from '../../components/InputGroup/InputGroup'
import { useAuthContext } from '../../contexts/AuthContext';
import { loginUser } from '../../services/AuthService';

const Login = () => {

	const navigate = useNavigate()
	const location = useLocation()

	let from = location.state?.from?.pathname || "/profile";

	const { login } = useAuthContext()

	const [error, setError] = useState(false)
	const { register, handleSubmit, formState:{ errors } } = useForm({
    // resolver: yupResolver(schema)
  });

	const onSubmit = (data) => {
		loginUser(data)
			.then(response => {
				console.log(response.access_token);
				login(response.access_token, () => navigate(from, { replace: true }))
			})
			.catch(err => {
				setError(err?.response?.data?.message)
			})
	}

	return (
		<div className='Login'>
			<div className='container'>
				<h2>Login</h2>

					<form className='Login-form' onSubmit={handleSubmit(onSubmit)}>

						<InputGroup
							label='Email'
							id='email'
							name='email'
							type='email'
							placeholder='Email'
							register={register}
						></InputGroup>

						<InputGroup
							label='Password'
							id='password'
							name='password'
							type='password'
							placeholder='Enter your password'
							register={register}
						></InputGroup>

						<button className='btn btn-primary'>Submit</button>

					</form>
			</div>
		</div>	
	)
}

export default Login