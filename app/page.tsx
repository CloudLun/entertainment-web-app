"use client"
import Image from 'next/image'
import Nav from '@/components/element/Nav'
import Main from '@/components/element/main/Main'


import { WindowSizeProvider } from "../context/WindowSizeContext"

export default function Home() {
  return (
    <div className='lg:flex lg:gap-[36px] md:p-[25px] lg:p-[32px] w-[100vw]  h-[100vh] bg-dark_blue'>
      <WindowSizeProvider>
        <Nav />
        <Main />
      </WindowSizeProvider>
    </div>
  )
}
