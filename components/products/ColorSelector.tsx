import React, { FC } from 'react'
import { Article } from '../../interfaces';

import { Box, Fab, IconButton } from '@mui/material';
import { red } from '@mui/material/colors';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';

interface Props{
    articles: Article[];
    selectedColor?: number;
    onSelectedColor: (id:number,artId:number)=> void;
}

export const ColorSelector: FC<Props> = ({articles,selectedColor,onSelectedColor}) => {

    return (
        <Box sx={{my:2}}>
            { articles.map((article,idx)=>(
                <IconButton
                    key={article.id}
                    //className='fadeIn'
                    onClick={()=>onSelectedColor(article.colors.id,idx)}
                >
                    <Fab 
                        size="small" 
                        sx={{
                        backgroundColor: `${article.colors.code}`,
                    }}>
                    {
                        selectedColor === article.colors.id
                        ? <DoneOutlineOutlinedIcon sx={{ color: red[200] }} />
                        : null
                    }
                    </Fab>                       
                </IconButton>  
                ))
            }                   
        </Box>
      )
}