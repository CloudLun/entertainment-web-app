import React, { useState, useEffect, useContext } from 'react'
import { WindowSizeContext } from '@/context/WindowSizeContext'

import data from "../../../data/data.json"
import Image from 'next/image'


const Recommend = () => {

    const { windowWidth } = useContext(WindowSizeContext) as WindowSizeContextType

    return (
        <div className='flex-auto px-[16px] md:px-0 pb-[60px] lg:w-[calc(100vw-200px)] h-[calc(100vh-338px)] overflow-y-scroll'>
            <h2 className='mb-[24px] lg:mb-[32px] font-regular text-heading_small text-white'>Recommended for you</h2>
            <div className='grid grid-cols-2 gap-[15px]'>
                {
                    data.filter((d, i) => i > 4).map((d, i) => {
                        return (
                            <div key={i} className='rounded-[8px]'>
                                <Image
                                    src={d.thumbnail.regular.large}
                                    width={164}
                                    height={110}
                                    alt="recommend image"
                                    className='rounded-[8px]'
                                />
                                <div className='mt-[8px] mb-[2px] flex items-center gap-[8px] text-[11px] text-white opacity-60'>
                                    <div>{d.year}</div>
                                    <div className='rounded-full h-[3px] w-[3px] bg-white'></div>
                                    <div>{d.category}</div>
                                    <div className='rounded-full h-[3px] w-[3px] bg-white'></div>
                                    <div>{d.rating}</div>
                                </div>
                                <h2 className='font-medium text-body_small text-white'>{d.title}</h2>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Recommend