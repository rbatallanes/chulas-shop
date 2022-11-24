 
import NextLink from 'next/link';
import { AppBar,   Badge,   Box,   Button,   CardMedia,   IconButton,     Input,     InputAdornment,     Link,     Toolbar, Typography } from '@mui/material'
import { ClearOutlined, SearchOutlined,ShoppingCartOutlined } from '@mui/icons-material'
import { Image } from 'mui-image'
import { useRouter } from 'next/router';
import { color } from '@mui/system';
import { useContext, useState } from 'react';
import { UiContext } from '../../context';

export const Navbar = () => {

  const {asPath,push} = useRouter()
  const {toggleSideMenu} = useContext(UiContext)
  const [isVisibleSearch, setIsVisibleSearch] = useState(false)

  const [searchTerm, setSearchTerm] = useState('')

    const onSearchTerm =()=>{
        if(searchTerm.trim().length === 0) return;
        push(`/search/${searchTerm}`)
    }

  
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

            <Box sx={{display: isVisibleSearch ? 'none' :{xs:'none',sm:'block'}}} className='fadeIn'>
              
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


            {
              isVisibleSearch
                ? (<>
                    <Input
                        sx={{display: {xs:'none',sm:'flex'}}}
                        autoFocus
                        value= {searchTerm}
                        onChange={(e)=>setSearchTerm(e.target.value)}
                        onKeyUp={(e)=> e.key === 'Enter'?onSearchTerm():null}
                        type='text'
                        placeholder="Buscar..."
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={()=>setIsVisibleSearch(false)}
                                >
                                 <ClearOutlined />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                  </>)
                : (
                  <>
                    <IconButton
                      sx={{display: {xs:'none',sm:'flex'}}}
                      className='fadeIn'
                      onClick={()=>setIsVisibleSearch(true)}
                    >
                      <SearchOutlined/>
                    </IconButton>
                  </>
                )

            }
            

            <IconButton
              sx={{display:{xs:'flex',sm:'none'}}}
              onClick={toggleSideMenu}
            >
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