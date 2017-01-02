import React from 'react';

export default function Section({style = {textAlign: 'left'}, titleColor, title, description, children}) {
  return (
    <div style={style}>
      <h2 style={{color: titleColor}}>
        {title}
        {description &&
          <span>
            <br />
            <small>{description}</small>
          </span>
        }
      </h2>
      {children}
    </div>
  )
}
