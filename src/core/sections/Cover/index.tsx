import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded'
import { CircularProgress } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import { useParams, useSearchParams } from 'next/navigation'
import React from 'react'

import fonts from '@/assets/fonts'
import Section from '@/lib/components/Section'
import useGlobalStore from '@/lib/hooks/useGlobalStore'
import GuestsService from '@/lib/services/guests/guests.service'

const Cover: NextPage = () => {
  const { isContentLoaded, isOpenedInvitation, media, setActiveScreen } = useGlobalStore()
  const { id } = useParams()
  const params = useSearchParams()
  const to = params.get('to')
  const detail = GuestsService.GetGuestDetail.useQuery(id as string)

  function onOpenInvitation() {
    if (document.body.requestFullscreen) {
      document.body
        .requestFullscreen()
        .catch(console.error)
        .finally(() => setActiveScreen(1))
    } else {
      setActiveScreen(1)
    }
  }

  return (
    <Section
      gap={2}
      flex={1}
      sx={{
        backgroundImage: `url(${media.images.bg1})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
      }}
    >
      <motion.div
        style={{ zIndex: 2 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Stack justifyContent="center" alignItems="center" height="inherit" gap={2}>
          <Typography className={fonts.crimson.className} fontSize={18}>
            THE WEDDING OF
          </Typography>
          <Stack>
            <Typography color="primary" className={fonts.crimson.className} fontSize={40}>
              Fitri
              <br /> & <br />
              Firman
            </Typography>
          </Stack>
          <Typography className={fonts.montserrat.className} fontSize={15} fontWeight="bold">
            Dear,
            <br />
            {to || 'Guest Name'}
          </Typography>
          <Button onClick={onOpenInvitation}>
            Open Invitation &nbsp;
            {!isContentLoaded && isOpenedInvitation && (
              <CircularProgress size={12} color="warning" />
            )}
          </Button>
        </Stack>
      </motion.div>
    </Section>
  )
}

export default Cover
