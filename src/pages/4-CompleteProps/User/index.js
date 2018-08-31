import React from 'react'

const User = props => {

  const image = <img src={'http://localhost:8888/' + props.countryCode+ '.png'}></img>

  return (
  <span>
    {props.preferredName || props.name}:{' '}
    <a href={`mailto:${props.email}`}>{props.email}</a>{' '}
    {props.countryCode ? image : null}
  </span>
  )
}

export default User
