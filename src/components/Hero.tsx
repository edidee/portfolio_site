import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Hero = () => {
  return (
    <header id='home' className=' bg-black h-screen w-full text-white p-4 '>
      <nav className='flex items-center justify-between'>
<div>
  <Image src="/assets/img/peace-emoji.svg"  alt='logo' width={90} height={90} className='grayscale hover:grayscale-0' />
</div>
<ul className='flex flex-col gap-1 text-lg font-semibold'>
  <li>

  <Link href="#home">Home </Link>
  </li>
  <li>

  <Link href="#about">About </Link>
  </li>
  <li>

  <Link href="#works">Works </Link>
  </li>
  <li>

  <Link href="#blog">Blog </Link>
  </li>
  <li>

  <Link href="#contact">Contact </Link>
  </li>
</ul>
      </nav>
    </header>
  )
}
