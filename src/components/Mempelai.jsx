import React from 'react'
import bg3 from '../assets/bg3.jpg'
import groom from '../assets/groom.jpg'
import { AiOutlineInstagram } from 'react-icons/ai'

const Mempelai = () => {
  return (
    <div className='w-full h-screen'>
        <div className='w-full h-full bg-stone-400/90 absolute'>
            <img className='w-full h-full object-cover mix-blend-overlay rotate-180' src={bg3} alt="/" />
        </div>
        <div className='flex flex-col pt-10 w-full text-center text-black relative'>
            <p className='font-alex-brush text-5xl'>Calon Pengantin</p>
            <img src={groom} alt="/" className='rounded-tr-3xl rounded-bl-3xl m-auto w-52 h-52 my-4' />
            <p className='font-alex-brush text-4xl'>Biskuit Romeo</p>
            <p className='font-mono'>Putra dari</p>
            <p className='font-mono'>Bapak Roma dan Ibu Arden</p>
            <AiOutlineInstagram className='mx-auto mt-2' size={25}/>
        </div>
    </div>
  )
}

export default Mempelai