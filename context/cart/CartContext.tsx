import { createContext } from 'react';
import { ICartArticle, IProduct } from '../../interfaces';

interface ContextProps{
     cart: IProduct[];
     addArticleToCart: (article: IProduct) => void;
     updateCartQuantity: (product: IProduct) => void;
}

export const CartContext = createContext({} as ContextProps);