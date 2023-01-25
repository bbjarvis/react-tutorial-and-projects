import React, { useState } from 'react';

const UseStateBasics = () => {
  const [title, setTitle] = useState('Random Title')
  const titles = ['Random Title', 'Hello World', 'Another Title']
  
  const handleClick = () => {
    const random = Math.floor(Math.random() * titles.length)
    setTitle(titles[random])
  }
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
