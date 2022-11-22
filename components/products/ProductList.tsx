import { Grid } from '@mui/material'
import React, { FC } from 'react'
import { Article, IProduct } from '../../interfaces'
import {ProductCard} from '.';

interface Props{
    //products: IProduct[];
    products: Article[];
}

export const ProductList: FC<Props> = ({products}) => {
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