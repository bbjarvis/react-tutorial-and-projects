import React, { useState, useEffect } from 'react'

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [pixel, setPixel] = useState(window.innerWidth)

  const checkPixel = () => {
    setPixel(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', checkPixel)
    return () => {
      console.log('changesize')
      window.removeEventListener('resize', checkPixel)
    }
  }, [])
  return (
    <>
      <h1>Window</h1>
      <h2>{pixel} PX</h2>
    </>
  )
}

export default UseEffectCleanup
