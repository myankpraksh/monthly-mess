import React from 'react';
import './ErrorMessage.css';

export default function ErrorMessage({error}) {
  return (
    <div className="ErrorContainer fw6 shadow-3">{error}</div>
  )
}
