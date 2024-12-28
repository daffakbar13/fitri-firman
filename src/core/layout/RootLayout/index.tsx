'use client'

import dynamic from 'next/dynamic'
import React from 'react'

import RootLayoutProps from './types'

const ReactQueryProvider = dynamic(() => import('@/core/providers/ReactQueryProvider'))
const MuiProvider = dynamic(() => import('@/core/providers/MuiProvider'))
const MainLayout = dynamic(() => import('../MainLayout'))

const RootLayout: React.FC<RootLayoutProps> = (props) => {
  const { children } = props
  return (
    <html lang={'id'}>
      <body>
        <ReactQueryProvider>
          <MuiProvider>
            <MainLayout>{children}</MainLayout>
          </MuiProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}

export default RootLayout
