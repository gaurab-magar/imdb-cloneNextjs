
import Link from 'next/link';
import React from 'react';

const Menuitem = ({title,address,Icon}) => {
  return (
    <Link href={address} className='hover:text-blue-400'>
        <Icon className='text-3xl' />
    </Link>
  )
}

export default Menuitem