import React from 'react';

export default function LoginCover({text, textColor}) {
  return (
    <div
      className="login-cover-photo"
      style={{
        height: '28.8em',
        minHeight: '190px',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '2px'
      }}
    >
      <div className="container-fluid">
        <h1
          className="display-3"
          style={{
            color: textColor || '#fff',
            marginTop: '2px',
            marginBottom: '2px',
            fontWeight: 'bold'
          }}
        >
          {text}
        </h1>
      </div>
    </div>
  )
}
