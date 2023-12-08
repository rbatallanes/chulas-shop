import React, { FC } from 'react'
import { Article } from '../../interfaces';

import { Box, Fab, IconButton } from '@mui/material';
import { red } from '@mui/material/colors';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';

interface Props{
    articles: Article[];
    selectedColor?: number;
    onSelectedColor: (articles: Article,artId:number)=> void;
}

export const ColorSelector: FC<Props> = ({articles,selectedColor,onSelectedColor}) => {

    return (
        <Box >
            { articles.map((article,idx)=>(
                <React.Fragment key={idx}>
                    {/* <h3>{article.id}</h3> */}
                    <IconButton
                        key={idx}
                        //className='fadeIn'
                        onClick={()=>{
                            onSelectedColor(article,idx),
                            console.log(article);
                        }}
                    >
                        <Fab 
                            size="small" 
                            sx={{
                            backgroundColor: `${article.colors.code}`,
                        }}>
                        {
                            selectedColor === article.colors.id
                            ? (<DoneOutlineOutlinedIcon sx={{ color: red[200] }} />)
                            : null
                        }
                        </Fab>                       
                    </IconButton>  
                
                </React.Fragment>
                ))
            }                   
        </Box>
      )
}