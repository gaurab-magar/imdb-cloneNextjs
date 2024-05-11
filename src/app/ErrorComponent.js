'use client'
import React from 'react';
import { useEffect } from 'react';

const ErrorComponent = ({error,reset}) => {
    useEffect(()=>{
        document.title=`Error: ${error.message}`;
        return ()=>document.title='React App';
    },[error])
  return (
    <div>
        <h1>Something went wrong</h1>
        <p>{error.message}</p>
        <button onClick={()=>reset()} className='px-3 bg-black rounded-md'>Try again</button>
    </div>
  ) 
}

export default ErrorComponent;