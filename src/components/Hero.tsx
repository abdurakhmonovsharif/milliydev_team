import logo from '../assets/logo.png'
import left_hero_image from '../assets/hero-left.png'
import React from 'react'
const Hero = () => {
  return (
    <React.Fragment>
    <section className={`w-full  pl-[35px] lg:pl-[70px] pt-[33px]  bg_hero_liner relative  lg:h-screen lg:max-h-[720px] md:h-[360px]`}>
      <div className='mobile_bg_image'></div>
      <div className='lg:w-[165px] lg:h-[47px] w-[82.5px] h-[23.5px]'>
        <img src={logo} alt="logo" className='w-full h-full object-contain' />
      </div>
      <div className='py-8 lg:py-32 space-y-2 z-20 relative'>
        <h1 className='text-3xl md:text-4xl lg:text-6xl  font-bold !leading-[150%] text-white'>Are you looking for Web
        <br  className='lg:block md:block hidden'/> {" "}
          Developers expert
          team?</h1>
          <p className='text-white/75 md:text-base lg:text-[18px] text-sm w-full break-words'>MillyDev team helps you to create unique and modern 
          <br  className='lg:hidden'/> {" "}
           Web site for your Company or Agency.</p>
      </div>
      <div className='h-full hidden md:block lg:block absolute  right-0 top-0 lg:z-10 blur-[2.5px] lg:blur-none'>
        <img src={left_hero_image} className='w-full h-full object-contain' alt="hero_left"/>
      </div>
    </section>
      <div className='w-full h-[34px] lg:h-[44px] bg-gb_color'>

      </div>
    </React.Fragment>
  )
}

export default Hero