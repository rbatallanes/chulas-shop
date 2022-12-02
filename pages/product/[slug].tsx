import { NextPage } from 'next'
import { GetStaticPaths } from 'next'
import { GetStaticProps } from 'next'
import { GetServerSideProps } from 'next'

import { useRouter } from 'next/router'
import { shopApi } from '../../api'

import { ShopLayout } from '../../components/layouts'
import { ColorSelector, ProductSlideshow, SizeSelector } from '../../components/products'
import { ItemCounter } from '../../components/ui'
import { initialData } from '../../database/products'
import { useArticles } from '../../hooks'
import { Article, Product } from '../../interfaces'

import { Box, Button, Chip, Grid, Typography } from '@mui/material'

//const product = initialData.products[0]

interface Props{
  product: Product;
}


const ProductPage: NextPage<Props> = ({product}) => {

  // const router = useRouter()
  // const {articles:article,isLoading} = useArticles(`/articles/slug/${router.query.slug}`)
  // if(isLoading){return <h1>Cargando...</h1> }
  // if(!article){return <h1>No existe articulo</h1>}
  
  return (
    <ShopLayout title={product.brand} pageDescription={product.articles[0]?.description}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          {/* SlideShow */}
          <ProductSlideshow articles={product.articles}/>
          {/* <ProductSlideshow/> */}
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box display={'flex'} flexDirection='column'>
            {/* Titulos */}
            <Typography variant='h1' component={'h1'}>{product.brand}</Typography>
            <Typography variant='subtitle1' component={'h2'}>$ {product.articles[0]?.salePrice}</Typography>

            {/* cantidad */}
            <Box sx={{my:2}}>
              <Typography variant='subtitle2'>Cantidad</Typography>
              <ItemCounter/>
              <ColorSelector
                articles={product.articles}/>
              <SizeSelector 
                // selectedSize={product.sizes[2]} 
                articles={product.articles}/>
            </Box>

            {/* ADD Cart */}

            {
              product.articles[0]?.stocks[0].inStock > 0 
                ? (
                    <Button color='secondary' className='circular-btn'>
                      Agregar al carrito
                    </Button>
                  )
                :(
                  <Chip label='No hay disponible' color='error' variant='outlined'/>
                )
            }

            {/* Descripción */}

            <Box sx={{mt:3}}>
              <Typography variant='subtitle2'>Descripción</Typography>
              <Typography variant='body2'>{product.articles[0]?.description}</Typography>
            </Box>

          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time


// export const getServerSideProps: GetServerSideProps = async ({params}) => {

//   const {slug} = params as {slug: string}

//   const { data:product } = await  shopApi.get<Article>(`/articles/slug/${slug}`)
  
//   if(!product){
//     return{
//       redirect:{
//         destination:'/',
//         permanent:false
//       }
//     }
//   }

//   return {
//     props: {
//       product
//     }
//   }
// }




export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await  shopApi.get<Product[]>(`/products`)

  return {
    paths: data.map(product=>({
      params: {slug : product.slug}
    })),
    fallback: "blocking"
  }
}


export const getStaticProps: GetStaticProps = async ({params}) => {
  const {slug} = params as {slug: string}
  const { data:product } = await  shopApi.get<Product>(`/products/slug/${slug}`)

  if(!product){
    return{
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      product
    },
    revalidate: 86400,
  }
}


export default ProductPage