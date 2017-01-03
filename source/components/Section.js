import React from 'react';

export default function Section({style, titleColor, title, description, children}) {
  return (
    <div style={{...style, textAlign: 'left'}}>
      <h2 style={{color: titleColor}}>{title}</h2>
      {description && <p>{description}</p>}
      {children}
    </div>
  )
}
