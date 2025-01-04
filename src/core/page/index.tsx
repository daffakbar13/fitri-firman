import Stack from '@mui/material/Stack'
import { NextPage } from 'next'
import React from 'react'

import Address from '@/core/sections/Address'
import Cover from '@/core/sections/Cover'
import Gallery from '@/core/sections/Gallery'
import Gift from '@/core/sections/Gift'
import Profile from '@/core/sections/Profile'
import Surah from '@/core/sections/Surah'
import useGlobalStore from '@/lib/hooks/useGlobalStore'

import CountDown from '../sections/CountDown'
import LoveStory from '../sections/LoveStory'
import Opening from '../sections/Opening'
import Separator1 from '../sections/Separator1'
import Separator2 from '../sections/Separator2'
import Wishes from '../sections/Wishes'
import { useTheme } from '@mui/material'

const Page: NextPage = () => {
  const { isOpenedInvitation, media, setIsFullScreen, setActiveScreen, closeInvitation, setMedia } =
    useGlobalStore()
  const isContentLoaded = [
    media.videos.opening,
    media.videos.cinematic,
    media.audios.backsound,
  ].every((e) => e.includes('blob'))
  const theme = useTheme()

  async function hitFile(file: string) {
    if (file.includes('blob')) {
      return Promise.resolve()
    }
    return fetch(file, {
      cache: 'force-cache',
      next: { revalidate: 60 * 60 },
    })
      .then((res) => res.blob())
      .then((blob) => setMedia(file, URL.createObjectURL(blob)))
  }

  React.useEffect(() => {
    Promise.all(
      [media.videos.opening, media.videos.cinematic, media.audios.backsound].map(hitFile),
    ).then(() => {
      Promise.all(Object.values(media.images).map(hitFile))
    })

    document.onfullscreenchange = () => {
      const isFullScreen = document.fullscreenElement !== null
      setIsFullScreen(isFullScreen)
      setActiveScreen(isFullScreen ? 1 : 0)
      if (!isFullScreen) {
        closeInvitation()
      }
    }
  }, [])

  return (
    <Stack
      id="container"
      component="main"
      position="relative"
      sx={{
        overflowX: 'hidden',
        overflowY: 'scroll',
      }}
    >
      <Stack
        position="fixed"
        top={0}
        left={0}
        alignItems="center"
        height="100vh"
        width="100vw"
        sx={{ pointerEvents: 'none' }}
      >
        <video
          height="100%"
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
          style={{
            maxWidth: theme.breakpoints.values.lg,
            objectFit: 'cover',
          }}
        >
          <source src={media.videos.cinematic} type="video/mp4" />
        </video>
      </Stack>
      {(!isOpenedInvitation || !isContentLoaded) && <Cover />}
      {isOpenedInvitation && isContentLoaded && (
        <>
          <Opening />
          <Surah />
          <Profile />
          <Separator1 />
          <Address />
          <Gallery />
          <Gift />
          <Wishes />
          <LoveStory />
          <Separator2 />
          <CountDown />
          <audio id="backsound" src={media.audios.backsound} autoPlay loop>
            <source src={media.audios.backsound} type="audio/mp3" />
          </audio>
        </>
      )}
    </Stack>
  )
}

export default Page
