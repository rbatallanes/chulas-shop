import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {  CssBaseline, ThemeProvider } from '@mui/material'
import { lightTheme } from '../themes'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {

  const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }

  return (
      <ThemeProvider theme={lightTheme} >
        <CssBaseline/>
        <Component {...pageProps}/>
      </ThemeProvider>
    )
}
