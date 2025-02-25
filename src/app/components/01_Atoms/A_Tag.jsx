import React from 'react';

export default function A_Tag({ text, textColor, backgroundColor }) {
  return (
    <div 
      className="A_Tag" 
      style={{ 
        backgroundColor: backgroundColor,
        color: textColor
      }}
    >
      {text}
    </div>
  );
} 