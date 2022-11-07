import React from 'react'
import NextLink from 'next/link';
import { Typography, Grid, Card, CardContent, Divider, Box, Button, Link, Chip } from '@mui/material'
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material';
import { CartList, OrderSummary } from '../../components/cart'
import { ShopLayout } from '../../components/layouts'

const OrderPage = () => {
  return (
    <ShopLayout title={'Resumen de la orden abc123'} pageDescription={'Resumen de la orden'}>
        <Typography variant='h1' component={'h1'}>Orden abc123</Typography>

        {/* <Chip
            sx={{my:2}}
            label= 'Pendiente de pago'
            variant='outlined'
            color='error'
            icon={<CreditCardOffOutlined/>}
        /> */}
        <Chip
            sx={{my:2}}
            label= 'Orden ya fue pagada'
            variant='outlined'
            color='success'
            icon={<CreditScoreOutlined/>}
        />

        <Grid container>
            <Grid item xs={12} sm={7}>
                <CartList/>
            </Grid>
            <Grid item xs={12} sm={5}>
                <Card>
                    <CardContent>
                        <Typography variant='h2'>Resumen (3 Productos)</Typography>
                        <Divider sx={{my:1}}/>

                        <Box display={'flex'} justifyContent='space-between'>
                            <Typography variant='subtitle1'>Dirección de Entrega</Typography>
                            <NextLink legacyBehavior href={'/checkout/address'} passHref>
                                <Link underline='always'>
                                    Editar
                                </Link>
                            </NextLink>
                        </Box>

                        <Typography>Nati Puertas</Typography>
                        <Typography>134 en Tafí Viejo</Typography>
                        <Typography>Tucumán</Typography>
                        <Typography>+54 381123456</Typography>

                        <Divider sx={{my:1}}/>

                        <Box display={'flex'} justifyContent='end'>
                            <NextLink legacyBehavior href={'/cart'} passHref>
                                <Link underline='always'>
                                    Editar
                                </Link>
                            </NextLink>
                        </Box>

                        <OrderSummary/>

                        <Box sx={{mt:3}}>
                            <h1>
                               Pagada
                            </h1>
                            <Chip
                                sx={{my:2}}
                                label= 'Orden ya fue pagada'
                                variant='outlined'
                                color='success'
                                icon={<CreditScoreOutlined/>}
                            />
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default OrderPage