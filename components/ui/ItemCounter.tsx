import { FC, useState } from "react"
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material"
import { Chip, IconButton, Typography } from "@mui/material"
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';
import { Box } from "@mui/system"
import { Stock } from "../../interfaces";


interface Props{
  currentValue: number;
  // updateQuantity: number;
  maxValue: Stock;
  updateQuantity:(quantity:number)=>void;
}



export const ItemCounter: FC<Props> = ({currentValue,updateQuantity,maxValue}) => {

  // const [updateQuantity, setUpdateQuantity] = useState(currentValue)
  // console.log(updateQuantity)

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

    if(currentValue >= maxValue.inStock) return;

    updateQuantity(currentValue+1)
    
  }

  return (
    <Box display={'flex'} alignItems='center'>
        <IconButton
          disabled={currentValue === 1 ? true : false}
          // onClick={handleDecrement}
          onClick={()=>addOrRemove(-1)}
        >
            <RemoveCircleOutline/>
        </IconButton>
        <Typography sx={{width:40,textAlign:'center'}}>{currentValue}</Typography>
        <IconButton
          disabled={currentValue === maxValue.inStock ? true : false}
          // onClick={handleIncrement}
          onClick={()=>addOrRemove(+1)}
        >
            <AddCircleOutline/>
        </IconButton>
        <Chip 
          sx={{mx:1}}
          label={`Stock: ${maxValue.inStock}`} 
          color="primary"
          variant="outlined"
          icon={<CheckroomOutlinedIcon />}
        />
    </Box>
  )
}
