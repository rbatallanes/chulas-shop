
import { Box,FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";

import { FC, useState } from "react";
import { Article, ArticlesSize, ISize, Size } from "../../interfaces";

interface Props{
    // selectedSize?: ISize;
    // sizes: ISize[];
    // selectedSize?: Size;
    // sizes: Size;

    articles?: Article[];
    //articlesSizes?: ArticlesSize[];
    onSelectedSize?: (sizes: SelectChangeEvent)=> void;
    //onSelectedSize: (sizes: ArticlesSize)=> void;
    selectedSize?: string;
}

export const SizeSelector: FC<Props> = ({articles,selectedSize,onSelectedSize}) => {

  
    
    //const [size, setSize] = useState('');

    const handleSizeSelect = (event: SelectChangeEvent) => {
      console.log('sizeSelector: '+event.target.value as string)
      
      // ARTICLES.REDUCE-----
      //const newArticleSize = articles?.reduce(article=>article.articlesSizes.id)




      //setSize(event.target.value as string)
    };


  return (

    <Box sx={{ minWidth: 60,my:3 }}>
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Talle</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            //value={size}
            value={selectedSize}
            // onChange={(e)=>
            //   (setSize(articleSize.sizes.id),
            //   handleSizeSelect(articleSize.sizes.id))
            // }
            onChange={handleSizeSelect}
            //onChange={onSelectedSize}
            label="Size"
            
        >
        
            {   
              articles?.map(article=>(
                
                article.articlesSizes.map((articleSize,idx)=>(
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
              ))

              
            
                    
            }
        </Select>
    </FormControl>
  </Box>
  )
}
