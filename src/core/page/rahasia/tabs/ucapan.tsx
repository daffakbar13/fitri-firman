import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded'
import DeleteOutlineRounded from '@mui/icons-material/DeleteOutlineRounded'
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import React from 'react'

import fonts from '@/assets/fonts'
import useRahasiaStore from '@/lib/hooks/useRahasiaStore'
import WishesService from '@/lib/services/wishes/wishes.service'

import ModalDelete from '../components/modal-delete'

dayjs.extend(relativeTime)

const TabUcapan: React.FC = () => {
  const { deleteWishId, handleDeleteWish } = useRahasiaStore()
  const wishes = WishesService.GetWishes.useQuery()
  const deleteWish = WishesService.DeleteWish.useMutation()

  React.useEffect(() => {
    wishes.refetch()
  }, [])

  return (
    <>
      {wishes.isSuccess &&
        wishes.data.map((wish, i) => (
          <Stack
            key={i}
            borderRadius={2}
            padding={2}
            textAlign="left"
            border="1px solid"
            borderColor="primary.main"
            sx={{ backgroundColor: deleteWishId && deleteWishId !== wish.id ? 'silver' : 'white' }}
          >
            <Box display="flex" justifyContent="space-between">
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
                {wish.status === 2 && <HighlightOffRoundedIcon fontSize="inherit" color="error" />}
              </Typography>
              <DeleteOutlineRounded
                fontSize="inherit"
                color="error"
                sx={{ marginLeft: 'auto' }}
                onClick={handleDeleteWish(wish.id)}
              />
            </Box>
            <Typography className={fonts.arimaMadurai.className} fontSize={12}>
              {wish.description}
            </Typography>
            <Typography className={fonts.arimaMadurai.className} fontSize={10} textAlign="right">
              {dayjs(wish.createdAt).fromNow()}
            </Typography>
          </Stack>
        ))}
      {wishes.isFetching && (
        <caption>
          <center>Loading...</center>
        </caption>
      )}
      {!wishes.isFetching && !wishes.data?.length && (
        <caption>
          <center>Data Tidak Ditemukan</center>
        </caption>
      )}
      <ModalDelete
        isOpen={Boolean(deleteWishId)}
        name="komentar ini"
        onClose={handleDeleteWish('')}
        onDelete={() =>
          deleteWish.mutate([deleteWishId], {
            onSuccess: () => {
              handleDeleteWish('')()
              wishes.refetch()
            },
          })
        }
      />
    </>
  )
}

export default TabUcapan
