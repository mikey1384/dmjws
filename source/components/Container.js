import React from 'react';

export default function Container({children}) {
  return (
    <div className="container" style={{paddingBottom: '4em'}}>
      {children}
    </div>
  )
}
