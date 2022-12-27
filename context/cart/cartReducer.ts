import { IProduct } from '../../interfaces';
import { CartState } from './';

type CartActionType = 
| { type: '[Cart] - LoadCart from Cookies | storage',payload: IProduct[]}
| { type: '[Cart] - Update products',payload: IProduct[]}
| { type: '[Cart] - Change cart quantity',payload: IProduct}


export const cartReducer = (state: CartState,action: CartActionType):CartState => {

   switch (action.type) {
       case '[Cart] - LoadCart from Cookies | storage':
           return {
               ...state,
               cart: [...action.payload] 
           }
        case '[Cart] - Update products':
            return {
                ...state,
                cart: [...action.payload]  
          }
        case '[Cart] - Change cart quantity':
            return {
                ...state,
                cart: state.cart.map(p=>{
                    if(p.article?.id !== action.payload.article!.id) return p;
                    if(p.article?.articlesSizes[0].id !== action.payload.article!.articlesSizes[0].id) return p;
              
                    return action.payload;
                 })
         }

       default:
           return state;
   }
}