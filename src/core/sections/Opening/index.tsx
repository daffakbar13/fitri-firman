import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded'
import PauseCircleFilledRoundedIcon from '@mui/icons-material/PauseCircleFilledRounded'
import PlayCircleRounded from '@mui/icons-material/PlayCircleRounded'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import React from 'react'

import fonts from '@/assets/fonts'
import Section from '@/lib/components/Section'
import useGlobalStore from '@/lib/hooks/useGlobalStore'

const Opening: NextPage = () => {
  const { media } = useGlobalStore()
  const [isPaused, setIsPaused] = React.useState(false)
  const CdIcon = isPaused ? PlayCircleRounded : PauseCircleFilledRoundedIcon

  return (
    <Section>
      <motion.div
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 5 }}
      >
        <Stack justifyContent="center" alignItems="center" height="inherit" gap={2}>
          <Typography className={fonts.crimson.className} fontSize={18}>
            THE WEDDING OF
          </Typography>
          <Stack>
            <Typography color="secondary" className={fonts.gilda.className} fontSize={35}>
              FITRI
            </Typography>
            <Typography color="secondary" className={fonts.monthGlade.className} fontSize={40}>
              and
            </Typography>
            <Typography color="secondary" className={fonts.gilda.className} fontSize={35}>
              FIRMAN
            </Typography>
          </Stack>
          <Typography className={fonts.crimson.className} fontSize={18}>
            14 . 01 . 2025
          </Typography>
          <motion.div
            style={{
              width: 'max-content',
              borderRadius: 16,
              border: '1px solid white',
              padding: '16px 4px',
              height: 60,
              overflow: 'hidden',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 10 }}
          >
            <motion.div
              initial={{ marginTop: 0 }}
              animate={{ marginTop: 8 }}
              transition={{ duration: 1.2, delay: 10, repeat: Infinity, repeatType: 'mirror' }}
            >
              <ArrowDownwardRoundedIcon sx={{ color: 'white' }} />
            </motion.div>
          </motion.div>
        </Stack>
      </motion.div>
      <video
        id="opening-video"
        preload="auto"
        autoPlay
        playsInline
        muted
        style={{ height: '100vh', width: '100vw', objectFit: 'cover', pointerEvents: 'none' }}
      >
        <source src={media.videos.opening} type="video/mp4" />
      </video>
      <Stack
        justifyContent="center"
        alignItems="center"
        position="fixed"
        bottom={24}
        right={24}
        padding={1}
        borderRadius={4}
        zIndex={999}
        bgcolor="primary.main"
        boxShadow={(e) => e.shadows[24]}
      >
        <motion.div
          style={{ width: 20, height: 20 }}
          animate={{ ...(!isPaused && { transform: 'rotate(360deg)' }) }}
          transition={{ duration: isPaused ? 0 : 3, repeat: Infinity, ease: 'linear' }}
        >
          <CdIcon
            sx={{ color: 'white' }}
            onClick={() => {
              const audio = document.querySelector('audio')
              if (audio) {
                if (audio.paused) {
                  audio.play()
                  setIsPaused(false)
                } else {
                  audio.pause()
                  setIsPaused(true)
                }
              }
            }}
          />
        </motion.div>
      </Stack>
    </Section>
  )
}

export default Opening
