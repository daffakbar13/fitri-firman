import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import dayjs from 'dayjs'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import React from 'react'

import fonts from '@/assets/fonts'
import Section from '@/lib/components/Section'

const getDiff = () => {
  const now = dayjs()
  const resepsi = dayjs('2024-06-12 08:00:00')

  return {
    hari: resepsi.diff(now, 'd'),
    jam: resepsi.diff(now, 'h') % 24,
    menit: resepsi.diff(now, 'm') % 60,
    detik: resepsi.diff(now, 's') % 60,
  }
}

const Cinematic: NextPage = () => {
  const [date, setDate] = React.useState(getDiff())

  React.useEffect(() => {
    const interval = setInterval(() => {
      const diff = getDiff()

      Object.entries(diff).forEach(([key, value]) => {
        if (value < 0) {
          diff[key as keyof typeof diff] = 0
        }
      })

      setDate(diff)
    }, 1000)

    const videos = document.getElementsByTagName('video')

    // eslint-disable-next-line no-plusplus
    for (let i = 1; i < videos.length; i++) {
      const vid = videos[i]
      vid.addEventListener('ended', () => vid.play(), true)
    }

    return () => clearInterval(interval)
  }, [])

  return (
    <Section>
      <Stack
        position="absolute"
        top={0}
        bottom={0}
        left={0}
        right={0}
        width="100%"
        justifyContent="center"
        alignItems="center"
        gap={1}
        zIndex={2}
        sx={{ aspectRatio: '16/9' }}
      >
        <motion.div
          initial={{ translateY: -50 }}
          whileInView={{ translateY: 0 }}
          transition={{ duration: 1.2 }}
        >
          <Box className={fonts.strawberryCupcakes.className} color="#D5AF6F" fontSize={35}>
            Save The Date
          </Box>
        </motion.div>
        <Box display="flex" gap={4} color="white">
          {Object.entries(date).map(([key, value], i) => (
            <Stack key={i}>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
              >
                <Typography className={fonts.analogue.className} fontSize={24}>
                  {value}
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
              >
                <Typography className={fonts.bodebeck.className} textTransform="capitalize">
                  {key}
                </Typography>
              </motion.div>
            </Stack>
          ))}
        </Box>
      </Stack>
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        zIndex={1}
        sx={{ aspectRatio: '16/9', backgroundColor: '#152648', opacity: 0.5 }}
      />
      <video width="100%" preload="auto" autoPlay loop muted playsInline>
        <source src="/videos/cinematic.mp4" type="video/mp4" />
      </video>
    </Section>
  )
}

export default Cinematic
