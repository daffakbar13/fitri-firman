import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'

import useGlobalStore from '@/lib/hooks/useGlobalStore'

const Navbar: React.FC = () => {
  const { Screens, activeScreen, setActiveScreen } = useGlobalStore()

  React.useEffect(() => {
    const nav = document.getElementsByTagName('nav')
    const activeChild = nav[0].children[activeScreen] as any

    nav[0].scroll({
      behavior: 'smooth',
      left: activeChild.offsetLeft - document.body.clientWidth / 2 + 30,
    })
  }, [activeScreen])

  return (
    <Box
      component="nav"
      display="flex"
      alignItems="center"
      gap={2}
      padding={(e) => e.spacing(1, 2)}
      sx={{ overflowX: 'scroll', overflowY: 'hidden' }}
    >
      {Screens.map((e, i) => (
        <Stack
          key={i}
          justifyContent="center"
          alignItems="center"
          gap={0.5}
          height={60}
          minWidth={60}
          borderRadius={1}
          sx={{
            background: activeScreen === i ? (e) => e.palette.primary.main : 'none',
            color: activeScreen === i ? 'white' : 'unset',
            cursor: 'pointer',
          }}
          onClick={() => setActiveScreen(i)}
        >
          <e.Icon />
          <Typography fontSize={12}>{e.title}</Typography>
        </Stack>
      ))}
    </Box>
  )
}

export default Navbar
