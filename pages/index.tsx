import { Typography } from '@mui/material'
import {ShopLayout} from '../components/layouts'
import { ProductList } from '../components/products'
import { initialData } from '../database/products'
import { GetStaticProps, NextPage } from 'next'
import { shopApi } from '../api'
import { Article } from '../interfaces'
import { useArticles } from '../hooks'
import { FullScreenLoading } from '../components/ui'

interface Props{
  articles: Article[]
}


 // const HomePage: NextPage<Props> = ({articles})=>{
  const HomePage: NextPage = ()=>{

  const {articles,isLoading} = useArticles('/articles')

  return (
    <ShopLayout title={'Chulas Shop'} pageDescription={'Encuentra los mejores productos en Chulas Tuc'}>
      <Typography variant='h1' component={'h1'}>Tienda Chulas</Typography>
      <Typography variant='h2' sx={{mb:1}}>Encontrá la mejor ropa!</Typography>

      { isLoading
        ? <FullScreenLoading/>
        : <ProductList products={ articles} />
      }

    </ShopLayout>
  )
}

// export const getStaticProps: GetStaticProps = async (ctx) => {
//   const {data} = await  shopApi.get<Article>('/articles')
  
//   return {
//     props: {
//       articles: data
//     }
//   }
// }

export default HomePage
