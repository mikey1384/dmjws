import React from 'react';

export default function PageHeading({title, description, style, titleColor}) {
  return (
    <div style={{marginTop: '2em'}}>
      <h1
        style={{color: titleColor}}
      >{title}</h1>
      {description && <p className="text-muted">{description}</p>}
    </div>
  )
}
