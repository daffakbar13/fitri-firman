import { NextPage } from 'next'
import React from 'react'

import Section from '@/lib/components/Section'
import useGlobalStore from '@/lib/hooks/useGlobalStore'

const Separator2: NextPage = () => {
  const { media } = useGlobalStore()

  return (
    <Section
      minHeight={420}
      width="100%"
      sx={{
        backgroundImage: `url(${media.images.gallery19})`,
        backgroundSize: 'cover',
      }}
    ></Section>
  )
}

export default Separator2
