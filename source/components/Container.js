import React from 'react';

export default function Container({children, style}) {
  return (
    <div className="container" style={{paddingBottom: '4rem', ...style}}>
      {children}
    </div>
  )
}
