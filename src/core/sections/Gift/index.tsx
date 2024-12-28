import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded'
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded'
import LibraryAddCheckRoundedIcon from '@mui/icons-material/LibraryAddCheckRounded'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'

import fonts from '@/assets/fonts'
import Section from '@/lib/components/Section'
import useGlobalStore from '@/lib/hooks/useGlobalStore'

dayjs.extend(relativeTime)

const Gift: NextPage = () => {
  const { media } = useGlobalStore()
  const [copyIndex, setCopyIndex] = React.useState(-1)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setCopyIndex(-1)
    }, 3000)

    return () => {
      clearTimeout(timeout)
    }
  }, [copyIndex])

  return (
    <Section
      gap={3}
      paddingX={3}
      paddingY={9}
      sx={{
        '> *': { width: '100%' },
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        style={{ position: 'relative', overflow: 'hidden' }}
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
            backgroundColor: 'primary.main',
            opacity: 0.5,
            pointerEvents: 'none',
          }}
        />
        <Stack
          position="relative"
          height="100%"
          justifyContent="center"
          alignItems="center"
          gap={3}
          borderRadius={2.5}
          paddingY={5}
          border="2px solid"
          borderColor="white"
          boxShadow="0px 0px 30px 0px rgba(0,0,0,0.5)"
          zIndex={2}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Typography className={fonts.gilda.className} fontSize={25} color="secondary">
              WEDDING GIFT
            </Typography>
          </motion.div>
          <Typography className={fonts.crimson.className} fontSize={16} maxWidth="80%">
            <motion.div
              initial={{ translateY: 100 }}
              whileInView={{ translateY: 0 }}
              transition={{ duration: 1.2 }}
            >
              Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi
              adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.
            </motion.div>
          </Typography>
          <Stack gap={2} alignItems="center">
            {[
              {
                name: 'Firman Fauzi',
                cardNumber: '123 123 1234',
                logo: media.images.bca,
                isBank: true,
                isGift: false,
              },
              {
                name: 'Fitri Damayanti',
                cardNumber: '0822 6243 4804',
                logo: media.images.dana,
                isBank: false,
                isGift: false,
              },
              {
                name: 'Fitri Damayanti',
                address:
                  'Jl. Panji Siliwangi No. 03, RT.15/RW.05, Dsn. Pajagan, Ds. Mekarwangi, Kec. Sukamantri, Kabupaten Ciamis',
                cardNumber: '',
                phoneNumber: '0821 2107 1220',
                logo: '',
                isBank: false,
                isGift: true,
              },
            ].map((e, i) => (
              <motion.div
                key={i}
                style={{ width: '85%' }}
                initial={{ opacity: 0, translateX: i % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 1.2 }}
              >
                <Stack
                  minHeight={172}
                  justifyContent="center"
                  alignItems={e.isGift ? 'center' : 'start'}
                  border="1px solid white"
                  borderRadius={2}
                  padding={2}
                  sx={{
                    backgroundImage: `url(${media.images.bgBank})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center right',
                    backgroundSize: 'cover',
                    boxShadow: (theme) => theme.shadows[4],
                    '.MuiTypography-root': {
                      color: 'black',
                    },
                  }}
                >
                  {!e.isGift && (
                    <>
                      <Box alignSelf="end">
                        <Image
                          src={e.logo}
                          width={100}
                          height={22}
                          alt="bank"
                          style={{ height: 22, width: 'auto' }}
                        />
                      </Box>
                      <Box height={30}>
                        {e.isBank && (
                          <Image
                            src={media.images.chipAtm}
                            height={30}
                            width={100}
                            alt="chip"
                            style={{ height: 30, width: 'auto' }}
                          />
                        )}
                      </Box>
                      <Typography className={fonts.jura.className} fontSize={15} fontWeight="bold">
                        {e.cardNumber}
                      </Typography>
                      <Typography className={fonts.jura.className} fontSize={15} fontWeight="bold">
                        {e.name}
                      </Typography>
                      <Box alignSelf="end" marginTop={1}>
                        <Button
                          size="small"
                          onClick={() => {
                            navigator.clipboard?.writeText(e.cardNumber.replaceAll(' ', ''))
                            setCopyIndex(i)
                          }}
                        >
                          <Box display="flex" gap={0.5} alignItems="center">
                            {copyIndex === i ? (
                              <LibraryAddCheckRoundedIcon sx={{ fontSize: 12 }} />
                            ) : (
                              <ContentCopyRoundedIcon sx={{ fontSize: 12 }} />
                            )}
                            <Typography fontSize={10} sx={{ color: 'white !important' }}>
                              Salin
                            </Typography>
                          </Box>
                        </Button>
                      </Box>
                    </>
                  )}
                  {e.isGift && (
                    <>
                      <CardGiftcardRoundedIcon sx={{ fontSize: 24 }} />
                      <Typography fontSize={15} fontWeight="bold" marginBottom={1}>
                        Kirim Hadiah
                      </Typography>
                      <Typography className={fonts.jura.className} fontSize={12} fontWeight="bold">
                        Nama Penerima : {e.name}
                      </Typography>
                      <Typography className={fonts.jura.className} fontSize={12} fontWeight="bold">
                        No. HP : {e.phoneNumber}
                      </Typography>
                      <Typography className={fonts.jura.className} fontSize={12} fontWeight="bold">
                        {e.address}
                      </Typography>
                    </>
                  )}
                </Stack>
              </motion.div>
            ))}
          </Stack>
        </Stack>
      </motion.div>
    </Section>
  )
}

export default Gift
