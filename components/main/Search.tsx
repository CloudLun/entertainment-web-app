"use client"

import React, { useContext } from 'react'
import Image from 'next/image'




const Search = () => {

    return (
        <form className='flex items-center gap-[24px] my-[24px] md:my-[36px] lg:my-[28px] px-[16px] md:px-0 h-[24px] md:h-[32px]'>
            <Image
                src="/assets/icon-search.svg"
                width={24}
                height={24}
                alt="logo"
                className='cursor-pointer'
            />
            <input type="text" name="name" className='w-[250px] md:w-[400px] text-white bg-dark_blue md:placeholder:text-[18px]' placeholder='Search for movies or TV series' />
        </form>
    )
}

export default Search