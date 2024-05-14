import React from 'react';
import NavbarItem from './NavbarItem';


const Navbar = () => {
  return (
    <div className='flex backdrop-blur bg-gray-300 bg-opacity-70 shadow-lg p-4 justify-center gap-4 font-semibold text-white'>
        <NavbarItem title='Trending' param='fetchTrending' />
        <NavbarItem title='TopRated' param='fetchTopRated' />
    </div>
  )
}

export default Navbar