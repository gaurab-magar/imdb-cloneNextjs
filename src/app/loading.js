import Image from 'next/image'
import React from 'react'

const loading = () => {
  return (
    <div className='flex justify-center items-center'>
        <Image src='loading.svg' alt='loading' height={300} width={200} />
        {/* <img src='loading.svg' alt='loading' /> */}
    </div>
  )
}

export default loading