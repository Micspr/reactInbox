import React from 'react'

function Message(props) {
  return(
    <div className="row">
      <p>{props.subject}</p>
    </div>
  )
}

export default Message