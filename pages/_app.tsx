import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import {  CssBaseline, ThemeProvider } from '@mui/material'
import { SWRConfig } from 'swr'

import { lightTheme } from '../themes'
import { AuthProvider, CartProvider, UiProvider } from '../context'

export default function App({ Component, pageProps }: AppProps) {

  const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }

  return (
    <SWRConfig 
      value={{
        // refreshInterval: 3000,  intervalo de loading en página
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}
    >
      <AuthProvider>
        <CartProvider>
          <UiProvider>
            <ThemeProvider theme={lightTheme} >
              <CssBaseline/>
              <Component {...pageProps}/>
            </ThemeProvider>
          </UiProvider>
        </CartProvider>
      </AuthProvider>
    </SWRConfig>
    )
}
