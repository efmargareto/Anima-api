import React, { useEffect, useState } from 'react'
import InputGroup from '../../components/InputGroup/InputGroup'
import { registerUser } from '../../services/AuthService'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './Register.css'

// Hacemos validación desde el front, yup + useForm

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required()
}).required();

const Register = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, setError, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    registerUser(data)
      .then( user => {
        navigate('/login')
      })
      .catch(err => {
        console.log('Register errors', err.response.status)
        if (err.response.status === 409) {
          setError('email', {message: 'Email already exist'})
        }
      })
  }

  return (
    <div className='Register'>
      <div className='container'>
        <h2>Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputGroup
            label='Name'
            id='name'
            name='name'
            type='text'
            register={register}
            error={errors.name?.message}
          ></InputGroup>
          <InputGroup
            label='Email'
            id='email'
            register={register}
            error={errors.email?.message}
            type='email'
          ></InputGroup>
          <InputGroup
            label='Password'
            id='password'
            name='password'
            type='password'
            register={register}
            error={errors.password?.message}
          ></InputGroup>
          <button className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Register