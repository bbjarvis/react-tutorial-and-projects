import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world'
  // const secondValue = text && 'hello world'
  const text = 'There Is No Error'

  return (
    <>
      <h1>John Doe</h1>
      <button className='btn'>Toggle Error</button>
      {text && <h1>Error...</h1>}
    </>
  )
}

export default ShortCircuit
