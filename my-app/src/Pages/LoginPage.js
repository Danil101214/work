import {Link} from 'react-router-dom'
import {Login} from '../Components/Login'
import React from "react";
const LoginPage = () => {
  return (
    <div>
    <h1>Login</h1>
    <Login />
    <p>
        Or <Link to="/register">register</Link>
    </p>
    </div>
  )
}

export default LoginPage;