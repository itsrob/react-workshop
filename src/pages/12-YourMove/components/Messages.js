import React from 'react'

const Messages = (props) => (
  <div>
    {props.messages.map(message => <p key={message}>{message}</p>)}
  </div>
)

export default Messages
