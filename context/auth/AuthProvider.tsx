import { FC, useReducer } from 'react';
import { AuthContext,authReducer } from './';
import { IUsers } from '../../interfaces';
import { shopApi } from '../../api';
import Cookies from 'js-cookie';

export interface AuthState{
   isLoggedIn: boolean;
   user?: IUsers;
}

const AUTH_INITIAL_STATE: AuthState ={
   isLoggedIn: false,
   user: undefined
}

interface Props{
children?: React.ReactNode
}

export const AuthProvider:FC<Props> = ({children}) => {

const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE)

const loginUser = async(email:string, password:string): Promise<boolean> => {

        
    //setShowError(false)
    try {
        const { data } = await  shopApi.post(`/login`, {email, password}) 
        const { token,user } = data
        Cookies.set('token', token)
        dispatch({type: '[Auth] - Login', payload: user})
        return true

    } catch (error) {
        console.log('error en las credenciales');
       return false
    }

    // Todo: navegar a la proxima pagina
    
}


return (
   <AuthContext.Provider value={{
    ...state,
    //Methods
    loginUser
   }}>
   {children}
   </AuthContext.Provider>
)
}

export default AuthProvider