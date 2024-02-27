import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import App from 'next/app'

import { PersistGate } from 'redux-persist/integration/react'

import { Provider } from 'react-redux'
import { persistor, store } from '@/app/redux/store'

import { CssBaseline } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

const MyApp = ({Component,pageProps}) => {
  const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }
  return (
    <>
    <Provider store={store}>
    < Component {...pageProps}/>
        
    <PersistGate loading={null} persistor={persistor}>
      <CssBaseline/>
   
    </PersistGate>
  </Provider>
    </>
  )
}

export default MyApp

