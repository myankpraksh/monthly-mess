import React from 'react';
import './ErrorMessage.css';

export default function ErrorMessage({error}) {
  return (
    <div className="ErrorContainer f2 fw6 shadow-3">{error}</div>
  )
}
