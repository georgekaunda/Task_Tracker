import React from 'react'

const Header = (props) => {
  return (
    <header class='header'>
        <h1>{props.title}</h1>
        <button className='btn'>Add</button>
    </header>
  )
}

export default Header