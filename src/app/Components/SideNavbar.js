'use client';
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';

const SideNavbar = ({isOpen , setisOpen}) => {

  return (
    <>
        {isOpen &&
        <AnimatePresence>
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%', transition: { type: 'spring', stiffness: 200, damping: 30 } }}
            className={`flex w-64 h-screen fixed top-0 right-0 z-40 backdrop-blur bg-white bg-opacity-60`}>
                <div className="rounded-md w-64">
                    <div className="p-4">
                    <h5 className="text-lg font-semibold text-gray-800">Menu</h5>
                    <button type='button' className='p-2 bg-red-500 transition-opacity duration-200' onClick={()=>{setisOpen(false)}}>close</button>
                    </div>
                    <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-gray-200">
                        <a href="#" className="block text-gray-800">Dashboard</a> 
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200">
                        <a href="#" className="block text-gray-800">Analytics</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200">
                        <a href="#" className="block text-gray-800">Reports</a>
                    </li>
                    </ul>
                </div>
            </motion.div>
        </AnimatePresence>
        }
    
    </>

  )
}

export default SideNavbar