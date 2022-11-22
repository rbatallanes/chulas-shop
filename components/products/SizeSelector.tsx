import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import { ISize, Size } from "../../interfaces";

interface Props{
    // selectedSize?: ISize;
    // sizes: ISize[];
    selectedSize?: Size;
    sizes: Size;
}

export const SizeSelector: FC<Props> = ({selectedSize,sizes}) => {

  console.log(sizes);
  
  return (
    <Box>
        {/* {sizes.map(size=>(
            <Button
                key={size.id}
                size="small"
                color={selectedSize === size ? 'info':'secondary'}
            >
            {size.name}
            </Button>
        ))} */}
        <Button
                key={sizes.id}
                size="small"
                color={selectedSize === sizes ? 'info':'secondary'}
            >
            {sizes.name}
        </Button>
    </Box>
  )
}
