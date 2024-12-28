import dynamic from 'next/dynamic'
import React from 'react'
import { QueryClient } from 'react-query'

import ReactQueryProviderProps from './types'

const QueryClientProvider = dynamic(() => import('react-query').then((m) => m.QueryClientProvider))
const ReactQueryDevtools = dynamic(() =>
  import('react-query/devtools').then((m) => m.ReactQueryDevtools),
)

const ReactQueryProvider: React.FC<ReactQueryProviderProps> = (props) => {
  const { children } = props
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
          },
        },
      }),
  )

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default ReactQueryProvider
