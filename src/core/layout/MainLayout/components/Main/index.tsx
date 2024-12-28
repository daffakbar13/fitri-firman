import Box from '@mui/material/Box'
import styled from '@mui/material/styles/styled'

const Main = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  overflow: 'hidden',
  '& > *': {
    width: '100%',
    maxWidth: theme.breakpoints.values.lg,
    boxShadow: theme.shadows[16],
  },
}))

export default Main
