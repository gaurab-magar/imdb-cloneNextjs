import React from 'react'
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-[400px] w-100 overflow-hidden">
        <Image className="absolute inset-0 h-full w-full object-cover" src={'/images/hero.png'} alt="hero.png" height={400} width={100} />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6 px-4 text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Discover the Best Movies</h1>
        <p className="max-w-[600px] text-lg">Search and explore a vast collection of movies, TV shows, and more.</p>
        </div>
  </section>
  )
}

export default Hero