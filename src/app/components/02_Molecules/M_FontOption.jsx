import React from 'react';
import A_Tag from '../01_Atoms/A_Tag';

export default function M_FontOption({ font, isSelected, onClick }) {
  return (
    <button className={`M_FontOption ${isSelected ? 'selected' : ''}`} onClick={onClick}>
      <span className="font-sample" style={{ fontFamily: font.name }}>
        Aa Bb Cc
        <br />
        123
      </span>
      <A_Tag 
        text={font.name}
        backgroundColor="#F7F691"
        textColor="#61601C"
        textAlign="left"
      />
    </button>
  );
} 