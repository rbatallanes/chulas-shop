
import { Box,FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";

import { FC, useState } from "react";
import { Article, ISize, Size } from "../../interfaces";

interface Props{
    // selectedSize?: ISize;
    // sizes: ISize[];
    // selectedSize?: Size;
    // sizes: Size;

    articles: Article[];
    onSelectedSize: (size: Size)=> void;
}

export const SizeSelector: FC<Props> = ({articles,onSelectedSize}) => {

    const [size, setSize] = useState('');

  return (
    // <Box>
    //     {
    //         articles.map(article=>(

    //                 article.articlesSizes.map(articleSize=>(
                        
    //                         <Button
    //                             key={articleSize.sizes.id}
    //                             size="small"
    //                             //color={selectedSize === size ? 'info':'secondary'}
    //                         >
    //                         {articleSize.sizes.name}
    //                         </Button>
                        
    //                 ))

    //         ))
    //     }
    // </Box>

    <Box sx={{ minWidth: 120 }}>
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Talle</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            //value={articleSize.sizes.id}
            label="Size"
            
        >
        {
            articles.map(article=>(
                
                article.articlesSizes.map(articleSize=>(
                        <>
                                <MenuItem
                                    key={articleSize.sizes.id}
                                    value={articleSize.sizes.id}
                                    //size="small"
                                    //color={selectedSize === size ? 'info':'secondary'}
                                    onChange={(e)=>onSelectedSize(articleSize.sizes)}
                                >
                                {articleSize.sizes.name}
                                </MenuItem>
                            
                        </>
                    ))
                    
                    ))
                }
        </Select>
    </FormControl>
  </Box>
  )
}
