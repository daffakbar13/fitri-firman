'use client'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import 'dayjs/locale/id'

import dayjs from 'dayjs'
import dynamic from 'next/dynamic'

dayjs.locale('id')

export default dynamic(() => import('@/core/page'))
