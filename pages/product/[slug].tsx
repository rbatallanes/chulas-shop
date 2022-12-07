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
import { Article, ICartArticle, Product, Size } from '../../interfaces'

import { Box, Button, Chip, Grid, SelectChangeEvent, Typography } from '@mui/material'
import { useState } from 'react'

//const product = initialData.products[0]

interface Props{
  product: Product;
}


const ProductPage: NextPage<Props> = ({product}) => {

  // const router = useRouter()
  // const {articles:article,isLoading} = useArticles(`/articles/slug/${router.query.slug}`)
  // if(isLoading){return <h1>Cargando...</h1> }
  // if(!article){return <h1>No existe articulo</h1>}
  const [sizeId, setsizeId] = useState(0)

  const [tempCartArticle, settempCartArticle] = useState<ICartArticle>({

    // SET POR IPRODUCT Y EL ARTICLE: UNDEFINED 

    id: product.id,
    title: product.articles[0]?.title,
    articlesSizes: product.articles[0]?.articlesSizes,
    images: product.articles[0]?.images,
    stocks: product.articles[0]?.stocks,
    description: product.articles[0]?.description,
    admissionDate: product.articles[0]?.admissionDate,
    purchasePrice: product.articles[0]?.purchasePrice,
    salePrice: product.articles[0]?.salePrice,
    sizes: undefined,
    genders: product.articles[0]?.genders,
    colors: undefined,//product.articles[0]?.colors,
    status: product.status,
    quantity: 2,
  })

  const onSelectedColor = (colors:number,artId:number) => {
    console.log('En Padre '+ colors);
    settempCartArticle(currentArticle=>({
      ...tempCartArticle,
      
      //ARTICLES
      
      colors,
      sizes:undefined, 

    }))
    setsizeId(artId)  // cambia el valor del select
  };

  const onSelectedSize = (sizes: SelectChangeEvent) => {
    console.log('sizeSelector: '+sizes.target.value as string)
    settempCartArticle(currentArticle=>({
      ...tempCartArticle,
      sizes: sizes.target.value as string
    }))

  };

  const updateQuantity =(quantity:number)=>{

    // quantity > 0 && quantity<= tempCartArticle.stocks[0].inStock 
    //   ? settempCartArticle(currentArticle=>({
    //     ...tempCartArticle,
    //     quantity
    //   }))
    //   : console.log('Valor mayor')

    settempCartArticle(currentArticle=>({
          ...tempCartArticle,
          quantity
        }))
  }

  const onAddArticle=()=>{
    console.log(tempCartArticle)
    
  }
  
  return (
    <ShopLayout title={product.brand} pageDescription={product.articles[0]?.description}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          {/* SlideShow */}
          <ProductSlideshow articles={product.articles}/> {/* tempCartArticle.articles */}
          {/* <ProductSlideshow/> */}
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box display={'flex'} flexDirection='column'>
            {/* Titulos */}
            <Typography variant='h1' component={'h1'}>{product.brand}</Typography>
            <Typography variant='subtitle1' component={'h2'}>$ {product.articles[0]?.salePrice}</Typography>

            {/* cantidad */}
            <Box sx={{my:2}}>
            <Typography variant='subtitle2'>Color</Typography>
              <ColorSelector
                articles={product.articles}
                selectedColor={tempCartArticle.colors} 
                onSelectedColor={onSelectedColor}
              />
              <SizeSelector 
                selectedSize={tempCartArticle.sizes} 
                articles={product.articles[`${sizeId}`]}  //VERIFICAR 
                onSelectedSize={onSelectedSize}
                />
              <Typography variant='subtitle2'>Cantidad</Typography>
              <ItemCounter
                currentValue={tempCartArticle.quantity}
                updateQuantity={updateQuantity}
                maxValue={tempCartArticle.stocks[0]}
              />

            </Box>

            {/* ADD Cart */}

            {
              product.articles[0]?.stocks[0].inStock > 0 
                ? (
                    <Button 
                      color='secondary' 
                      className='circular-btn'
                      onClick={onAddArticle}
                      variant="outlined"
                    >
                      {  tempCartArticle.colors 
                          ? tempCartArticle.sizes ? 'Agregar al carrito' :'Seleccione un talle'
                          : 'Seleccione un color'
                        }
                    </Button>
                  )
                :(
                  <Chip label='No hay disponible' color='error' variant='outlined'/>
                )
            }

            {/* Descripción */}

            <Box sx={{mt:3}}>
              <Typography variant='subtitle2'>Descripción</Typography>
              <Typography variant='body2'>{product.articles[0]?.description}</Typography> {/* tempCartArticle.articles */}
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