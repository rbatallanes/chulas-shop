import React, { FC } from 'react'
import { Article } from '../../interfaces';

import { Box, Button, Fab, IconButton, Input } from '@mui/material';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';
import AddIcon from '@mui/icons-material/Add';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { red } from '@mui/material/colors';

interface Props{
    articles: Article[];
}

export const ColorSelector: FC<Props> = ({articles}) => {

    const onSelectedColor = (id:number) => {
        //setSize(event.target.value as string);
        console.log(id);
      };

    return (
        <Box sx={{my:2}}>

                 
            
                    <>
                        
                    
                        {/* <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">Colores</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                //defaultValue="female"
                                name="row-radio-buttons-group"
                            > */}
                                { articles.map(article=>(
                                    <>
                                        <IconButton
                                            //className='fadeIn'
                                            onClick={()=>onSelectedColor(article.colors.id)}
                                            >
                                            <Fab 
                                                size="small" 
                                                sx={{
                                                    backgroundColor: `${article.colors.code}`,
                                                }}>
                                                {/* <DoneOutlineOutlinedIcon sx={{ color: red[200] }} /> */}
                                            </Fab>                       

                                        </IconButton>  


                                        
                                                            
                                        {/* <Button
                                            className='circular-btn'
                                            size='small'
                                            sx={{
                                                backgroundColor: `${article.colors.code}`,
                                                // fontSize: 35,
                                                borderRadius: 28,
                                            }}
                                        >
                                            {'|'} 
                                        </Button> */}

                                        {/* <FormControlLabel value={article.colors.id} 
                                        control={<Radio 
                                                   color={ 'error'} 
                                                   
                                                    sx={{
                                                       //backgroundColor: `${article.colors.code}`,
                                                        //backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
                                                        //background:pink[100],
                                                        '& .MuiSvgIcon-root': {
                                                        fontSize: 45,
                                                        },
                                                        // color: #6aa9d6[100],
                                                        // '&.Mui-checked': {
                                                        //     color: #0d0d0d[300],
                                                        // },
                                                    }}
                                                />} 
                                            label=''//{article.colors.name} 
                                        /> */}
                                    </>
                                    
                                    ))
                                }
                            {/* </RadioGroup>
                        </FormControl> */}
                    </>
                   
                
            
        </Box>
      )
}
