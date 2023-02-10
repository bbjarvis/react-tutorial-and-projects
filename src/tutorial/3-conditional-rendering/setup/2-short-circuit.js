import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world'
  // const secondValue = text && 'hello world'

  const [text, setText] = useState(true)
  return (
    <>
      <h1>John Doe</h1>
      <button
        className='btn'
        onClick={() => (text ? setText(false) : setText(true))}
      >
        Toggle Error
      </button>
      {(!text && (
        <>
          <h1>Error...</h1>
          <p>there is an error</p>
        </>
      )) ||
        (text && <h2>There Is No Error</h2>)}
    </>
  )
}

export default ShortCircuit
