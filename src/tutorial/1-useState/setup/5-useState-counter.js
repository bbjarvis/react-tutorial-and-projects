import React, { useState } from 'react'

const UseStateCounter = () => {
  const [count, setCount] = useState(0)

  const decrease = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }

  const increase = () => {
    setCount(count + 1)
  }

  const increaseLater = () => {
    setTimeout(() => {
      setCount((prev) => {
        return prev + 1
      })
    }, 3000)
  }

  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>Regular Counter</h2>
        <h1>{count}</h1>
        <button className='btn' onClick={decrease}>
          Decrease
        </button>
        <button className='btn' onClick={reset}>
          Reset
        </button>
        <button className='btn' onClick={increase}>
          Increase
        </button>
      </section>

      <section style={{ margin: '4rem 0' }}>
        <h2>More Complex Counter</h2>
        <h1>{count}</h1>
        <button className='btn' onClick={increaseLater}>
          Increase Later
        </button>
      </section>
    </>
  )
}

export default UseStateCounter
