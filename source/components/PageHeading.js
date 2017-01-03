import React from 'react';

export default function PageHeading({title, description, style}) {
  return (
    <div style={{marginTop: '2em'}}>
      <h1>{title}</h1>
      {description && <p className="text-muted">{description}</p>}
    </div>
  )
}
