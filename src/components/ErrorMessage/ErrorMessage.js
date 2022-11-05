import React from 'react';
import './ErrorMessage.css';

export default function ErrorMessage({error}) {
  return (
    <div>
      {error.length === 0?
      <div></div>
      :
      <div className="ErrorContainer fw6 shadow-3">{error}</div>
      }
    </div>
  )
}
