'use client';
import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const NavbarItem = ({title,param}) => {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');
  return (
    <div>
        <Link href={`/?genre=${param}}`}>
            <span  className={`hover:text-blue-500 border
                ${genre === param ? 'underline decoration-4 decoration-blue-400 rounded-lg':''}
                `}>{title}
            </span>
        </Link>
    </div>
  )
}

export default NavbarItem;