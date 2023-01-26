import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='search or start a new chat'/>
      </div>
      <div className='userChat' >
        <img src='https://images.unsplash.com/photo-1674238923886-58c5ee7823aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80' alt='' />
        <div className='userChatInfo' >
          <span>jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search