"use client"
import React, { useState } from 'react'

import data from "../../data/data.json"
import Image from 'next/image'

type Props = {
    category: "Movies" | "TV Series" | "Bookmark"
}

const Thumbnails = ({category}:Props) => {


  const filtetedData = data.filter((d) => d.category === category)
  const [bookmarked, SetBookmarked] = useState(filtetedData.map(d => false))

  const bookmarkClickHandler = (i: number) => {
    const newBookmarked = [...bookmarked]
    newBookmarked[i] = !newBookmarked[i]
    SetBookmarked(newBookmarked)
}


  return (
    <div className='mb-[24px] md:mb-[40px] pl-[16px] md:px-0 lg:w-[calc(100vw-200px)] overflow-y-scroll'>
      <h2 className='mb-[16px] font-regular text-heading_small text-white'>{category}</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[15px] md:gap-x-[30px] lg:gap-x-[40px] gap-y-[60px] md:gap-y-[80px] lg:gap-y-[90px] pb-[60px] '>
        {
          filtetedData.map((d, i) => {
            return (
              <div key={i} className='relative rounded-[8px]'>
                <div className='w-[164px] md:w-[220px] h-[110px] md:h-[140px] lg:h-[184px] xl-h[228px]'>
                  <Image
                    src={d.thumbnail.regular.large}
                    fill
                    alt="recommend image"
                    className='rounded-[8px]'
                  />
                </div>
                <div className='absolute top-[118px] md:top-[148px] lg:top-[192px]'>
                  <div className='mb-[2px] flex items-center gap-[8px] text-[11px] lg:text-body_medium text-white opacity-60'>
                    <div>{d.year}</div>
                    <div className='rounded-full h-[3px] w-[3px] bg-white'></div>
                    <div>{d.category}</div>
                    <div className='rounded-full h-[3px] w-[3px] bg-white'></div>
                    <div>{d.rating}</div>
                  </div>
                  <h2 className='font-medium text-body_small md:text-heading_xsmall text-white'>{d.title}</h2>
                </div>
                <div className='absolute right-[8px] top-[8px] flex justify-center items-center w-[32px] h-[32px] bg-[rgba(0,0,0,0.4)] rounded-full'>
                  <Image
                    src={bookmarked[i] ? "/assets/icon-bookmark-full.svg" : "/assets/icon-bookmark-empty.svg"}
                    width={11.67}
                    height={14}
                    alt="logo"
                    className='cursor-pointer'
                    onClick={() => bookmarkClickHandler(i)}
                  />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Thumbnails