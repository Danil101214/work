//Будем узнавать авторизован ли пользователь.
import {useSelector} from 'react-redux';

export function useAuth() {
    let {email, token, id} = useSelector(state => state.user);

    return {
        isAuth: !!email,
        email,
        token,
        id,
    };
}