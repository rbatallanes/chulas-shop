import { Grid } from '@mui/material'
import React, { FC } from 'react'
import { ICustomProduct} from '../../interfaces'
import {ProductCard} from '.';

interface Props{
    products: ICustomProduct[];
    //products: ICustomArticle[];
}

export const ProductList: FC<Props> = ({products}) => {

    console.log(products);
    
  return (
    <Grid container spacing={4}>
        {
            products.map(product=>(
                <ProductCard 
                    key={product.id}
                    product={product}
                />
            ))
        }
        
    </Grid>
  )
}