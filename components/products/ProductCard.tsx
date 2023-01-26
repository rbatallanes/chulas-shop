import React, { FC, useMemo, useState } from 'react';
import NextLink from 'next/link';
import { Box, Card, CardActionArea, CardMedia, Chip, Grid, Link, Typography } from '@mui/material'
import { ICustomProduct } from '../../interfaces'

interface Props{

  // product: ICustomArticle;
  product: ICustomProduct;
}

export const ProductCard: FC<Props> = ({product}) => {

  const [...images] = !!product.images ? product.images.split(',') : []

  const [isHovered, setIsHovered] = useState(false)
  const [setImageLoad, setSetImageLoad] = useState(false)

  const productImage = useMemo(() => {
    return isHovered 
    ? `/products/${images.length>1 ? images[1] : images[0] }` 
    : `/products/${images[0]}`
    // ? `products/${product.images[1].name}`
    // : `products/${product.images[0].name}`
  //}, [isHovered,product.articles[0].images])
}, [isHovered,images[0]])

  return (
    <Grid item 
          xs={6} 
          sm={3}
          onMouseEnter={()=>setIsHovered(true)}
          onMouseLeave={()=>setIsHovered(false)}
    >
        <Card>
          <NextLink legacyBehavior href={`/product/${product.slug}`} passHref prefetch={false}>
            <Link> 
              <CardActionArea>
                {
                  !!product &&
                  product.inStock === 0 && (
                    <Chip
                      color='primary'
                      label= 'Sin Stock'
                      sx={{position:'absolute',zIndex:99,top:'10px',left:'10px'}}
                    />
                  )
                }
                <CardMedia
                  component={'img'}
                  className='fadeIn'
                  image={images.length>0 ? productImage :  `/products/1740176-00-A_1.jpg`}
                  //image={images.length > 1 ? }
                  // image={product.images.length>0 ? `/products/${product.images}` :  `/products/1740176-00-A_1.jpg`}
                  //image={images.length>0 ? `/products/${images[0]}` :  `/products/1740176-00-A_1.jpg`}
                  //image={images.length>0 ? `/products/${images[0]}` :  `/products/1740176-00-A_1.jpg`}
                  alt={product.brand}
                  onLoad={()=>setSetImageLoad(true)}
                />
              </CardActionArea>
            </Link>
          </NextLink>
              
        </Card>

        <Box sx={{mt:1,display:setImageLoad ? 'block':'none'}} className='fadeIn'>
          <Typography fontWeight={700}>{product.brand}</Typography>
          <Typography fontWeight={500}>${ !!product && product.salePrice}</Typography>
        </Box>
    </Grid>
  )
}