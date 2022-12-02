import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import { Article, ISize, Size } from "../../interfaces";

interface Props{
    // selectedSize?: ISize;
    // sizes: ISize[];
    // selectedSize?: Size;
    // sizes: Size;

    articles: Article[];
}

export const SizeSelector: FC<Props> = ({articles}) => {

  return (
    <Box>
        {
            articles.map(article=>(

                    article.articlesSizes.map(articleSize=>(
                        
                            <Button
                                key={articleSize.sizes.id}
                                size="small"
                                //color={selectedSize === size ? 'info':'secondary'}
                            >
                            {articleSize.sizes.name}
                            </Button>
                        
                    ))

            ))
        }


        {/* {sizes.map(size=>(
            <Button
                key={size.id}
                size="small"
                color={selectedSize === size ? 'info':'secondary'}
            >
            {size.name}
            </Button>
        ))} */}

        {/* <Button
                key={sizes.id}
                size="small"
                color={selectedSize === sizes ? 'info':'secondary'}
            >
            {sizes.name}
        </Button> */}
    </Box>
  )
}
