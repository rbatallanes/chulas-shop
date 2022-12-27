import NextLink from 'next/link';
import { Box, Button, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material'
import { initialData } from '../../database/products'
import { ItemCounter } from '../ui';
import { FC, useContext } from 'react';
import { CartContext } from '../../context';
import { IProduct } from '../../interfaces';

// const productsInCart =[
//   initialData.products[0],
//   initialData.products[1],
//   initialData.products[2],
// ]

interface Props{
  editable?: boolean;
}

export const CartList: FC<Props> = ({editable=false}) => {

  const {cart : productsInCart,updateCartQuantity} = useContext(CartContext)

  const onNewCartQuantityValue =(product:IProduct,newQuantity:number)=>{

    product.quantity = newQuantity
    updateCartQuantity(product)
  }

  return (
    <>
    {
        productsInCart.map((product,idx)=>(
          <Grid container spacing={2} key={idx} sx={{mb:1}}>
            <Grid item xs={3}>
              {/* LLevar a la página del producto */}
              <NextLink href={`/product/${product.slug}`}>
                <Link>
                  <CardActionArea>
                    <CardMedia
                      image={`/products/${product.article?.images[0].name}`}
                      component='img'
                      sx={{borderRadius:'5px'}}
                    />
                  </CardActionArea>
                </Link>
              </NextLink>
            </Grid>
            <Grid item xs={7}>
              <Box display={'flex'} flexDirection='column'>
                <Typography variant='body1'>{product.article?.title}</Typography>
                <Typography variant='body1'>Talla: <strong>{product.article?.articlesSizes[0].sizes.name}</strong></Typography>
                {editable 
                  ? <ItemCounter
                      currentValue={product.quantity}
                      updateQuantity={(value)=>onNewCartQuantityValue(product,value)}
                      inStock= {product.article!.articlesSizes[0].stocks[0].inStock}
                      isSize={true}
                    />
                  : <Typography variant='h5'>{product.quantity} {product.quantity>1 ? 'artículos':'artículo'}</Typography>
                }
                
              </Box>
            </Grid>
            <Grid item xs={2} display='flex' alignItems={'center'} flexDirection={'column'}>
                <Typography variant='subtitle1'>$ {product.quantity * product.article!.salePrice}</Typography>
                {
                  editable && (
                    <Button variant='text' color='primary'>
                      Remover
                    </Button>
                  )
                }
            </Grid>
            
          </Grid>
        ))
      }
    </>
  )
}
