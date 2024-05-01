import React from 'react';
import Image from 'next/image';
import { FaLink } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


const page = () => {

  return (
    <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <Image src='/images/about.jpg' alt='aboutImage' width={300} height={300} className='rounded-3xl' ></Image>
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-12 md:pl-12 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-semibold text-blue-700 dark:text-red-700">G-Movie
            </h1>
            <p class="mb-8 leading-relaxed font-serif dark:text-white">
                Discover the ultimate movie experience at GMovie! created by <strong className='text-blue-500 font-semibold dark:text-red-700'>Gaurab magar</strong> Explore a vast collection of films, from timeless classics to the latest blockbusters. Your journey starts here at GMovie, your go-to destination for all things film</p>
            <div>
                <p className='font-medium dark:text-white'>
                    G-movie is a movie streaming platform that focuses on providing the latest and most popular.
                </p>
            </div>
            <div className=' w-full flex items-center justify-center my-12 text-3xl space-x-5  dark:text-white '>
                <MdEmail className='hover:text-blue-900 hover:scale-125 transition-all duration-300' />
                <FaLink className='hover:text-blue-900 hover:scale-125 transition-all duration-300' />
                <FaGithub className='hover:text-blue-900 hover:scale-125 transition-all duration-300' />
                <FaLinkedin className='hover:text-blue-900 hover:scale-125 transition-all duration-300' />
                <FaInstagram className='hover:text-blue-900 hover:scale-125 transition-all duration-300' />
                <FaFacebook className='hover:text-blue-900 hover:scale-125 transition-all duration-300' />
            </div>
            </div>
        </div>
    </section>
  )
}

export default page