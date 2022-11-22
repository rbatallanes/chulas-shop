 
import NextLink from 'next/link';
import { AppBar,   Badge,   Box,   Button,   CardMedia,   IconButton,     Link,     Toolbar, Typography } from '@mui/material'
import { SearchOutlined,ShoppingCartOutlined } from '@mui/icons-material'
import { Image } from 'mui-image'
import { useRouter } from 'next/router';
import { color } from '@mui/system';
import { useContext } from 'react';
import { UiContext } from '../../context';

export const Navbar = () => {

  const {asPath} = useRouter()
  const {toggleSideMenu} = useContext(UiContext)
  
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
              
              <NextLink legacyBehavior href={'/category/camisas'} passHref>
                <Link>
                  <Button color={asPath==='/category/camisas' ? 'primary':'info'} >Camisas</Button>
                </Link>
              </NextLink>
              <NextLink legacyBehavior href={'/category/blusas'} passHref>
                <Link>
                  <Button color={asPath==='/category/blusas' ? 'primary':'info'}>Blusas</Button>
                </Link>
              </NextLink>
              <NextLink legacyBehavior href={'/category/sastreria'} passHref>
                <Link>
                  <Button color={asPath==='/category/sastreria' ? 'primary':'info'}>Sastrería</Button>
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

            <Button onClick={toggleSideMenu}>
              Menú
            </Button>
           
        </Toolbar>
    </AppBar>
  )
}