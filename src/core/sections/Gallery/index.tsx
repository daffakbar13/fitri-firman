import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'

import fonts from '@/assets/fonts'
import Section from '@/lib/components/Section'
import useGlobalStore from '@/lib/hooks/useGlobalStore'

const Card = ({ children }: React.PropsWithChildren) => (
  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.2 }}>
    {children}
  </motion.div>
)

const Gallery: NextPage = () => {
  const { previewGallery, media, openPreviewGallery, closePreviewGallery } = useGlobalStore()

  const renderImages = (isLandscape: boolean, ...images: string[]) =>
    images.map((img, i) => (
      <Card key={i}>
        <Image
          src={img}
          height={100}
          width={100}
          alt={'gallery'}
          quality={1}
          style={{ ...(isLandscape && { aspectRatio: 'unset' }) }}
          onClick={openPreviewGallery(img)}
        />
      </Card>
    ))

  return (
    <Section
      justifyContent="start"
      paddingX={2}
      paddingY={9}
      sx={{
        backgroundColor: 'primary.main',
      }}
    >
      <Box
        position="absolute"
        top={0}
        bottom={0}
        left={0}
        right={0}
        zIndex={1}
        borderRadius={2.5}
        sx={{
          backgroundImage: `url(${media.images.patren})`,
          backgroundRepeat: 'repeat',
          backgroundSize: 'contain',
          opacity: 0.2,
          pointerEvents: 'none',
        }}
      />
      <Stack position="relative" gap={4} zIndex={2}>
        <motion.div
          initial={{ translateY: -50 }}
          whileInView={{ translateY: 0 }}
          transition={{ duration: 1.2 }}
        >
          <Typography className={fonts.pinyon.className} fontSize={50} color="secondary">
            Our Gallery
          </Typography>
        </motion.div>
        <Stack
          gap={0.5}
          flex={1}
          width="100%"
          sx={{
            '> *': { gap: 1 },
            '> * > *': { flex: 1, cursor: 'pointer' },
            img: {
              width: '100%',
              height: 'auto',
              borderRadius: 0.5,
              objectFit: 'cover',
              aspectRatio: '191/286',
            },
          }}
        >
          <Box display="flex">
            {renderImages(false, media.images.gallery7, media.images.gallery5)}
          </Box>
          <Box display="flex">{renderImages(true, media.images.gallery2)}</Box>
          <Box display="flex">
            {renderImages(false, media.images.gallery3, media.images.gallery6)}
          </Box>
          <Box display="flex">{renderImages(true, media.images.gallery4)}</Box>
          <Box display="flex">
            {renderImages(false, media.images.gallery9, media.images.gallery10)}
          </Box>
          <Box display="flex">{renderImages(true, media.images.gallery8)}</Box>
          <Box display="flex">
            {renderImages(false, media.images.gallery11, media.images.gallery12)}
          </Box>
          <Box display="flex">
            {renderImages(false, media.images.gallery13, media.images.gallery15)}
          </Box>
          <Box display="flex">
            {renderImages(false, media.images.gallery16, media.images.gallery17)}
          </Box>
          <Box display="flex">
            {renderImages(false, media.images.gallery18, media.images.gallery19)}
          </Box>
          <Box display="flex">
            {renderImages(false, media.images.gallery21, media.images.gallery23)}
          </Box>
          <Box display="flex">
            {renderImages(false, media.images.gallery24, media.images.gallery25)}
          </Box>

          {/* <Box display="flex" flexBasis="30%">
          {renderImages(true, media.images.biruLandscape)}
        </Box>
        <Box display="flex">
          {renderImages(false, media.images.biru3, media.images.biru4, media.images.biru5)}
        </Box>
        <Box display="flex">{renderImages(false, media.images.jawa4, media.images.jawa5)}</Box>
        <Box display="flex" flexBasis="40%">
          {renderImages(true, media.images.jawaLandscape)}
        </Box>
        <Box display="flex">
          {renderImages(false, media.images.jawa2, media.images.jawa1, media.images.jawa3)}
        </Box> */}
        </Stack>
        <Dialog open={previewGallery !== null} fullWidth onClose={closePreviewGallery}>
          {previewGallery && (
            <Image
              src={previewGallery}
              height={100}
              width={100}
              alt={'gallery'}
              quality={10}
              style={{ width: '100%', height: 'auto' }}
            />
          )}
        </Dialog>
      </Stack>
    </Section>
  )
}

export default Gallery
