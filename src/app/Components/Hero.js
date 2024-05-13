'use client'
import React from 'react'
import Image from 'next/image';
import { motion} from "framer-motion";
import SearchBox from './SearchBox';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';


const Hero = () => {


  return (
    <Swiper
        direction={'vertical'}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
    className=' mySwiper h-72  lg:h-96  overflow-hidden '
  >
    <SwiperSlide>
      <div className="hero ">
        <Image src={'/images/hero0.jpg'} alt='hero0'
          layout="fill"
          objectFit="cover"
          className='w-full'  />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="hero ">
        <Image src={'/images/hero1.jpg'}  alt='hero1'
          layout="fill"
          objectFit="cover" 
          className='w-full'  />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="hero">
        <Image src={'/images/hero2.jpg'} alt='hero2' 
          layout="fill"
          objectFit="cover"
          className='w-full' />
      </div>
    </SwiperSlide>

  </Swiper>
  )
}

export default Hero