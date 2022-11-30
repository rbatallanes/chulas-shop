import { FC } from 'react'
import { Slide } from 'react-slideshow-image'

import 'react-slideshow-image/dist/styles.css'
import { initialData } from '../../database/products';
import { Article, Images } from '../../interfaces';
import styles from './ProductSlideShow.module.css'

//const {images} = initialData.products[0]

interface Props{
    //images: string[];
    //images: Images[];
    articles: Article[];
}

export const ProductSlideshow: FC<Props> = ({articles}) => {
// export const ProductSlideshow = () => {

  return (
    <Slide
      easing='ease'
      duration={7000}
      indicators
    >
      {articles.map((article,idx)=>(

        // const url = `/products/${article.images[idx]}`
        // return(
        //   <div className={styles['each-slide']} key={idx}>
        //     <div style={{
        //       backgroundImage: `url(${url})`,
        //       backgroundSize: 'cover'
        //     }}>

        //     </div>
        //   </div>
        // )
          article.images.map(image=>{
            const url = `/products/${image.name}`
            return(
                <div className={styles['each-slide']} key={image.id}>
                  <div style={{
                    backgroundImage: `url(${url})`,
                    backgroundSize: 'cover'
                  }}>
      
                  </div>
                </div>
              )
          })


        ))
      }
    </Slide>
  )
}