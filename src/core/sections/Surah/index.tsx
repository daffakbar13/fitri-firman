import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import React from 'react'

import fonts from '@/assets/fonts'
import Section from '@/lib/components/Section'
import useGlobalStore from '@/lib/hooks/useGlobalStore'

const Surah: NextPage = () => {
  const { media } = useGlobalStore()

  return (
    <Section
      gap={8}
      paddingY={9.5}
      paddingX={2.5}
      sx={{
        backgroundImage: `url(${media.images.bg2})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
    >
      <Stack
        alignItems="center"
        position="relative"
        borderRadius={1000}
        padding={4}
        overflow="hidden"
        boxShadow="0px 0px 30px 0px rgba(0,0,0,0.5)"
        sx={{
          backgroundImage: `url(${media.images.bg2})`,
          backgroundRepeat: 'repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'top',
        }}
      >
        <Box
          width="100%"
          sx={{
            backgroundImage: `url(${media.images.moon})`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'top',
            aspectRatio: '1/1',
            marginTop: -4.5,
          }}
        />
        <Stack gap={2} mb={8} mt={-6}>
          <motion.div
            initial={{ translateX: 100 }}
            whileInView={{ translateX: 0 }}
            transition={{ duration: 1.2 }}
          >
            <Typography className={fonts.pinyon.className} fontSize={45} color="secondary">
              Endless Love
            </Typography>
          </motion.div>
          <motion.div
            initial={{ translateY: -100 }}
            whileInView={{ translateY: 0 }}
            transition={{ duration: 1.2 }}
          >
            <Typography className={fonts.crimson.className} fontSize={16}>
              {`"Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri
              dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan
              dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu
              benar-benar terdapat tanda-tanda bagi kaum yang berfikir. - Ar Ruum 21"`}
            </Typography>
          </motion.div>
        </Stack>
        <motion.div
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.2 }}
          style={{ width: '100%' }}
        >
          <Box
            border="3px solid"
            borderColor="white"
            alignItems="center"
            position="relative"
            borderRadius={1000}
            overflow="hidden"
            boxShadow="0px 0px 30px 0px rgba(0,0,0,0.5)"
            width="100%"
            height={468}
            gap={2}
            sx={{
              backgroundColor: '#E6DED8',
              backgroundImage: `url(${media.images.bb})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'bottom',
              pointerEvents: 'none',
            }}
          ></Box>
        </motion.div>
      </Stack>
    </Section>
  )
}

export default Surah
