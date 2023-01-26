import React from 'react';
import Input from './Input';
import Messages from './Messages';
const Chat = () => {
  return (
    <div className='chat'>
        <div className='chatInfo'>
          <span>Jane</span>
            <div className='chatIcons'>
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
            </div>
        </div>
        <Messages />
        <Input />
    </div>
  )
}

export default Chat