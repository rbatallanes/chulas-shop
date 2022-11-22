import { Typography } from '@mui/material'
import React from 'react'
import { ShopLayout } from '../../components/layouts'
import { ProductList } from '../../components/products'
import { FullScreenLoading } from '../../components/ui'
import { useArticles } from '../../hooks'

const CategoryPage = () => {
    const {articles,isLoading} = useArticles('/articles')

  return (
    <ShopLayout title={'Chulas Shop'} pageDescription={'Encuentra los mejores productos en Chulas Tuc'}>
      <Typography variant='h1' component={'h1'}>Tienda Chulas</Typography>
      <Typography variant='h2' sx={{mb:1}}>Categoría [NAME]</Typography>

      { isLoading
        ? <FullScreenLoading/>
        : <ProductList products={ articles} />
      }

    </ShopLayout>
  )
}

export default CategoryPage