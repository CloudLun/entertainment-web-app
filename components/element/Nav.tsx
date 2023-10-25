"use client"
import React, { useState, useContext } from 'react'
import { useRouter } from 'next/navigation'

import Image from 'next/image'

import { WindowSizeContext } from '@/context/WindowSizeContext'

const Nav = () => {
    const router = useRouter()
    const { windowWidth } = useContext(WindowSizeContext) as WindowSizeContextType
    const [categoryChecked, setCategoryChecked] = useState({
        home: false,
        movies: false,
        tv: false,
        bookmark: false
    })

    const pageCheckHandler = (e: Category) => {
        const newCategoryChecked = { ...categoryChecked }
        Object.keys(categoryChecked).forEach((c) => c === e ? newCategoryChecked[c] = true : newCategoryChecked[(c) as Category] = false)
        setCategoryChecked(newCategoryChecked)
        e === "home" ? router.push("/") : router.push(e)
    }

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
                    src={`${categoryChecked["home"] ? "/assets/icon-nav-home-full.svg" : "/assets/icon-nav-home-empty.svg"}`}
                    width={windowWidth > 768 ? 20 : 16}
                    height={windowWidth > 768 ? 20 : 16}
                    alt="logo"
                    className='cursor-pointer'
                    onClick={() => pageCheckHandler("home")}
                />
                <Image
                    src={`${categoryChecked["movies"] ? "/assets/icon-nav-movies-full.svg" : "/assets/icon-nav-movies-empty.svg"}`}
                    width={windowWidth > 768 ? 20 : 16}
                    height={windowWidth > 768 ? 20 : 16}
                    alt="logo"
                    className='cursor-pointer'
                    onClick={() => pageCheckHandler("movies")}
                />
                <Image
                    src={`${categoryChecked["tv"] ? "/assets/icon-nav-tv-series-full.svg" : "/assets/icon-nav-tv-series-empty.svg"}`}
                    width={windowWidth > 768 ? 20 : 16}
                    height={windowWidth > 768 ? 20 : 16}
                    alt="logo"
                    className='cursor-pointer'
                    onClick={() => pageCheckHandler("tv")}
                />
                <Image
                    src={`${categoryChecked["bookmark"] ? "/assets/icon-nav-bookmark-full.svg" : "/assets/icon-nav-bookmark-empty.svg"}`}
                    width={windowWidth > 768 ? 20 : 16}
                    height={windowWidth > 768 ? 20 : 16}
                    alt="logo"
                    className='cursor-pointer'
                    onClick={() => pageCheckHandler("bookmark")}
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