import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>ChatNow</span>
      <div className='user'>
        <img src='https://images.unsplash.com/photo-1674238923886-58c5ee7823aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80' alt=''  />
        <span>john</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar