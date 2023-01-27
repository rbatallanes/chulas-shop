import { NextPage,GetServerSideProps } from 'next'
import { Box, Typography } from '@mui/material'

import {ShopLayout} from '../../components/layouts'
import { ProductList } from '../../components/products'
import { shopApi } from '../../api'
import { Article, ICustomProduct } from '../../interfaces'

interface Props{
    //articles: Article[];
    articles: ICustomProduct[];
    foundArticles: boolean;
    query: string;
}


const SearchPage: NextPage<Props> = ({articles,foundArticles,query})=>{

    console.log(articles)
    

  return (
    <ShopLayout title={'Chulas Shop Search'} pageDescription={'Encuentra los mejores productos en Chulas Tuc'}>
      <Typography variant='h1' component={'h1'}>Busqueda de productos</Typography>

      {
        foundArticles
         ? (<Box display={'flex'}>
                <Typography variant='h2' sx={{mb:1}}>Encontramos lo siguiente con: </Typography>
                <Typography variant='h2' sx={{ml:1}} color='secondary' textTransform='capitalize'>{query}</Typography>
            </Box>)
         : (<Box display={'flex'}>
                <Typography variant='h2' sx={{mb:1}}> No encontramos ningún artículo con: </Typography>
                <Typography variant='h2' sx={{ml:1}} color='secondary' textTransform='capitalize'>{query}</Typography>
                <Typography variant='h2' sx={{ml:1}}>Quizás te pueda interesar: </Typography>
            </Box>)
      }

      <ProductList products={ articles} />
      
    </ShopLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({params}) => {

    const {query=''} = params as {query: string }

    console.log(query);
    
    if(query.length===0){
        return{
            redirect:{
                destination: '/',
                permanent: true
            }
        }
    }

    const { data } = await  shopApi.get<ICustomProduct[]>(`/articles/title/${query}`) 
    let articles = data
    const foundArticles = data.length>0

    console.log(data)
    if(!foundArticles){
        const { data } = await  shopApi.get<ICustomProduct[]>(`/products/articlesGroupByProducts`) 
        articles = data
    }
    
     

    if(!articles){
        return{
            redirect:{
                destination: '/',
                permanent: true
            }
        }
    }


    return {
        props: {
            articles,
            foundArticles,
            query
        }
    }
}

export default SearchPage