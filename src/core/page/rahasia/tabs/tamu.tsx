/* eslint-disable no-underscore-dangle */
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'
import EditRoundedIcon from '@mui/icons-material/EditRounded'
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TextField from '@mui/material/TextField'
import React from 'react'

import useRahasiaStore from '@/lib/hooks/useRahasiaStore'
import GuestGroupsService from '@/lib/services/guest-groups/guest-groups.service'

import ModalAdd from '../components/modal-add'
import ModalDelete from '../components/modal-delete'
import ModalGuestList from '../components/modal-guest-list'

const TabTamu: React.FC = () => {
  const {
    isOpenModalAddGroup,
    editGroupId,
    deleteGroupId,
    toggleModalAddGroup,
    handleViewGroup,
    handleEditGroup,
    handleDeleteGroup,
  } = useRahasiaStore()
  const groups = GuestGroupsService.GetGuestGroups.useQuery()
  const createGroup = GuestGroupsService.CreateGuestGroup.useMutation()
  const updateGroup = GuestGroupsService.UpdateGuestGroup.useMutation()
  const deleteGroup = GuestGroupsService.DeleteGuestGroup.useMutation()
  const [searchKey, setSearchKey] = React.useState('')

  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <TextField
          placeholder="Cari..."
          sx={{ alignSelf: 'start' }}
          onChange={(e) => setSearchKey(e.currentTarget.value)}
        />
        <Button onClick={toggleModalAddGroup}>Tambah</Button>
      </Box>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          {groups.isFetching && (
            <caption>
              <center>Loading...</center>
            </caption>
          )}
          {!groups.isFetching && !groups.data?.length && (
            <caption>
              <center>Data Tidak Ditemukan</center>
            </caption>
          )}
          <TableHead>
            <TableRow>
              <TableCell>Grup</TableCell>
              <TableCell>Total</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {groups.isSuccess && (
              <>
                {!groups.isFetching &&
                  groups.data
                    .filter((group) => new RegExp(searchKey, 'gi').test(group.name))
                    .map((group, i) => (
                      <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">
                          {group.name}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {group.total}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          <Box display="flex" gap={1}>
                            <VisibilityRoundedIcon
                              color="primary"
                              onClick={handleViewGroup(group.id)}
                            />
                            <EditRoundedIcon onClick={handleEditGroup(group.id)} />
                            <DeleteRoundedIcon
                              color="error"
                              onClick={handleDeleteGroup(group.id)}
                            />
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                <ModalGuestList />
                <ModalAdd
                  isOpen={isOpenModalAddGroup}
                  onClose={toggleModalAddGroup}
                  onSubmit={(name) =>
                    createGroup.mutate([{ name }], {
                      onSuccess: () => {
                        toggleModalAddGroup()
                        groups.refetch()
                      },
                    })
                  }
                />
                <ModalAdd
                  isOpen={Boolean(editGroupId)}
                  defaultValue={groups.data.find((e) => e.id === editGroupId)?.name}
                  onClose={handleEditGroup('')}
                  onSubmit={(name) =>
                    updateGroup.mutate([editGroupId, { name }], {
                      onSuccess: () => {
                        handleEditGroup('')()
                        groups.refetch()
                      },
                    })
                  }
                />
                <ModalDelete
                  isOpen={Boolean(deleteGroupId)}
                  name={groups.data.find((e) => e.id === deleteGroupId)?.name}
                  onClose={handleDeleteGroup('')}
                  onDelete={() =>
                    deleteGroup.mutate([deleteGroupId], {
                      onSuccess: () => {
                        handleDeleteGroup('')()
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
    </>
  )
}

export default TabTamu
