import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded'
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import { useParams } from 'next/navigation'
import React from 'react'

import fonts from '@/assets/fonts'
import Section from '@/lib/components/Section'
import useGlobalStore from '@/lib/hooks/useGlobalStore'
import GuestsService from '@/lib/services/guests/guests.service'
import WishesService from '@/lib/services/wishes/wishes.service'

dayjs.extend(relativeTime)

const Wishes: NextPage = () => {
  const { id } = useParams()
  const { media } = useGlobalStore()
  const detail = GuestsService.GetGuestDetail.useQuery(id as string)
  const wishes = WishesService.GetWishes.useQuery()
  const createWish = WishesService.CreateWish.useMutation()

  React.useEffect(() => {
    wishes.refetch()
  }, [])

  return (
    <Section
      gap={1}
      paddingTop={9}
      sx={{
        '> *': { width: '100%' },
        backgroundColor: 'primary.main',
        backgroundImage: `url(${media.images.moon})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '60%',
        backgroundPosition: 'top center',
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* <Box
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
          bgcolor="#d5d5d5"
          sx={{
            backgroundImage: `url(${media.images.bg4})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'bottom center',
            opacity: 0.3,
            pointerEvents: 'none',
          }}
          zIndex={1}
        /> */}
        <Stack
          component="form"
          height="100%"
          justifyContent="center"
          alignItems="center"
          gap={2}
          borderRadius={4}
          paddingX={3}
          paddingTop={5}
          position="relative"
          zIndex={2}
          onSubmit={(e) => {
            e.preventDefault()
            const target = e.target as any
            const [name, description, , status] = target

            if (
              !createWish.isLoading &&
              detail.isSuccess &&
              [name, description, status].every((f) => f.value)
            ) {
              createWish.mutate(
                [
                  {
                    guest_id: detail.data.id,
                    group_id: detail.data.groupId,
                    name: name.value,
                    description: description.value,
                    status: Number(status.value),
                  },
                ],
                {
                  onSuccess: () => {
                    wishes.refetch()
                    name.value = null
                    description.value = null
                    status.value = 1
                  },
                },
              )
            }
          }}
        >
          <motion.div
            initial={{ translateY: -50 }}
            whileInView={{ translateY: 0 }}
            transition={{ duration: 1.2 }}
          >
            <Typography className={fonts.gilda.className} fontSize={30} color="secondary">
              Best Wishes
            </Typography>
          </motion.div>
          <Typography className={fonts.bodebeck.className} fontWeight="bold" maxWidth="80%">
            <motion.div
              initial={{ translateY: -40 }}
              whileInView={{ translateY: 0 }}
              transition={{ duration: 1.2 }}
            >
              Berikan ucapan harapan dan do’a kepada kedua mempelai
            </motion.div>
          </Typography>
          <TextField name="name" variant="filled" placeholder="Nama" fullWidth />
          <TextField name="description" variant="filled" placeholder="Ucapan" fullWidth multiline />
          <Select
            name="status"
            defaultValue={1}
            fullWidth
            placeholder="Konfirmasi Kehadiran"
            size="small"
            inputProps={{ 'aria-label': 'Without label' }}
            sx={{ textAlign: 'left' }}
            displayEmpty
          >
            <MenuItem value={1}>Hadir</MenuItem>
            <MenuItem value={2}>Tidak Hadir</MenuItem>
            <MenuItem value={3}>Masih Bingung</MenuItem>
          </Select>
          <Button
            fullWidth
            type="submit"
            color="secondary"
            disabled={createWish.isLoading || wishes.isFetching}
          >
            Kirim
          </Button>
          <Stack gap={1} width="100%" borderRadius={2} maxHeight={300} overflow="scroll">
            {wishes.isSuccess &&
              wishes.data.map((wish, i) => (
                <Stack
                  key={i}
                  borderRadius={2}
                  padding={2}
                  textAlign="left"
                  sx={{
                    backgroundColor: 'white',
                    '.MuiTypography-root': {
                      color: 'black',
                    },
                  }}
                >
                  <Typography
                    className={fonts.arimaMadurai.className}
                    fontSize={12}
                    fontWeight="bold"
                    marginBottom={1}
                  >
                    {wish.name} &nbsp;
                    {wish.status === 1 && (
                      <CheckCircleOutlineRoundedIcon fontSize="inherit" color="success" />
                    )}
                    {wish.status === 2 && (
                      <HighlightOffRoundedIcon fontSize="inherit" color="error" />
                    )}
                  </Typography>
                  <Typography className={fonts.arimaMadurai.className} fontSize={12}>
                    {wish.description}
                  </Typography>
                  <Typography
                    className={fonts.arimaMadurai.className}
                    fontSize={10}
                    textAlign="right"
                  >
                    {dayjs(wish.createdAt).fromNow()}
                  </Typography>
                </Stack>
              ))}
          </Stack>
        </Stack>
      </motion.div>
      <Box
        height={300}
        sx={{ backgroundImage: `url(${media.images.bg4})`, backgroundSize: 'cover' }}
      />
    </Section>
  )
}

export default Wishes
