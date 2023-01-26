import { createContext } from 'react';
import { IProduct } from '../../interfaces';

interface ContextProps{
     cart: IProduct[];
     numberOfItems: number;
     subTotal: number;
     tax : number;
     total: number;
     addArticleToCart: (article: IProduct) => void;
     updateCartQuantity: (product: IProduct) => void;
     removeCartProduct: (product: IProduct) => void;
}

export const CartContext = createContext({} as ContextProps);