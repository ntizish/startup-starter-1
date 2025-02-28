import React from 'react';

export default function A_GeneratorInput({ 
  id,
  value,
  onChange,
  placeholder,
  error,
  type = 'text'
}) {
  return (
    <div className="A_GeneratorInput">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`A_Text A_Text--heading-large ${error ? 'error' : ''}`}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
} 