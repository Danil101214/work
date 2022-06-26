import {Form} from './Form'
import { useDispatch } from 'react-redux'
import { setUser } from '../Store/Slices/userSlice'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from 'react-router-dom'
import React from "react";
const Login = () => {
    const dispatch = useDispatch();
    const {push} = useHistory()
    const handleLogin = (email, password) => {    //Делаем для того чтобы при вызове этой функции учётные данные из формы отправятся на сервер и мы получим данные на сервер.
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
          console.log(user)
          dispatch(setUser({
            email: user.email,
            id: user.id,
            token: user.accessToken
          }));
          push('/')
    })
        .catch(() => alert('invalid user'))
  }
  return (
        <Form title="sign up" handleClick={handleLogin}/>
  )
}
export {Login}