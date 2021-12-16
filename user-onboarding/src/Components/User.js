import React from 'react'

function User({ details }) {
  if (!details) {
    return <h3>Working fetching your friend&apos;s details...</h3>
  }

  return (
    <div className='User container'>
      <h2>{details.username}</h2>
      <p>First Name: {details.firstName}</p>
      <p>Last Name: {details.lastName}</p>
      <p>Email: {details.email}</p>
    </div>
  )
}

export default User
