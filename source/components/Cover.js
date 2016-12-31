import React from 'react';

export default function Cover({text, textColor}) {
  return (
    <div
      className="jumbotron site-cover-photo"
      style={{
        height: '20em',
        minHeight: '30vh',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '0px'
      }}
    >
      <div className="container-fluid">
        <h1
          style={{
            color: textColor || '#fff',
            marginTop: '0px',
            marginBottom: '0px',
          }}
        >
          {text}
        </h1>
      </div>
    </div>
  )
}
