import React from 'react';
import './Book.css';

export function Book({title, onClick}) {
  return (
    <div className="answer" onClick={() => {onClick(title);}}>
      <h4>{title}</h4>
    </div>
  );
}