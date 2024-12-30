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
            backgroundImage: `url(${media.images.gallery20})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            pointerEvents: 'none',
          }}
        />
      </Stack>
      <Typography className={fonts.crimson.className} fontSize={16} color="white" mt={4}>
        Pertemuan
        <br />
        <br />
        Tidak ada yang kebetulan di dunia ini,semua sudah tersusun rapih oleh sang maha kuasa. Kami
        bertemu pada akhir tahun 2021,tidak ada rencana untuk bisa membina rumah tangga bersama
        namun takdir yang sangat kuat membawa kami sampai ke titik ini.
        <br />
        <br />
        Menjalin hubungan
        <br />
        <br />
        Setelah mejalin hubungan selama kurang lebih 2 tahun,Pada tahun 2024 kami memutuskan untuk
        mempertemukan kedua keluarga dengan maksud ingin meminta restu untuk melangkahkan hubungan
        ini ke jenjang yang lebih serius yaitu pernikahan.
        <br />
        <br />
        Pernikahan
        <br />
        <br />
        Percayalah,bukan karena berjodoh lalu bertemu,tetapi karena berjodoh kami di pertemukan.Atas
        izin Allah tepat awal tahun 2025 kami akan melangsungkan janji suci pernikahan.
      </Typography>
    </Section>
  )
}

export default LoveStory
