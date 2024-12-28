import Box from '@mui/material/Box'
import styled from '@mui/material/styles/styled'

import useGlobalStore from '@/lib/hooks/useGlobalStore'

const { media } = useGlobalStore.getState()

const Cover = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  backgroundImage: `url('${media.images.bg1}')`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  zIndex: -1,
  pointerEvents: 'none',
}))

export default Cover
