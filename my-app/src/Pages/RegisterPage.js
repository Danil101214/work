import React from 'react'
import { Link } from 'react-router-dom'
import SignUp from '../Components/SignUp';
const RegisterPage = () => {
  return (
    <div>
    <h1>Register</h1>
    <SignUp />
    <p>
        Already have an account? <Link to="/Login">Sign up</Link>
    </p>
    </div>
  )
}

export default RegisterPage;