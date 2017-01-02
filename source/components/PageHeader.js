import React from 'react';

export default function PageHeader({title, description}) {
  return (
    <div className="page-header">
      <h1>
        {title}
        {description && <span><br/><small>{description}</small></span>}
      </h1>
    </div>
  )
}
