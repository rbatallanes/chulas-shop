import React, { FC, useMemo, useState } from 'react';
import NextLink from 'next/link';
import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material'
import { IProduct } from '../../interfaces'

interface Props{
  product: IProduct;
}

export const ProductCard: FC<Props> = ({product}) => {

  const [isHovered, setIsHovered] = useState(false)
  const [setImageLoad, setSetImageLoad] = useState(false)

  const productImage = useMemo(() => {
    return isHovered 
    ? `products/${product.images[1]}`
    : `products/${product.images[0]}`
  }, [isHovered,product.images])

  return (
    <Grid item 
          xs={6} 
          sm={3}
          onMouseEnter={()=>setIsHovered(true)}
          onMouseLeave={()=>setIsHovered(false)}
    >
        <Card>
          <NextLink legacyBehavior href={'/product/slug'} passHref prefetch={false}>
            <Link> 
              <CardActionArea>
                <CardMedia
                  component={'img'}
                  className='fadeIn'
                  image={productImage}
                  alt={product.title}
                  onLoad={()=>setSetImageLoad(true)}
                />
              </CardActionArea>
            </Link>
          </NextLink>
              
        </Card>

        <Box sx={{mt:1,display:setImageLoad ? 'block':'none'}} className='fadeIn'>
          <Typography fontWeight={700}>{product.title}</Typography>
          <Typography fontWeight={500}>${product.price}</Typography>
        </Box>
    </Grid>
  )
}