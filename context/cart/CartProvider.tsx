import { FC, useReducer } from 'react';
import { ICartArticle } from '../../interfaces';
import { CartContext,cartReducer } from './';

export interface CartState{
   cart: ICartArticle[];
}

const CART_INITIAL_STATE: CartState ={
   cart: [],
}

interface Props{
children?: React.ReactNode
}

export const CartProvider:FC<Props> = ({children}) => {

const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE)

return (
   <CartContext.Provider value={{
   ...state,
   }}>
   {children}
   </CartContext.Provider>
)
}

export default CartProvider