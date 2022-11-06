import React from 'react'

export default function MessProfile({user}) {
  return (
    <div>
     <p>{user.id + user.name + user.rating}</p>

    </div>
  )
}
