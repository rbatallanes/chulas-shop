import { Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import { ShopLayout } from '../../components/layouts'
import { ProductList } from '../../components/products'
import { FullScreenLoading } from '../../components/ui'
import { useCategory } from '../../hooks'

const CategoryPage = () => {
    const router = useRouter()
    const {category,isLoading} = useCategory(`/categories/name/${router.query.name}`)

  return (
    <ShopLayout title={'Chulas Shop'} pageDescription={'Encuentra los mejores productos en Chulas Tuc'}>
      <Typography variant='h1' component={'h1'}>Tienda Chulas</Typography>
      <Typography variant='h2' sx={{mb:1}}>Categoría {router.query.name}</Typography>

      {isLoading
        ? <FullScreenLoading/>
        : <>
          {!!category 
            && category.products?.map(product=>(
              
              // <h1 key={product.id}>{product.brand}</h1>
              
              // product.articles.map(article=>(
              //   <h1 key={article.id}>{article.title}</h1>
              // ))
      
              <ProductList key={product.id} products={ product.articles} />
            ))
          }
        </>
      } 

      {/* { isLoading
        ? <FullScreenLoading/>
        : <ProductList products={ articles} />
      } */}

    </ShopLayout>
  )
}

export default CategoryPage