import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../Store/Slices/userSlice'
export let store = configureStore({
    reducer: {
        user: userReducer,
    },
})