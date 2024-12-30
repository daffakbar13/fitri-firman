import InstagramIcon from '@mui/icons-material/Instagram'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import React from 'react'

import fonts from '@/assets/fonts'
import Section from '@/lib/components/Section'
import useGlobalStore from '@/lib/hooks/useGlobalStore'

const data = {
  cpp: {
    shortName: 'Firman',
    childOrder: 3,
    father: {
      name: 'Abdul Rojak',
      isAlm: false,
    },
    role: 'cpp',
    fullName: 'Ceceng Firman Nursaleh',
    gender: 'male',
    mother: {
      name: 'Ening',
      isAlm: false,
    },
  },
  cpw: {
    shortName: 'Fitri',
    childOrder: 1,
    father: {
      name: 'Maman',
      isAlm: true,
    },
    role: 'cpw',
    fullName: 'Fitri Damayanti',
    gender: 'female',
    mother: {
      name: 'Cicih',
      isAlm: false,
    },
  },
}

const Profile: NextPage = () => {
  const { media } = useGlobalStore()
  return (
    <Section gap={2} paddingX={3.5} paddingY={6.5} sx={{ backgroundColor: 'primary.main' }}>
      <Stack zIndex={2}>
        <motion.div
          initial={{ opacity: 0, translateY: -100 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1.2 }}
        >
          <Typography className={fonts.gilda.className} color="secondary" fontSize={30}>
            BRIDE & GROOM
          </Typography>
        </motion.div>
        <Stack gap={8} alignItems="center" marginTop={4}>
          {([data.cpw, data.cpp] as const).map((current, i) => {
            const isMale = current.gender === 'male'
            return (
              <React.Fragment key={i}>
                <Box width="80%">
                  <motion.div
                    initial={{ opacity: 0, translateY: i ? 200 : -200 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 1.2 }}
                  >
                    <Stack key={i} width="100%" alignItems="center" gap={2}>
                      <Box
                        width={280}
                        height={425}
                        borderRadius={1000}
                        padding={0.25}
                        boxShadow="0px 0px 30px 0px rgba(0, 0, 0, 0.28)"
                        sx={{ backgroundColor: 'white' }}
                      >
                        <Box
                          width="100%"
                          height="100%"
                          borderRadius={1000}
                          sx={{
                            backgroundImage: `url(${media.images[i ? 'gallery11' : 'gallery22']})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: isMale ? '140%' : '160%',
                            backgroundPosition: isMale ? 'left -120px' : '-150px -180px',
                          }}
                        />
                      </Box>
                      <motion.div
                        initial={{ translateX: i ? -100 : 100 }}
                        whileInView={{ translateX: 0 }}
                        transition={{ duration: 1.2 }}
                      >
                        <Typography
                          className={fonts.pinyon.className}
                          fontSize={45}
                          marginTop={2}
                          color="secondary"
                        >
                          {current.shortName}
                        </Typography>
                        <Typography className={fonts.gilda.className} fontSize={18}>
                          {current.fullName}
                        </Typography>
                      </motion.div>
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 1.2 }}
                      >
                        <Box>
                          <Typography className={fonts.crimson.className} fontSize={16}>
                            {isMale ? 'Putra' : 'Putri'} dari
                          </Typography>
                          <Typography className={fonts.crimson.className} fontSize={16}>
                            {(['father', 'mother'] as const)
                              .map((parent) => {
                                const { isAlm, name } = current[parent]
                                const isFather = parent === 'father'
                                return [
                                  isAlm ? '(Alm.)' : '',
                                  isFather ? 'Bpk.' : 'Ibu',
                                  name,
                                ].join(' ')
                              })
                              .join(' & ')}
                          </Typography>
                        </Box>
                      </motion.div>
                      <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        height={50}
                        width={50}
                        padding={1}
                        color="white"
                        borderRadius={4}
                        sx={{
                          bgcolor: 'secondary.main',
                          cursor: 'pointer',
                        }}
                        onClick={() =>
                          window.open(
                            'https://instagram.com/'.concat(
                              isMale ? 'frmnnurshaleh' : 'ftridamayanti',
                            ),
                            '_blank',
                          )
                        }
                      >
                        <InstagramIcon fontSize={'medium'} />
                      </Box>
                    </Stack>
                  </motion.div>
                </Box>
                {!i && (
                  <Box
                    height={63}
                    width="100vw"
                    sx={{
                      backgroundImage: `url(${media.images.separatorLine})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                    }}
                  />
                )}
              </React.Fragment>
            )
          })}
        </Stack>
      </Stack>
    </Section>
  )
}

export default Profile
