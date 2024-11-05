import React from 'react'

export default function ProductCategories({categories}) {
  return (
    <div>
        {
            categories.map((category,idx)=>{
            <button key={idx} className='btn rounded-full'>{category}</button>
            })
        }
    </div>
  )
}
