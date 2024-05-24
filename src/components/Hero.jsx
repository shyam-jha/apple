import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';

const Hero = () => {
  
  const [videoSrc, setvideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  const handle = () => {
    if(window.innerWidth <760){
      setvideoSrc(smallHeroVideo)
    }
    else{
      setvideoSrc(heroVideo)
    }
  }

  useEffect(() => {
    window.addEventListener('resize',handle);
  
    return () => {
      window.removeEventListener('resize',handle);
    }
  }, [])
  

  useGSAP(()=>{
    gsap.to('#hero', {opacity:1, delay:2})
    gsap.to('#cta', {opacity:1, delay:2})
  },[])
  return (
    <section className='w-full nav-height bg-black relative'>
    <div className='flex flex-col flex-center w-full h-5/6'>
      <p id='hero' className='hero-title'>iPhone 15</p>
      <div className='md:w-10/12 w-9/12'>
        <video className='pointer-event-none' autoPlay muted playsInline={true} key={videoSrc}>
          <source src={videoSrc} type='video/mp4' />
        </video>
      </div>
      <div id='cta' className='flex flex-col items-center  opacity-0 translate-y-20'>
      <a href='#highligths' className='btn'>Buy</a>
      <p className='font-normal text-xl'>From $199/month or $999</p>
    </div>
    </div>
    </section>
  )
}

export default Hero;