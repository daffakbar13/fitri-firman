/* eslint-disable no-unused-vars */

import { NextComponentType, NextPage } from 'next'
import { StaticImageData } from 'next/image'

interface Media {
  videos: {
    cinematic: string
    opening: string
  }
  audios: {
    backsound: string
  }
  images: {
    bb: string
    bg1: string
    bg2: string
    bg3: string
    bg4: string
    bg5: string
    bgBank: string
    bca: string
    chipAtm: string
    dana: string
    forest1: string
    forest3: string
    forest6: string
    gallery1: string
    gallery2: string
    gallery3: string
    gallery4: string
    gallery5: string
    gallery6: string
    gallery7: string
    gallery8: string
    gallery9: string
    gallery10: string
    gallery11: string
    gallery12: string
    gallery13: string
    gallery14: string
    gallery15: string
    gallery16: string
    gallery17: string
    gallery18: string
    gallery19: string
    gallery20: string
    gallery21: string
    gallery22: string
    gallery23: string
    gallery24: string
    gallery25: string
    moon: string
    patren: string
    profileFitri: string
    profileFirman: string
    separatorLine: string
  }
}

interface States {
  isContentLoaded: boolean
  isOpenedInvitation: boolean
  isFullScreen: boolean
  Screens: { title: string; Component: NextPage; Icon: NextComponentType }[]
  activeScreen: number
  touchStartClientY: number
  previewGallery: null | string
  videoOpeningUrl: string
  media: Media
}

interface Mutations {
  setContentLoaded(isContentLoaded: boolean): void
  openInvitation(): void
  closeInvitation(): void
  setVideoOpeningUrl(url: string): void
  setIsFullScreen(isFullScreen: boolean): void
  setActiveScreen(activeScreen: number): void
  onChangeActiveScreen(toNext: boolean): void
  onWheel(e: React.WheelEvent<HTMLDivElement>): void
  onTouchStart(e: React.TouchEvent<HTMLDivElement>): void
  onTouchEnd(e: React.TouchEvent<HTMLDivElement>): void
  openPreviewGallery(img: string): () => void
  closePreviewGallery(): void
  setMedia(file: string, url: string): void
}

export default interface UseGlobalStore extends States, Mutations {}
