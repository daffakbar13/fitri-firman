/* eslint-disable no-unused-vars */
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'
import EditRoundedIcon from '@mui/icons-material/EditRounded'
import LibraryAddCheckRoundedIcon from '@mui/icons-material/LibraryAddCheckRounded'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import React from 'react'

import useRahasiaStore from '@/lib/hooks/useRahasiaStore'
import GuestGroupsService from '@/lib/services/guest-groups/guest-groups.service'
import GuestsService from '@/lib/services/guests/guests.service'

import ModalAdd from './modal-add'
import ModalDelete from './modal-delete'

const ModalGuestList: React.FC = () => {
  const {
    isOpenModalAddGuest,
    viewGroupId,
    editGuestId,
    deleteGuestId,
    toggleModalAddGuest,
    handleViewGroup,
    handleEditGuest,
    handleDeleteGuest,
    copyTextShareInvitation,
  } = useRahasiaStore()
  const groups = GuestGroupsService.GetGuestGroups.useQuery()
  const guests = GuestsService.GetGuests.useQuery(viewGroupId)
  const createGuest = GuestsService.CreateGuest.useMutation()
  const updateGuest = GuestsService.UpdateGuest.useMutation()
  const deleteGuest = GuestsService.DeleteGuest.useMutation()
  const [searchKey, setSearchKey] = React.useState('')
  const [copyIndex, setCopyIndex] = React.useState(-1)

  React.useEffect(() => {
    if (viewGroupId) {
      guests.refetch()
    }
  }, [viewGroupId])

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setCopyIndex(-1)
    }, 3000)

    return () => {
      clearTimeout(timeout)
    }
  }, [copyIndex])

  return (
    <Dialog open={Boolean(viewGroupId)} onClose={handleViewGroup('')}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography fontWeight="bold">
          {groups.data?.find((g) => g.id === viewGroupId)?.name}
        </Typography>
        <Button onClick={toggleModalAddGuest}>Tambah</Button>
      </Box>
      <TextField placeholder="Cari..." onChange={(e) => setSearchKey(e.currentTarget.value)} />
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          {guests.isFetching && (
            <caption>
              <center>Loading...</center>
            </caption>
          )}
          {!guests.isFetching && !guests.data?.length && (
            <caption>
              <center>Data Tidak Ditemukan</center>
            </caption>
          )}
          <TableHead>
            <TableRow>
              <TableCell>Nama</TableCell>
              <TableCell>Dilihat</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {guests.isSuccess && !guests.isFetching && (
              <>
                {guests.data
                  .filter((guest) => new RegExp(searchKey, 'gi').test(guest.name))
                  .map((guest, i) => (
                    <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component="th" scope="row">
                        {guest.name}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {guest.seen}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <Box display="flex" gap={1}>
                          {copyIndex === i ? (
                            <LibraryAddCheckRoundedIcon />
                          ) : (
                            <ContentCopyRoundedIcon
                              color="primary"
                              onClick={() => {
                                copyTextShareInvitation(guest)
                                setCopyIndex(i)
                              }}
                            />
                          )}
                          <EditRoundedIcon onClick={handleEditGuest(guest.id)} />
                          <DeleteRoundedIcon color="error" onClick={handleDeleteGuest(guest.id)} />
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                <ModalAdd
                  isOpen={isOpenModalAddGuest}
                  onClose={toggleModalAddGuest}
                  onSubmit={(name) =>
                    createGuest.mutate([{ name, group_id: viewGroupId }], {
                      onSuccess: () => {
                        // toggleModalAddGuest()
                        guests.refetch()
                        groups.refetch()
                      },
                    })
                  }
                />
                <ModalAdd
                  isOpen={Boolean(editGuestId)}
                  defaultValue={guests.data.find((guest) => guest.id === editGuestId)?.name}
                  onClose={handleEditGuest('')}
                  onSubmit={(name) =>
                    updateGuest.mutate([editGuestId, { name }], {
                      onSuccess: () => {
                        handleEditGuest('')()
                        guests.refetch()
                      },
                    })
                  }
                />
                <ModalDelete
                  isOpen={Boolean(deleteGuestId)}
                  name={guests.data.find((guest) => guest.id === deleteGuestId)?.name}
                  onClose={handleDeleteGuest('')}
                  onDelete={() =>
                    deleteGuest.mutate([deleteGuestId], {
                      onSuccess: () => {
                        handleDeleteGuest('')()
                        guests.refetch()
                        groups.refetch()
                      },
                    })
                  }
                />
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Dialog>
  )
}

export default ModalGuestList
