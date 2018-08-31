import React from 'react'

const Title = props => {
  const Hlevel = props.level === undefined ? 'h1' : 'h' + props.level
  return <Hlevel id={props.id}>{props.text}</Hlevel>
}

export default Title
