import { Box, Button, Chip, Grid, Typography } from '@mui/material'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { ShopLayout } from '../../components/layouts'
import { ProductSlideshow, SizeSelector } from '../../components/products'
import { ItemCounter } from '../../components/ui'
import { initialData } from '../../database/products'
import { useArticles } from '../../hooks'
import { Article } from '../../interfaces'

import { GetServerSideProps } from 'next'
import { shopApi } from '../../api'

//const product = initialData.products[0]

interface Props{
  product: Article;
}


const ProductPage: NextPage<Props> = ({product}) => {

  // const router = useRouter()
  // const {articles:article,isLoading} = useArticles(`/articles/slug/${router.query.slug}`)
  // if(isLoading){return <h1>Cargando...</h1> }
  // if(!article){return <h1>No existe articulo</h1>}
  
  console.log(product)

  console.log(product.title)
  

  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          {/* SlideShow */}
          <ProductSlideshow images={product.images}/>
          {/* <ProductSlideshow/> */}
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box display={'flex'} flexDirection='column'>
            {/* Titulos */}
            <Typography variant='h1' component={'h1'}>{product.title}</Typography>
            <Typography variant='subtitle1' component={'h2'}>$ {product.salePrice}</Typography>

            {/* cantidad */}
            <Box sx={{my:2}}>
              <Typography variant='subtitle2'>Cantidad</Typography>
              <ItemCounter/>
              <SizeSelector 
                // selectedSize={product.sizes[2]} 
                sizes={product.sizes}/>
            </Box>

            {/* ADD Cart */}
            <Button color='secondary' className='circular-btn'>
              Agregar al carrito
            </Button>
            <Chip label='No hay disponible' color='error' variant='outlined'/>

            {/* Descripción */}

            <Box sx={{mt:3}}>
              <Typography variant='subtitle2'>Descripción</Typography>
              <Typography variant='body2'>{product.description}</Typography>
            </Box>

          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time


export const getServerSideProps: GetServerSideProps = async ({params}) => {

  const {slug} = params as {slug: string}

  const { data:product } = await  shopApi.get<Article>(`/articles/slug/${slug}`)

  console.log(product);
  

  if(!product){
    return{
      redirect:{
        destination:'/',
        permanent:false
      }
    }
  }

  return {
    props: {
      product
    }
  }
}

export default ProductPage