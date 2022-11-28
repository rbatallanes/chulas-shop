import { ICartArticle } from '../../interfaces';
import { CartState } from './';

type CartActionType = 
| { type: '[Cart] - LoadCart from Cookies | storage',payload: ICartArticle[]}
| { type: '[Cart] - AddArticle',payload: ICartArticle}


export const cartReducer = (state: CartState,action: CartActionType):CartState => {

   switch (action.type) {
       case '[Cart] - LoadCart from Cookies | storage':
           return {
               ...state,
           }

       default:
           return state;
   }
}