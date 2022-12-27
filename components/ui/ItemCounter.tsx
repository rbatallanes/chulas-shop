import { FC, useState } from "react"
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material"
import { Chip, IconButton, Typography } from "@mui/material"
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';
import { Box } from "@mui/system"
import { Stock } from "../../interfaces";


interface Props{
  currentValue: number;
  // updateQuantity: number;
  //stock?: Stock;
  inStock: number;
  updateQuantity:(quantity:number)=>void;
  isSize: boolean;
}



export const ItemCounter: FC<Props> = ({currentValue,updateQuantity,inStock,isSize}) => {

  // const [updateQuantity, setUpdateQuantity] = useState(currentValue)
  
  //const [inStock, setInStock] = useState(maxValue?.inStock) //!!maxValue && maxValue.inStock

  // const handleDecrement=()=>{
  //   (updateQuantity-1) > 0
  //     ? setUpdateQuantity(updateQuantity-1)
  //     : console.log('Valor cero')
  // }

  const addOrRemove=(val: number)=>{
    if(val === -1){
      if(currentValue === 1) return;
      return updateQuantity(currentValue-1)
    }

    if(currentValue >= inStock) return; // inStock = false

    updateQuantity(currentValue+1)
    
  }

  return (
    <Box display={'flex'} alignItems='center'>
        <IconButton
          disabled={(currentValue === 1 && isSize) ? true : false}
          // onClick={handleDecrement}
          onClick={()=>addOrRemove(-1)}
        >
            <RemoveCircleOutline/>
        </IconButton>
        <Typography sx={{width:40,textAlign:'center'}}>{currentValue}</Typography>
        <IconButton
          disabled={(currentValue === inStock && isSize) ? true : false}
          // onClick={handleIncrement}
          onClick={()=>addOrRemove(+1)}
        >
            <AddCircleOutline/>
        </IconButton>
        {(inStock>0 && isSize) &&
          <Chip 
            sx={{mx:1}}
            label={`Stock: ${inStock}`} 
            color="primary"
            variant="outlined"
            icon={<CheckroomOutlinedIcon />}
          />
        }
    </Box>
  )
}
