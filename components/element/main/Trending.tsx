"use client"
import React, { useState, useEffect } from 'react'
import data from "../../../data/data.json"
import Image from 'next/image'



const Trending = () => {

    const [bookmarked, SetBookmarked] = useState(data.filter((d, i) => i <= 4).map(d => false))

    const bookmarkClickHandler = (i: number) => {
        const newBookmarked = [...bookmarked]
        newBookmarked[i] = !newBookmarked[i]
        SetBookmarked(newBookmarked)
    }

    return (
        <div className=''>
            <h2 className='mb-[16px] pl-[16px] font-regular text-heading_small text-white'>Trending</h2>
            <div className='flex items-center gap-[16px] pl-[16px] overflow-x-scroll'>
                {data.filter((d, i) => i <= 4).map((d, i) => {
                    return (
                        <div key={i} className='relative min-w-[240px] md:min-w-[470px] h-[140px] md:h-[230px] bg-white rounded-[8px]'>
                            <Image
                                src={d.thumbnail.trending!.large}
                                fill={true}
                                alt="logo"
                                className='rounded-[8px]'
                            />
                            <div className='absolute left-[18px] bottom-[20px] z-20'>
                                <div className='mb-[2px] flex items-center gap-[8px] text-white opacity-90'>
                                    <div>{d.year}</div>
                                    <div className='rounded-full h-[3px] w-[3px] bg-white'></div>
                                    <div>{d.category}</div>
                                    <div className='rounded-full h-[3px] w-[3px] bg-white'></div>
                                    <div>{d.rating}</div>
                                </div>
                                <h2 className='font-medium text-body_medium text-white'>{d.title}</h2>
                            </div>
                            <div className='absolute right-[8px] top-[8px] flex justify-center items-center w-[32px] h-[32px] bg-[rgba(0,0,0,0.4)] rounded-full'>
                                <Image
                                    src={bookmarked[i] ? "/assets/icon-bookmark-full.svg" : "/assets/icon-bookmark-empty.svg"}
                                    width={11.67}
                                    height={14}
                                    alt="logo"
                                    className=''
                                    onClick={() => bookmarkClickHandler(i)}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Trending