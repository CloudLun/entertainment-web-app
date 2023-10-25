import React from 'react'

import Search from './Search'
import Trending from './Trending'
import Recommend from './Recommend'

const Main = () => {
  return (
    <div className=''>
        <Search />
        <Trending />
        <Recommend />
    </div>
  )
}

export default Main