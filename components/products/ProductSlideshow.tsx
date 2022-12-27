import { FC } from 'react'
import { Slide } from 'react-slideshow-image'

import 'react-slideshow-image/dist/styles.css'
import { initialData } from '../../database/products';
import { Article, Images } from '../../interfaces';
import styles from './ProductSlideShow.module.css'

interface Props{
    articles: Article[];
}

export const ProductSlideshow: FC<Props> = ({articles}) => {

  return (
    <Slide
      easing='ease'
      duration={7000}
      indicators
    >
      {articles.map((article,idx)=>(
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