'use client'
import React from 'react'
import Image from 'next/image';
import { motion} from "framer-motion";
import SearchBox from './SearchBox';


const Hero = () => {


  return (
    <section className="relative h-[400px] w-100 overflow-hidden">
        <Image className="absolute inset-0 h-full w-full object-cover" src={'/images/hero.png'} alt="hero.png" height={400} width={100} />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6 px-4 text-center text-white">
          <motion.h1 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}    
              transition={{ duration: 0.6 }}    
          className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Discover the Best Movies
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}    
            transition={{ duration: 0.6 }}
          className="max-w-[600px] text-lg">Search and explore a vast collection of movies, TV shows, and more.</motion.p>
          <SearchBox />
        </div>
  </section>
  )
}

export default Hero