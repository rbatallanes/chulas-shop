 
import NextLink from 'next/link';
import { AppBar,   Badge,   Box,   Button,   CardMedia,   IconButton,     Link,     Toolbar, Typography } from '@mui/material'
import { SearchOutlined,ShoppingCartOutlined } from '@mui/icons-material'
import { Image } from 'mui-image'

export const Navbar = () => {
  return (
    <AppBar>
        <Toolbar>
              <Image
                      src={`/chulas.png`}
                      width={'65x'}
                      height={'65px'}
                      alt={'nada'}
                    />
                 <NextLink legacyBehavior href={'/'} passHref>
                    <Link display={'flex'} alignItems='center'>
                      <Typography variant='h6'> Chulas Tuc |</Typography>
                      <Typography sx={{ml:0.5}}>Shop</Typography>
                    </Link>
                 </NextLink>

            <Box flex={1}/>

            <Box sx={{display:{xs:'none',sm:'block'}}}>
              
              <NextLink legacyBehavior href={'/category/men'} passHref>
                <Link>
                  <Button>Hombres</Button>
                </Link>
              </NextLink>
              <NextLink legacyBehavior href={'/category/women'} passHref>
                <Link>
                  <Button>Mujeres</Button>
                </Link>
              </NextLink>
              <NextLink legacyBehavior href={'/category/kid'} passHref>
                <Link>
                  <Button>Niños</Button>
                </Link>
              </NextLink>
              
            </Box>

            <Box flex={1}/>

            <IconButton>
              <SearchOutlined/>
            </IconButton>

              <NextLink legacyBehavior href={'/cart'} passHref>
                <Link underline="none">
                  <IconButton>
                    <Badge badgeContent={2} color='secondary'>
                      <ShoppingCartOutlined/>
                    </Badge>
                  </IconButton>
                </Link>
              </NextLink>

            <Button>
              Menú
            </Button>
           
        </Toolbar>
    </AppBar>
  )
}