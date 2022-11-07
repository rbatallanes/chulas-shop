import NextLink from 'next/link';
import { Box, Grid, Typography, TextField, Button, Link } from '@mui/material'
import React from 'react'
import { AuthLayout } from '../../components/layouts'

const RegisterPage = () => {
  return (
    <AuthLayout title={'Registro de Usuario'} >
        <Box sx={{width:350,padding:'10px 20px'}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h1' component={'h1'}> Registro de Usuario</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField label='Nombre' variant='filled' fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <TextField label='Correo' variant='filled' fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <TextField label='Clave' type='password' variant='filled' fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <Button color='info' className='circular-btn' size='large' fullWidth>
                        Registrar
                    </Button>
                </Grid>
                <Grid item xs={12} display='flex' justifyContent={'end'}>
                    <NextLink legacyBehavior href={"/auth/login"} passHref>
                        <Link underline="always">
                            ¿Ya tienes Cuenta?
                        </Link>
                    </NextLink>
                </Grid>
            </Grid>
        </Box>
    </AuthLayout>
  )
}

export default RegisterPage