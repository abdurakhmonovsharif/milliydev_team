import logo from '../assets/logo.png'
import left_hero_image from '../assets/hero-left.png'
import React from 'react'
const Hero = () => {
  return (
    <React.Fragment>
    <section className={`w-full pl-[70px] pt-[33px]   bg_hero_liner relative  h-screen max-h-[720px]`}>
      <div className='w-[165px] h-[47px]'>
        <img src={logo} alt="logo" className='w-full h-full object-contain' />
      </div>
      <div className='py-32 space-y-2'>
        <h1 className='text-6xl  font-bold leading-[150%] text-white'>Are you looking for Web
        <br />
          Developers expert
          team?</h1>
          <p className='text-white/50'>MillyDev team helps you to create unique and modern Web site for your Company or Agency.</p>
      </div>
      <div className='h-full absolute right-0 top-0'>
        <img src={left_hero_image} className='w-full h-full object-contain' alt="hero_left"/>
      </div>
    </section>
      <div className='w-full h-[44px] bg-gb_color'>

      </div>
    </React.Fragment>
  )
}

export default Hero