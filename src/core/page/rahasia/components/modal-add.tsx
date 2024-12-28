/* eslint-disable no-unused-vars */
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import React from 'react'

interface Props {
  isOpen: boolean
  defaultValue?: string
  onClose(): void
  onSubmit(value: string): void
}

const ModalAdd: React.FC<Props> = (props) => {
  const { isOpen, defaultValue, onClose, onSubmit } = props
  const [value, setValue] = React.useState('')

  React.useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        document.getElementById('name')?.focus()
      }, 100)
    }
  }, [isOpen])

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <Stack
        component="form"
        gap={1}
        onSubmit={(e) => {
          e.preventDefault()
          onSubmit(value)
        }}
      >
        <TextField
          id="name"
          autoFocus
          defaultValue={defaultValue}
          onChange={(e) => setValue(e.target.value)}
        />
        <Box display="flex" justifyContent="end" gap={2}>
          <Button size="small" variant="outlined" color="error" onClick={onClose}>
            Batal
          </Button>
          <Button size="small" type="submit">
            Simpan
          </Button>
        </Box>
      </Stack>
    </Dialog>
  )
}

export default ModalAdd
