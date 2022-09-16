import React from 'react'

function Heading({title, description}) {
  return (
    <div className='heading'>
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
  )
}

export default Heading