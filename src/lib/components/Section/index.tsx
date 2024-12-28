import Stack, { StackProps } from '@mui/material/Stack'
import styled from '@mui/material/styles/styled'
import React from 'react'

const Section = styled(
  // eslint-disable-next-line react/display-name
  React.forwardRef((props: StackProps, ref) => (
    <Stack
      ref={ref}
      component="section"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      position="relative"
      {...props}
    />
  )),
)(() => ({}))

export default Section
