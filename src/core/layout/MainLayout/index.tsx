import dynamic from 'next/dynamic'

import MainLayoutProps from './types'

const Main = dynamic(() => import('./components/Main'))

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  const { children } = props
  return <Main>{children}</Main>
}

export default MainLayout
