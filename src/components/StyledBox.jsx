import React from 'react'

export function StyledBox(props) {
  const extraClassName = props.extraClassName

  return <div className={`styled-box ${extraClassName}`}>{props.children}</div>
}
