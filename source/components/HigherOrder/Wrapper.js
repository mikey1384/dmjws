import React from 'react'

export default function Wrapper(Component, assets) {
  return function() {
    return (
      <Component {...assets} />
    )
  }
}
