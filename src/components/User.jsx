import React from 'react'

function User(props) {
  return (
    <div>
        <span> <b>{props.userData.name}</b> </span>
        <span>{props.userData.handle}</span>
    </div>
  )
}

export default User