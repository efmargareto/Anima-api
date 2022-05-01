import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import InputGroup from '../../components/InputGroup/InputGroup'
import { useAuthContext } from '../../contexts/AuthContext';
import { loginUser } from '../../services/AuthService'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required()
}).required();

const Login = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const [ backErrors, setBackErrors ] = useState()

	const { login } = useAuthContext()

	let from = location.state?.from?.pathname || "/profile";

	const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

	const onSubmit = (data) => {
		setBackErrors(undefined)
		loginUser(data)
			.then(response => {
				login(response.access_token, () => navigate(from, { replace: true }))
			})
			.catch(err => {
				setBackErrors(err?.response?.data?.message)
			})
	}

	return (
		<div className='Login'>
			<div className='anima-container'>
				<h2>Login</h2>
					<form className='Login-form' onSubmit={handleSubmit(onSubmit)}>
						<InputGroup
							label='Email'
							id='email'
							name='email'
							type='email'
							placeholder='Email'
							register={register}
							error={errors.email?.message}
						></InputGroup>
						<InputGroup
							label='Password'
							id='password'
							placeholder='Enter your password'
							register={register}
							error={backErrors || errors.password?.message}
							type='password'
						></InputGroup>
						<button className='btn btn-primary'>Submit</button>
					</form>
			</div>
		</div>	
	)
}

export default Login