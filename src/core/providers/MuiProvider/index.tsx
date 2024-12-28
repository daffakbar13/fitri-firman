import dynamic from 'next/dynamic'
import React from 'react'

import theme from '@/lib/styles/theme'

import MuiProviderProps from './types'

const CssBaseline = dynamic(() => import('@mui/material/CssBaseline/CssBaseline'))
const ThemeProvider = dynamic(() => import('@mui/material/styles/ThemeProvider'))

const MuiProvider: React.FC<MuiProviderProps> = (props) => {
  const { children } = props

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default MuiProvider
