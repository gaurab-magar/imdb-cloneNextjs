import React from 'react'
import Card from './Card'

const Results = ({results}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-5'>
        {
            results.map((result)=>(
                <Card key={result.id} results={result} />
            ))
        }
    </div>
  )
}

export default Results;