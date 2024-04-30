'use client'

import { useTheme } from 'next-themes';
import React from 'react';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";


const DarkMode = () => {
    const {theme, setTheme , systemTheme} = useTheme();
    const currentTheme = theme === 'system'? systemTheme : theme ;
  return (
    <div>
        {currentTheme == 'dark' ? 
        <MdDarkMode onClick={()=>setTheme('light')} className='text-2xl mx-2 hover:text-blue-400 transition-colors duration-300' />
        :
        <MdLightMode onClick={()=> setTheme('dark')} className='text-2xl mx-2 hover:text-blue-400 transition-colors duration-300' />
        }
    </div>
  )
}

export default DarkMode