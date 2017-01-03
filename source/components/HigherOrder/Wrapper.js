import React from 'react'

export default function Wrapper(Component, data) {
  return function() {
    return (
      <Component {...data} />
    )
  }
}
