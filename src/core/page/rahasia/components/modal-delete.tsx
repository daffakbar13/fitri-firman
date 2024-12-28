/* eslint-disable no-unused-vars */
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import React from 'react'

interface Props {
  isOpen: boolean
  name?: string
  onClose(): void
  onDelete(): void
}

const ModalDelete: React.FC<Props> = (props) => {
  const { isOpen, name, onClose, onDelete } = props

  return (
    <Dialog open={isOpen} onClose={onClose}>
      Yakin ingin menghapus {name}?
      <Box display="flex" justifyContent="end" gap={2}>
        <Button size="small" variant="outlined" color="error" onClick={onClose}>
          Batal
        </Button>
        <Button size="small" color="error" onClick={onDelete}>
          Hapus
        </Button>
      </Box>
    </Dialog>
  )
}

export default ModalDelete
