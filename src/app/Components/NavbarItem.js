'use client';
import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation';

const NavbarItem = ({title,param}) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');
  return (
    <div>
       <Link href={`/?genre=${param}`} className={`transition-all duration-200 hover:text-blue-400 font-semibold ${genre === param ? 'underline underline-offset-8 decoration-2 decoration-blue-500 rounded-lg text-blue-500 transition-all duration-200':''}`} >{title}</Link>
    </div>
  )
}

export default NavbarItem;


