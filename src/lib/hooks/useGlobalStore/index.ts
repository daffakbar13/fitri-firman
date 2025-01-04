/* eslint-disable no-underscore-dangle */
import { create } from 'zustand'

import UseGlobalStore from './types'

const useGlobalStore = create<UseGlobalStore>((set, get) => ({
  isContentLoaded: false,
  isOpenedInvitation: false,
  isFullScreen: false,
  Screens: [],
  activeScreen: 0,
  touchStartClientY: 0,
  previewGallery: null,
  videoOpeningUrl: '',
  media: {
    videos: {
      cinematic: '/videos/cinematic.mp4',
      opening: '/videos/opening-fitri-firman.mp4',
    },
    audios: {
      backsound: '/audios/backsound.mp3',
    },
    images: {
      bg1: '/images/background-1.jpg',
      bg2: '/images/background-2.jpg',
      bg3: '/images/background-3.webp',
      bg4: '/images/background-4.webp',
      bg5: '/images/background-5.webp',
      bg6: '/images/background-6.webp',
      bgBank: '/images/bg-bank.webp',
      bca: '/images/bca.png',
      bri: '/images/bri.svg',
      chipAtm: '/images/chip-atm.png',
      dana: '/images/dana.png',
      gallery1: '/images/gallery-1.jpg',
      gallery2: '/images/gallery-2.jpg',
      gallery3: '/images/gallery-3.jpg',
      gallery4: '/images/gallery-4.jpg',
      gallery5: '/images/gallery-5.jpg',
      gallery6: '/images/gallery-6.jpg',
      gallery7: '/images/gallery-7.jpg',
      gallery8: '/images/gallery-8.jpg',
      gallery9: '/images/gallery-9.jpg',
      gallery10: '/images/gallery-10.jpg',
      gallery11: '/images/gallery-11.jpg',
      gallery12: '/images/gallery-12.jpg',
      gallery13: '/images/gallery-13.jpg',
      gallery14: '/images/gallery-14.jpg',
      gallery15: '/images/gallery-15.jpg',
      gallery16: '/images/gallery-16.jpg',
      gallery17: '/images/gallery-17.jpg',
      gallery18: '/images/gallery-18.jpg',
      gallery19: '/images/gallery-19.jpg',
      gallery20: '/images/gallery-20.jpg',
      gallery21: '/images/gallery-21.jpg',
      gallery22: '/images/gallery-22.jpg',
      moon: '/images/moon.webp',
      patren: '/images/patren.webp',
      separatorLine: '/images/separator-line.png',
    },
  },
  setContentLoaded(isContentLoaded) {
    set({ isContentLoaded })
  },
  openInvitation() {
    set({ isOpenedInvitation: true })
  },
  closeInvitation() {
    set({ isOpenedInvitation: false })
  },
  setVideoOpeningUrl(videoOpeningUrl) {
    set({ videoOpeningUrl })
  },
  setIsFullScreen(isFullScreen) {
    set({ isFullScreen })
  },
  setActiveScreen(activeScreen) {
    get().openInvitation()
    set({ activeScreen, isOpenedInvitation: true })
  },
  onChangeActiveScreen(toNext) {
    const { isOpenedInvitation, activeScreen, Screens } = get()
    if (isOpenedInvitation) {
      const isAllowToNext = toNext && activeScreen < Screens.length - 1
      const isAllowToBefore = !toNext && activeScreen > 0

      if (isAllowToNext) {
        set({ activeScreen: activeScreen + 1 })
      }
      if (isAllowToBefore) {
        set({ activeScreen: activeScreen - 1 })
      }
    }
  },
  onWheel(e) {
    get().onChangeActiveScreen(e.deltaY > 0)
  },
  onTouchStart(e) {
    set({ touchStartClientY: e.changedTouches[0].clientY })
  },
  onTouchEnd(e) {
    const { touchStartClientY, onChangeActiveScreen } = get()
    const { clientY } = e.changedTouches[0]
    if (touchStartClientY !== clientY) {
      onChangeActiveScreen(touchStartClientY > clientY)
    }
  },
  openPreviewGallery(previewGallery) {
    return () => {
      set({ previewGallery })
    }
  },
  closePreviewGallery() {
    set({ previewGallery: null })
  },
  setMedia(file, url) {
    const { media } = get()

    Object.entries(media).forEach(([key, value]) => {
      Object.entries(value).forEach(([_key, _value]) => {
        if (_value === file) {
          // eslint-disable-next-line no-extra-semi
          ;((media as any)[key] as any)[_key] = url
        }
      })
    })

    set({ media })
  },
}))

export default useGlobalStore
