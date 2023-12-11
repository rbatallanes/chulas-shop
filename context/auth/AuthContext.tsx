import { createContext } from 'react';
import { IUsers } from '../../interfaces';

interface ContextProps{
     isLoggedIn: boolean;
     user?: IUsers;
     loginUser: (email: string, password: string) => Promise<boolean>
}

export const AuthContext = createContext({} as ContextProps);