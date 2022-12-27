import { FC, useEffect, useReducer } from 'react';
import Cookies from 'js-cookie';
import { IProduct } from '../../interfaces';
import { CartContext,cartReducer } from './';

export interface CartState{
   cart: IProduct[];
}

const CART_INITIAL_STATE: CartState ={
   cart: []
}

interface Props{
   children?: React.ReactNode
}

export const CartProvider:FC<Props> = ({children}) => {

const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE)

useEffect(() => {
   try {
      const cookieProducts = Cookies.get('cart')? JSON.parse(Cookies.get('cart')!) : []
      dispatch({type: '[Cart] - LoadCart from Cookies | storage',payload: cookieProducts })
   } catch (error) {
      dispatch({type: '[Cart] - LoadCart from Cookies | storage',payload: [] })
   }
}, [])


useEffect(() => {
   if (state.cart.length > 0)   Cookies.set('cart',JSON.stringify(state.cart))
}, [state.cart])


const addArticleToCart = (product: IProduct)=>{
   //! Nivel 1
   // dispatch({type: '[Cart] - Add Article',payload: product })

   //! Nivel 2
   // const productsInCart = state.cart.filter(p=> p.article?.articlesSizes[0].id !== product.article?.articlesSizes[0].id)
   // dispatch({type: '[Cart] - Update products',payload: [...productsInCart,product] })

   //! Nivel 3
   const productsInCart = state.cart.some(p=> p.article?.id === product.article?.id)
   if(!productsInCart) return dispatch({type: '[Cart] - Update products',payload: [...state.cart,product] })

   const productsInCartSize = state.cart.some(p=> p.article?.articlesSizes[0].id === product.article?.articlesSizes[0].id)
   if(!productsInCartSize) return dispatch({type: '[Cart] - Update products',payload: [...state.cart,product] })

   const updateProducts = state.cart.map(p=>{
      if(p.article?.id !== product.article?.id) return p;
      if(p.article?.articlesSizes[0].id !== product.article?.articlesSizes[0].id) return p;

      //Acumular
      p.quantity += product.quantity;
      return p;
   })

   //console.log(updateProducts)
   dispatch({type: '[Cart] - Update products',payload: updateProducts })

}

const updateCartQuantity =(product: IProduct)=>{
   dispatch({type: '[Cart] - Change cart quantity',payload: product })
}

return (
   <CartContext.Provider value={{
      ...state,

      //Methods
      addArticleToCart,
      updateCartQuantity,

   }}>
   {children}
   </CartContext.Provider>
)
}

export default CartProvider