import React from 'react';


export default function Table({columns, rows}) {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index} style={{textAlign: index !== 0 && 'center'}}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, index) => index === 0 ?
              <th key={index} scope="row">{cell}</th> : <td key={index} dangerouslySetInnerHTML={{__html: cell}} />
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
