import React, { useState, useEffect } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'
const MultipleReturns = () => {
  const [loading, setLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState(null)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(url)
        if (!res.ok) {
          setIsError(true)
          setLoading(false)
          return
        }
        const user = await res.json()
        console.log(user)
        setUser(user)
      } catch (error) {
        console.log(error)
        setIsError(true)
      }
      setLoading(false)
    }
    fetchUser()
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }
  if (isError) {
    return <h1>Error</h1>
  }
  const { name, company, bio, blog, login, avatar_url, html_url } = user

  return (
    <div>
      <a href={html_url}>
        <h1>{name}</h1>
      </a>
      <a href={html_url}>
        <img src={avatar_url} alt={login}></img>
      </a>
      <a href={blog}>
        <h2> Works at {company}</h2>
      </a>
      <h3>{bio}</h3>
    </div>
  )
}

export default MultipleReturns
