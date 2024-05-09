'use client'

import { useRouter } from 'next/navigation';
import React from 'react'
import { useState } from 'react';
const SearchBox = () => {

    const [search,setSearch] = useState('');
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/search/${search}`);
        setSearch('');
    }
  return (
    <>
        <form onSubmit={handleSubmit} className="flex items-center max-w-sm mx-auto m-4 px-4">   
            <label for="simple-search" className="sr-only">Search</label>
            <div className="w-full">
                <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" id="simple-search" className="outline-none bg-gray-50  text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..." required />
            </div>
            <button  disabled={search == ''}  type="submit" className="disabled:bg-gray-300 p-2.5 ms-2 text-sm font-medium text-white bg-blue-200 rounded-lg  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
            </button>
        </form>
    </>
  )
}

export default SearchBox