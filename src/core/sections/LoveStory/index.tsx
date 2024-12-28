import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { NextPage } from 'next'
import React from 'react'

import fonts from '@/assets/fonts'
import Section from '@/lib/components/Section'
import useGlobalStore from '@/lib/hooks/useGlobalStore'

const LoveStory: NextPage = () => {
  const { media } = useGlobalStore()

  return (
    <Section
      gap={3}
      paddingX={3}
      paddingY={9}
      sx={{
        backgroundColor: 'primary.main',
      }}
    >
      <Typography className={fonts.gilda.className} fontSize={28} color="secondary">
        OUR LOVE STORY
      </Typography>
      <Stack
        border="2px solid"
        borderColor="white"
        alignItems="center"
        position="relative"
        borderRadius={3}
        overflow="hidden"
        boxShadow="0px 0px 30px 0px rgba(0,0,0,0.5)"
        width="100%"
        height={240}
        gap={2}
        sx={{ backgroundColor: '#E6DED8' }}
      >
        <Box
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
          sx={{
            backgroundImage: `url(${media.images.gallery3})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            pointerEvents: 'none',
          }}
        />
      </Stack>
      <Typography className={fonts.crimson.className} fontSize={16} color="white" mt={4}>
        Awal Bertemu
        <br />
        <br />
        Tidak ada yang kebetulan di dunia ini, semua sudah tersusun rapih oleh sang maha kuasa, kita
        tidak bisa memilih kepada siapa kita akan bertemu, kami bertemu pada tahun 2020 ketika kami
        bekerja. Kemudian kita saling berkenalan satu sama lain. Tidak ada yang pernah menyangka
        bahwa pertemuan didunia itu membawa kami pada suatu ikatan cinta yang suci hari ini.
        <br />
        <br />
        Menjalin Hubungan
        <br />
        <br />
        Kemudian pada tahun 2020 bulan Agustus kami mulai menjalin hubungan, sampai ahirnya kami
        memutuskan untuk ke jenjang yang lebih serius yaitu pernikahan.
        <br />
        <br />
        Pernikahan
        <br />
        <br />
        Dan di tahun 2025 ini kami memutuskan untuk mengikat janji suci dalam pernikahan. Dalam
        momen yang penuh cinta dan haru ini kami melangkah ke jenjang hidup baru menghadapi masa
        depan bersama dengan saling menyayangi.
      </Typography>
    </Section>
  )
}

export default LoveStory
