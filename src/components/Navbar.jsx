import React from 'react'
import { AiOutlineHome, AiOutlineHeart } from 'react-icons/ai'
import { IoMdImages } from 'react-icons/io'
import { BsEnvelopePaperHeart, BsCalendarHeart } from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className='w-full fixed bottom-0'>
        <div className='rounded-t-3xl bg-stone-300'>
            <div className='grid grid-flow-col py-2 text-sm font-semibold'>
                <div className='flex flex-col items-center'>
                    <AiOutlineHome size={30} />
                    <p>Home</p>
                </div>
                <div className='flex flex-col items-center'>
                    <AiOutlineHeart size={30} />
                    <p>Mempelai</p>
                </div>
                <div className='flex flex-col items-center'>
                    <BsCalendarHeart size={30} />
                    <p>Acara</p>
                </div>
                <div className='flex flex-col items-center'>
                    <IoMdImages size={30} />
                    <p>Galeri</p>
                </div>
                <div className='flex flex-col items-center'>
                    <BsEnvelopePaperHeart size={30} />
                    <p>Ucapan</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar