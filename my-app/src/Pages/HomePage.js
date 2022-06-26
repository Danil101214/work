import {Redirect} from 'react-router-dom'
import { useDispatch } from 'react-redux/es/exports'
import {useAuth} from '../Hooks/use-auth'
import  {removeUser}  from '../Store/Slices/userSlice'
import React from "react";
const HomePage = () => {
  const dispatch = useDispatch()
  const {isAuth, email} = useAuth();
  return isAuth ? (
    <div>
    <h1>Welcome</h1>
    <button onClick={() => dispatch(removeUser())}> log out from {email}</button>
    </div>
  ) : (
  <Redirect to="login"/>
  )
}

export default HomePage;