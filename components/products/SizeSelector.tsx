
import { Box,FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";

import { FC, useEffect, useState } from "react";
import { Article, ArticlesSize, ICartArticle, Size } from "../../interfaces";

interface Props{

    article: Article;
    onSelectedSize: (article: Article)=> void;

}

export const SizeSelector: FC<Props> = ({article,onSelectedSize}) => {

  
    
    const [articulo, setArticulo] = useState<Article>();
    const [size, setSize] = useState(0)

    const handleSizeSelect = (event: SelectChangeEvent) => {
      console.log('sizeSelector: '+event.target.value as string)
      //setSize(parseInt(event.target.value))

      const newArticleSize = article?.articlesSizes?.filter(articleSize=>(articleSize.id === parseInt(event.target.value)))

      setArticulo({
        id: article.id,
        title: article.title,
        articlesSizes: newArticleSize,
        images: article.images,
        //stocks: article.stocks,
        description: article.description,
        admissionDate: article.admissionDate,
        purchasePrice: article.purchasePrice,
        salePrice: article.salePrice,
        //sizes: article.sizes,
        genders: article.genders,
        colors: article.colors,
        status: article.status,
      })
      

      //articulo && onSelectedSize(articulo)

    };

    useEffect(() => {
      console.log('useEffect');
      console.log(articulo)
      articulo && onSelectedSize(articulo)

    }, [articulo])
    

    const onChangeSizeSelector=()=>{
      console.log('a');


      
    }


  return (

    <Box sx={{ minWidth: 60,my:3 }}>
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Talle</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            //value={size}
            //value={selectedSize}
            // onChange={(e)=>
            //   (setSize(articleSize.sizes.id),
            //   handleSizeSelect(articleSize.sizes.id))
            // }
            onChange={handleSizeSelect}
            //onChange={onSelectedSize}
            label="Size"
            
        >
        
            {   
              //articles?.map(article=>(
                
                article.articlesSizes?.map((articleSize,idx)=>(
                                  
                                    <MenuItem
                                        key={idx}
                                        value={articleSize.id}
                                        //size="small"
                                        //color={selectedSize === size ? 'info':'secondary'}
                                        //onChange={(e)=>onSelectedSize(articleSize.sizes)}
                                    >
                                    {articleSize.sizes.name}
                                    </MenuItem>

                        ))
              //))

              
            
                    
            }
        </Select>
    </FormControl>
  </Box>
  )
}
