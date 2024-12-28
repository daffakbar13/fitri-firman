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

const Page: NextPage = () => {
  const { isOpenedInvitation, media, setIsFullScreen, setActiveScreen, closeInvitation, setMedia } =
    useGlobalStore()
  const isContentLoaded = [media.videos.opening, media.audios.backsound].every((e) =>
    e.includes('blob'),
  )

  async function hitFile(file: string) {
    if (file.includes('blob')) {
      return Promise.resolve()
    }
    return fetch(file, {
      cache: 'no-cache',
      // cache: 'force-cache',
      // next: { revalidate: 60 * 60 * 24 * 30 * 12 },
    })
      .then((res) => res.blob())
      .then((blob) => setMedia(file, URL.createObjectURL(blob)))
  }

  React.useEffect(() => {
    Promise.all([media.videos.opening, media.audios.backsound].map(hitFile)).then(() => {
      Promise.all([
        Promise.all(Object.values(media.audios).map(hitFile)),
        Promise.all(Object.values(media.images).map(hitFile)),
        Promise.all(Object.values(media.videos).map(hitFile)),
      ])
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
      sx={{
        backgroundImage: `url(${media.images.bg2})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        overflowX: 'hidden',
        overflowY: 'scroll',
      }}
    >
      <video
        height="100vh"
        preload="auto"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100%',
          pointerEvents: 'none',
        }}
      >
        <source src={media.videos.cinematic} type="video/mp4" />
      </video>
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
