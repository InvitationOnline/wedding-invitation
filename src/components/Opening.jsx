import React from 'react'
import bg2 from '../assets/bg2.jpg'

const Opening = () => {
  return (
    <div className='w-full h-screen'>
        <div className='w-full h-full bg-stone-300/30 absolute'>
            <img className='w-full h-full object-cover mix-blend-overlay' src={bg2} alt="/" />
        </div>
        <div className='flex flex-col gap-4 pt-20 w-full text-center text-white relative'>
            <p className='uppercase tracking-widest font-mono'>The Wedding Of</p>
            <p className='tracking-widest font-dancing text-6xl'>Romeo & Juliet</p>
            <p className='tracking-widest font-mono'>20.22.2022</p>
        </div>
    </div>
  )
}

export default Opening