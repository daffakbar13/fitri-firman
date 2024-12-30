import { AccountBalanceRounded, CalendarMonthRounded, MapRounded } from '@mui/icons-material'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import React from 'react'

import fonts from '@/assets/fonts'
import Section from '@/lib/components/Section'
import useGlobalStore from '@/lib/hooks/useGlobalStore'

const Address: NextPage = () => {
  const { media } = useGlobalStore()

  return (
    <Section
      gap={3}
      paddingX={3}
      paddingY={9}
      sx={{
        backgroundImage: `url(${media.images.bg3})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'top',
      }}
    >
      <motion.div
        initial={{ translateX: 100 }}
        whileInView={{ translateX: 0 }}
        transition={{ duration: 1.2 }}
      >
        <Typography className={fonts.pinyon.className} fontSize={45} color="secondary">
          Wedding Event
        </Typography>
      </motion.div>
      <motion.div
        initial={{ translateY: 50 }}
        whileInView={{ translateY: 0 }}
        transition={{ duration: 1.2 }}
      >
        <Typography className={fonts.crimson.className} fontSize={16} mb={4}>
          Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i serta Kerabat sekalian
          untuk menghadiri acara pernikahan kami:
        </Typography>
      </motion.div>
      {[
        // { type: 'Akad Nikah', time: '08:00 - 10:00 WIB' },
        { type: 'RESEPSI', time: '10.00 - Selesai' },
      ].map((e, i) => (
        <Box
          key={i}
          border="2px solid"
          borderColor="white"
          position="relative"
          borderRadius={1000}
          paddingX={3.5}
          paddingY={15}
          overflow="hidden"
          boxShadow="0px 0px 30px 0px rgba(0,0,0,0.5)"
          width="100%"
          sx={{
            backgroundImage: `url(${media.images.bg3})`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'top',
          }}
        >
          <Box
            position="absolute"
            top={0}
            bottom={0}
            left={0}
            right={0}
            bgcolor="#d5d5d5"
            sx={{
              backgroundColor: 'primary.main',
              opacity: 0.75,
              pointerEvents: 'none',
            }}
          />
          <Stack alignItems="center" gap={2} position="relative" zIndex={2}>
            <motion.div
              initial={{ translateY: -50 }}
              whileInView={{ translateY: 0 }}
              transition={{ duration: 1.2 }}
            >
              <Typography className={fonts.gilda.className} fontSize={30} color="secondary">
                {e.type}
              </Typography>
            </motion.div>
            <Divider sx={{ width: '50%' }} />
            <motion.div
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2 }}
            >
              <Typography className={fonts.crimson.className} fontSize={20}>
                SELASA
              </Typography>
            </motion.div>
            <motion.div
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2 }}
            >
              <Typography className={fonts.crimson.className} fontSize={20}>
                14 Januari 2025
              </Typography>
            </motion.div>
            <motion.div
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2 }}
            >
              <Typography className={fonts.crimson.className} fontSize={20}>
                {e.time}
              </Typography>
            </motion.div>
            <Divider sx={{ width: '50%' }}>
              <AccountBalanceRounded color="secondary" sx={{ fontSize: 25 }} />
            </Divider>
            <motion.div
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2 }}
            >
              <Typography className={fonts.montserrat.className} fontWeight="bold">
                GSG Sindangkerta
              </Typography>
            </motion.div>
            <motion.div
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2 }}
            >
              <Typography className={fonts.montserrat.className}>
                GSG Sindangkerta,Rt 18/Rw 07 Dusun.Sindangkerta Desa.Hujungtiwu Kec.Panjalu
              </Typography>
            </motion.div>
          </Stack>
        </Box>
      ))}
      <Stack
        border="2px solid"
        borderColor="white"
        alignItems="center"
        position="relative"
        borderRadius={2}
        overflow="hidden"
        boxShadow="0px 0px 30px 0px rgba(0,0,0,0.5)"
        width="100%"
        gap={2}
        sx={{ backgroundColor: '#E6DED8' }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1835.5018156137505!2d108.26783938499963!3d-7.092829485045398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMDUnMzQuNSJTIDEwOMKwMTYnMDYuMSJF!5e0!3m2!1sid!2sid!4v1735526533880!5m2!1sid!2sid"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Stack>
    </Section>
  )
}

export default Address
