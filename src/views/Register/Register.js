// --------------------
// Register
// --------------------

import React from 'react'
import InputGroup from '../../components/InputGroup/InputGroup'
import { registerUser } from '../../services/UserService'

const Register = () => {

  // Submit
  // Realiamos una petición al servicio con la data 
  // Gestión de estado
  const handleRegister = data => {
    registerUser(data)
      .then( response => {
        console.log('Usuario registrado -->', response);
      })
      .catch()
  }

  return (
    <div className='Register'>

      <InputGroup
				label='Name'
				id='Login-form_input_name'
        name='name'
				type='text'
				placeholder='Name'
			></InputGroup>

      <InputGroup
        label='Email'
        id='Register-form_input_email'
        name='name'
        type='text'
        placeholder='Email'
      ></InputGroup>

      <InputGroup
        label='Password'
        id='Register-form_input_password'
        name='password'
        type='password'
        placeholder='Enter your password'
      ></InputGroup>

			<button type='submit' onClick={() => handleRegister(data)} >Submit</button>

    </div>
  )
}

export default Register