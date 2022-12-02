import React, { FC } from 'react'
import { Article } from '../../interfaces';

import { Box, Button } from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface Props{
    articles: Article[];
}

export const ColorSelector: FC<Props> = ({articles}) => {
    return (
        <Box sx={{my:2}}>
            
                    <>
                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">Colores</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                //defaultValue="female"
                                name="row-radio-buttons-group"
                            >
                                { articles.map(article=>(
                                    <>
                                    <FormControlLabel value={article.colors.id} control={<Radio />} label={article.colors.name} />
                                    </>
                                    
                                    ))
                                }
                            </RadioGroup>
                        </FormControl>
                    </>
                   
                
            
        </Box>
      )
}
