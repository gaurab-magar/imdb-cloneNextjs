import React from 'react';
import NavbarItem from './NavbarItem';


const Navbar = () => {
  return (
    <div className='flex dark:bg-gray-400 bg-gray-400 text-white p-4 justify-center gap-4 font-semibold'>
        <NavbarItem title='Trending' param='fetchTrending' />
        <NavbarItem title='TopRated' param='fetchTopRated' />
    </div>
  )
}

export default Navbar