import NextLink from "next/link";
import { Box, Button, Chip, Grid, Link, TextField, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { AuthLayout } from '../../components/layouts'
import { useForm } from "react-hook-form";
import { shopApi } from "../../api";
import axios from "axios";
import { ErrorOutline } from "@mui/icons-material";
import useSWR from "swr";
import Cookies from "js-cookie";
import { AuthContext } from "../../context";
import { useRouter } from "next/router";

type FormData ={
    email: string,
    password: string
}

const LoginPage = () => {

    const router = useRouter()
    const {loginUser} = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

    const [showError, setShowError] =   useState(false)
    
    const onLoginUser = async({email, password}: FormData) => {

        
        setShowError(false)

        const isValidLogin = await loginUser(email, password)

        if(!isValidLogin){
            setShowError(true)
            setTimeout(() => {
                setShowError(false)
            }, 3000);
            return
        }

        // Todo: navegar a la proxima pagina
        router.replace('/')
        
    }

  return (
    <AuthLayout title={'Inicio de sesión'} >
        <form onSubmit={handleSubmit(onLoginUser)} noValidate>

            <Box sx={{width:350,padding:'10px 20px'}}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant='h1' component={'h1'}> Iniciar Sesión</Typography>
                        <Chip 
                            label="No se reconoce este usuario/contraseña" 
                            color='error' 
                            icon={<ErrorOutline />} 
                            className='fadeIn'
                            sx={{display: showError ? 'flex' : 'none'}}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            label='email' 
                            type="email"
                            variant='filled' 
                            fullWidth
                            {...register('email',{ required: 'Este campo es requerido' })}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            label='Clave' 
                            type='password' 
                            variant='filled' 
                            fullWidth
                            {...register('password',{  
                                required: 'Este campo es requerido',
                                minLength: { value: 5, message: 'Minimo 5 caracteres' } 
                            })}
                            error={!!errors.password}
                            helperText={errors.password?.message}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type='submit' color='info' className='circular-btn' size='large' fullWidth>
                            Ingresar
                        </Button>
                    </Grid>
                    <Grid item xs={12} display='flex' justifyContent={'end'}>
                        <NextLink legacyBehavior href={"/auth/register"} passHref>
                            <Link underline="always">
                                ¿No tienes Cuenta?
                            </Link>
                        </NextLink>
                    </Grid>
                </Grid>
            </Box>
        </form>

    </AuthLayout>
  )
}

export default LoginPage