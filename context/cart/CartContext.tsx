import { createContext } from 'react';
import { ICartArticle } from '../../interfaces';

interface ContextProps{
     cart: ICartArticle[];
}

export const CartContext = createContext({} as ContextProps);