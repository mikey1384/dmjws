import React from 'react';

export default function Card({title, description, src, topMargin}) {
  return (
    <div className="card">
      <img className="card-img-top img-fluid" src={src} alt={title} style={{marginTop: !!topMargin && '1rem'}} />
      <div className="card-block">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-xs-left">{description}</p>
      </div>
    </div>
  )
}
