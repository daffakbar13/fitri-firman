import { CalendarMonthOutlined } from '@mui/icons-material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import dayjs from 'dayjs'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

import fonts from '@/assets/fonts'
import Section from '@/lib/components/Section'
import useGlobalStore from '@/lib/hooks/useGlobalStore'

const CountDown: NextPage = () => {
  const { media } = useGlobalStore()
  const [date, setDate] = React.useState(dayjs())
  const weddingDate = dayjs('2025-01-14T01:00:00.000Z')
  const diff = [
    ['Hari', weddingDate.diff(date, 'd')],
    ['Jam', weddingDate.diff(date, 'h') % 24],
    ['Menit', weddingDate.diff(date, 'm') % 60],
    ['Detik', weddingDate.diff(date, 's') % 60],
  ]
  const details =
    'Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu. Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.'

  function getGoogleCalendarLink() {
    const format = 'YYYYMMDD'
    const from = weddingDate.startOf('d').format(format)
    const to = weddingDate.endOf('d').format(format)

    const baseUrl = 'https://calendar.google.com/calendar/r/eventedit'
    const params = new URLSearchParams({
      text: 'Pernikahan Fitri & Firman',
      dates: `${from}/${to}`,
      details,
      location:
        'Jl. Panji Siliwangi No. 03, Mekarwangi, Kec. Sukamantri, Kabupaten Ciamis, Jawa Barat 46264',
      ctz: 'Asia/Jakarta',
    })

    return `${baseUrl}?${params.toString()}`
  }

  React.useEffect(() => {
    const timer = setInterval(() => {
      setDate(dayjs())
    }, 1000)

    return () => clearInterval(timer)
  })

  return (
    <Section
      sx={{
        backgroundColor: 'primary.main',
        backgroundImage: `url(${media.images.bg5})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
      }}
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        sx={{
          backgroundImage: `url(${media.images.bg6})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'top center',
        }}
      />
      <Stack position="relative" width="100%" paddingY={7.5} paddingX={5} gap={2} zIndex={2}>
        <Box
          border="2px solid"
          borderColor="white"
          height={480}
          overflow="hidden"
          sx={{
            borderRadius: '200px 200px 0 0',
            backgroundImage: `url(${media.images.gallery4})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom center',
          }}
        />
        <Stack flexDirection="row" gap={0.5}>
          {diff.map(([key, value], i) => (
            <React.Fragment key={i}>
              <Stack
                bgcolor="secondary.main"
                paddingY={1.5}
                borderRadius={0.5}
                color="white"
                flex={1}
                border="2px solid"
                borderColor="white"
              >
                <Typography className={fonts.crimson.className} fontSize={20}>
                  {value}
                </Typography>
                <Typography className={fonts.crimson.className} fontSize={12}>
                  {key}
                </Typography>
              </Stack>
            </React.Fragment>
          ))}
        </Stack>
        <Link href={getGoogleCalendarLink()} target="_blank">
          <Button sx={{ border: '1px solid', borderColor: 'white', borderRadius: 0.5, gap: 1 }}>
            <CalendarMonthOutlined />
            Save The Date
          </Button>
        </Link>
        <Typography className={fonts.crimson.className} fontSize={16}>
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            {details}
          </motion.div>
        </Typography>
        <Typography className={fonts.pinyon.className} fontSize={40} color="secondary">
          <motion.div
            initial={{ translateY: 50 }}
            whileInView={{ translateY: 0 }}
            transition={{ duration: 1.2 }}
          >
            Fitri & Firman
          </motion.div>
        </Typography>
      </Stack>
    </Section>
  )
}

export default CountDown
