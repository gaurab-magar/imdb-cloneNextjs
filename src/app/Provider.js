'use client'
import React from 'react';
import { ThemeProvider } from 'next-themes';


const Provider = ({children}) => {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
        <div className='text-grey-700 dark:text-grey-200 dark:bg-grey-700 transition-colors duration-300'>
            {children}
        </div>
    </ThemeProvider>
  )
}

export default Provider