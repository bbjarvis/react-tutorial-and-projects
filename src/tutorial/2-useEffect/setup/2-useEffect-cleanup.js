import React, { useState, useEffect } from 'react'

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [pixel, setPixel] = useState(window.innerWidth)
  useEffect(() => {
    setPixel(window.innerWidth)
  })
  return (
    <>
      <h1>Window</h1>
      <h2>{pixel} PX</h2>
    </>
  )
}

export default UseEffectCleanup
