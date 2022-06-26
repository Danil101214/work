import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {Form} from './Form';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { setUser } from '../Store/Slices/userSlice'
import React from "react";

  function SignUp() {
    const dispatch = useDispatch();
    const {push} = useHistory()
    function handleRegister(email, password) {    //Делаем для того чтобы при вызове этой функции учётные данные из формы отправятся на сервер и мы получим данные на сервер.
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
          console.log(user)
          dispatch(setUser({
            email: user.email,
            id: user.id,
            token: user.accessToken
          }));
          push('/')
    })
        .catch(console.error)
    }
  return (
        <Form title ="register" handleClick={handleRegister} />
    )
  }   

export default SignUp;