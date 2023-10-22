"use client"
import React, { useContext } from 'react'

import Image from 'next/image'

import { WindowSizeContext} from '@/context/WindowSizeContext'

const Nav = () => {

    const { windowWidth } = useContext(WindowSizeContext) as WindowSizeContextType

    return (
        <div className='relative flex lg:flex-col justify-between items-center px-[16px] py-[18px] lg:p-[30px] w-full lg:w-[96px] h-[56px] lg:h-full md:h-[72px] bg-semi_dark_blue md:rounded-[10px]'>
            <div>
                <Image
                    src="/assets/logo.svg"
                    width={windowWidth > 767 ? 32 : 25}
                    height={windowWidth > 767 ? 25.6 : 20}
                    alt="logo"
                    className='cursor-pointer'
                />
            </div>
            <div className='lg:absolute lg:top-[130.6px] flex lg:flex-col items-center gap-[24px] lg:gap-[40px]'>
                <Image
                    src="/assets/icon-nav-home.svg"
                    width={windowWidth > 768 ? 20 : 16}
                    height={windowWidth > 768 ? 20 : 16}
                    alt="logo"
                    className='cursor-pointer'
                />
                <Image
                    src="/assets/icon-nav-movies.svg"
                    width={windowWidth > 768 ? 20 : 16}
                    height={windowWidth > 768 ? 20 : 16}
                    alt="logo"
                    className='cursor-pointer'
                />
                <Image
                    src="/assets/icon-nav-tv-series.svg"
                    width={windowWidth > 768 ? 20 : 16}
                    height={windowWidth > 768 ? 20 : 16}
                    alt="logo"
                    className='cursor-pointer'
                />
                <Image
                    src="/assets/icon-nav-bookmark.svg"
                    width={windowWidth > 768 ? 20 : 16}
                    height={windowWidth > 768 ? 20 : 16}
                    alt="logo"
                    className='cursor-pointer'
                />
            </div>
            <div>
                <Image
                    src="/assets/image-avatar.png"
                    width={windowWidth > 767 ? 40 : 24}
                    height={windowWidth > 767 ? 40 : 24}
                    alt="logo"
                    className='cursor-pointer'
                />
            </div>
        </div>

    )
}

export default Nav