/* eslint-disable no-underscore-dangle */
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { NextPage } from 'next'
import React from 'react'

import Section from '@/lib/components/Section'

import TabPelihat from './tabs/pelihat'
import TabTamu from './tabs/tamu'
import TabUcapan from './tabs/ucapan'

const PageRahasia: NextPage = () => {
  const [tab, setTab] = React.useState('tamu')
  const isTabTamu = tab === 'tamu'
  const isTabPelihat = tab === 'pelihat'
  const isTabUcapan = tab === 'ucapan'

  return (
    <Section justifyContent="start" alignItems="unset" gap={2} padding={2} overflow="scroll">
      <Box display="flex" gap={1}>
        <Button {...(!isTabTamu && { variant: 'outlined' })} onClick={() => setTab('tamu')}>
          Tamu
        </Button>
        <Button {...(!isTabPelihat && { variant: 'outlined' })} onClick={() => setTab('pelihat')}>
          Pelihat
        </Button>
        <Button {...(!isTabUcapan && { variant: 'outlined' })} onClick={() => setTab('ucapan')}>
          Ucapan
        </Button>
      </Box>
      {isTabTamu && <TabTamu />}
      {isTabPelihat && <TabPelihat />}
      {isTabUcapan && <TabUcapan />}
    </Section>
  )
}

export default PageRahasia
