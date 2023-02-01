import React, { useState } from 'react'

const UseStateCounter = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Regular Counter</h2>
      <h1>{count}</h1>
      <button className='btn'>Decrease</button>
      <button className='btn'>Reset</button>
      <button className='btn'>Increase</button>
      <h1></h1>

      <h2>More Complex Counter</h2>
      <h1>{count}</h1>
      <button className='btn'>Increase Later</button>
    </>
  )
}

export default UseStateCounter
