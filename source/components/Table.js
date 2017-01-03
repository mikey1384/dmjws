import React from 'react';


export default function Table({columns, rows}) {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th style={{textAlign: index !== 0 && 'center'}}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr>
            {row.map((cell, index) => index === 0 ?
              <th scope="row">{cell}</th> : <td dangerouslySetInnerHTML={{__html: cell}} />
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
