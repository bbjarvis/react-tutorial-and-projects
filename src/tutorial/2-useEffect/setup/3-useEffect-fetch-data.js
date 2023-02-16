import React, { useState, useEffect } from 'react'
import axios from 'axios'

const url = 'https://api.github.com/users'
const title = 'Github Users'

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    // Create an AbortController object
    const controller = new AbortController()
    // Get its signal property
    const signal = controller.signal

    const getUsers = async () => {
      try {
        // Use axios.get with the signal as an option
        const response = await axios.get(url, { cancelToken: signal })
        // Get the data from the response object
        const users = response.data

        setUsers(users)
      } catch (error) {
        // Check if the error is caused by aborting or other reasons
        if (axios.isCancel(error)) {
          console.log('Request canceled')
        } else {
          console.log(error)
        }
      }
    }
    getUsers()

    // Return a cleanup function that aborts the request
    return () => {
      controller.abort()
    }
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
