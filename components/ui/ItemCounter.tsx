import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { FC, useState } from "react"
import { Stock } from "../../interfaces";


interface Props{
  currentValue: number;
  // updateQuantity: number;
  maxValue: Stock;
}



export const ItemCounter: FC<Props> = ({currentValue,maxValue}) => {

  const [updateQuantity, setUpdateQuantity] = useState(currentValue)
  console.log(updateQuantity)

  const handleDecrement=()=>{
    (updateQuantity-1) > 0
      ? setUpdateQuantity(updateQuantity-1)
      : console.log('Valor cero')
  }

  const handleIncrement=()=>{
    updateQuantity+1 <= maxValue.inStock 
      ? setUpdateQuantity(updateQuantity+1)
      : console.log('Valor mayor')
  }

  return (
    <Box display={'flex'} alignItems='center'>
        <IconButton
          disabled={updateQuantity === 1 ? true : false}
          onClick={handleDecrement}
        >
            <RemoveCircleOutline/>
        </IconButton>
        <Typography sx={{width:40,textAlign:'center'}}>{updateQuantity}</Typography>
        <IconButton
          disabled={updateQuantity === maxValue.inStock ? true : false}
          onClick={handleIncrement}
        >
            <AddCircleOutline/>
        </IconButton>
    </Box>
  )
}
