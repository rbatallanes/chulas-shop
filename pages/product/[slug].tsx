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
import { Article, ArticlesSize, IProduct, Product, Size } from '../../interfaces'

import { Box, Button, Chip, Grid, SelectChangeEvent, Typography } from '@mui/material'
import { useContext, useState } from 'react'
import { Router } from '@mui/icons-material'
import { CartContext } from '../../context'

interface Props{
  product: Product;
}

const ProductPage: NextPage<Props> = ({product}) => {

  // const router = useRouter()
  // const {articles:article,isLoading} = useArticles(`/articles/slug/${router.query.slug}`)
  // if(isLoading){return <h1>Cargando...</h1> }
  // if(!article){return <h1>No existe articulo</h1>}

  const router = useRouter()
  const {addArticleToCart} = useContext(CartContext)
  const [articleId, setArticleId] = useState(0)
  const [isSize, setIsSize] = useState(false)
  const [isColor, setColor] = useState(false)
  const [isSelectedSize, setSelectedSize] = useState(false)
  const [tempCartArticle, settempCartArticle] = useState<IProduct>({

    // SET POR IPRODUCT Y EL ARTICLE: UNDEFINED 

    id: product.id,
    brand: product.brand,
    slug: product.slug,
    article: undefined,
    admissionDate: product.admissionDate,
    tags: product.tags,
    status: product.status,
    quantity: 1,
  })

  const onSelectedColor = (article: Article,artId:number) => {
    

    tempCartArticle.article?.id !== article.id && setSelectedSize(false);
    
    settempCartArticle(currentArticle=>({
      ...currentArticle,
      
      //ARTICLES
      article,
      // colors,
      // sizes:undefined, 

    }))
    setArticleId(artId)  // cambia el valor del select
    setIsSize(false)
    updateQuantity(1)
    setColor(true)
  };


  const onSelectedSize = (article: Article) => {

    settempCartArticle(currentArticle=>({
      ...currentArticle,
      article
    }))
    setIsSize(true)
    updateQuantity(1)
    setSelectedSize(true)
  };

  const updateQuantity =(quantity:number)=>{

    settempCartArticle(currentArticle=>({
          ...currentArticle,
          quantity
        }))
  }

  const onAddArticle=()=>{

    if (!tempCartArticle.article || tempCartArticle.article?.articlesSizes.length > 1) {return;}

    //console.log(tempCartArticle)
    addArticleToCart(tempCartArticle)
    //router.push('/cart')
  }
  
  return (
    <ShopLayout title={product.brand} pageDescription={product.articles[0]?.description}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          {/* SlideShow */}
          {/* {VERIFICAR PARA LAS IMAGENES DEL tempCartArticle} */}
          {/* <ProductSlideshow articles={(!!tempCartArticle.article ? Array.isArray(tempCartArticle.article) : product.articles)}/> */}
          <ProductSlideshow articles={!!tempCartArticle.article ? [tempCartArticle.article] : product.articles}/>
          {/* <ProductSlideshow/> */}
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box display={'flex'} flexDirection='column'>
            <Typography variant='h1' component={'h1'}>{product.brand}</Typography>
            <Typography variant='subtitle1' component={'h2'}>$ {product.articles[0]?.salePrice}</Typography>

            <Box sx={{my:2}}>
              <Typography variant='subtitle2'>Color</Typography>
              <ColorSelector
                articles={product.articles}
                selectedColor={tempCartArticle.article?.colors.id} 
                onSelectedColor={onSelectedColor}
              />

              {isColor && (                
                <SizeSelector 
                  article={product.articles[`${articleId}`]}
                  onSelectedSize={onSelectedSize}
                  />
              )}

              {isSelectedSize && (
                <>
                  <Typography variant='subtitle2'>Cantidad</Typography>
                    <ItemCounter
                      currentValue={tempCartArticle.quantity}
                      updateQuantity={updateQuantity}
                      
                      inStock=
                      {!!tempCartArticle.article 
                        ? tempCartArticle.article?.articlesSizes[0].stocks[0].inStock 
                        : 0
                      }
                      isSize={isSize}
                    />
                </>
              )}

            </Box>

            {/* ADD Cart */}

            {
              //product.articles[0]?.stocks[0].inStock > 0 
              tempCartArticle.article === undefined
              ?
                (<Chip 
                  label='Seleccioná un color' 
                  color='info' 
                />)
              :
              (
                !isSize
                ?
                  (<Chip 
                    label='Seleccioná un talle' 
                    color='info' 
                  />)
                :
                tempCartArticle.article?.articlesSizes[0]?.stocks[0]?.inStock > 0
                 
                  ? (
                      <Button 
                        disabled={!isSelectedSize}
                        color='secondary' 
                        className='circular-btn'
                        onClick={onAddArticle}
                        variant="outlined"
                      >
                        {/* {  tempCartArticle.colors 
                            ? tempCartArticle.sizes ? 'Agregar al carrito' :'Seleccione un talle'
                            : 'Seleccione un color'
                          } */}
                          Agregar al carrito
                      </Button>
                    )
                  :(
                    <Chip 
                      label='No hay disponible' 
                      color='error' 
                      variant='outlined'
                    />
                  )
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