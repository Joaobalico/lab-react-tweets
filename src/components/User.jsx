import React from 'react'

function User(props) {
  return (
    <div>
        <span>{props.userData.name}</span>
        <span>{props.userData.handle}</span>
    </div>
  )
}

export default User