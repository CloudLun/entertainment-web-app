import React, { Children } from 'react'

import Search from '@/components/main/Search'

type Props = {
    children: React.ReactNode
    title: string
}

const layout = ({children ,title}:Props) => {
  return (
    <div className='  overflow-y-scroll'>
      <Search />
      {children}
    </div>
  )
}

export default layout