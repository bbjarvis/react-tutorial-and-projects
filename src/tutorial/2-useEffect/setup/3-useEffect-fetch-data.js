import React, { useState, useEffect } from 'react'

const url = 'https://api.github.com/users'
const title = 'Github Users'

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(url)
        const users = await response.json()

        setUsers(users)
      } catch (error) {
        console.log(error)
      }
    }
    getUsers()
  }, [])

  return (
    <>
      <h3>{title}</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default UseEffectFetchData
