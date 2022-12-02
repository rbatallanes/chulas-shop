import { Grid } from '@mui/material'
import React, { FC } from 'react'
import { Article, ICustomProduct, IProduct, Product } from '../../interfaces'
import {ProductCard} from '.';

interface Props{
    //products: IProduct[];
    //products: Product[];
    products: ICustomProduct[];
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