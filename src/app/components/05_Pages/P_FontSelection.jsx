import React from 'react';
import A_Button from '../01_Atoms/A_Button';

export default function P_FontSelection({ onSelect, onBack, selectedFont, onFontSelect }) {
  const font = {
    id: 'inter',
    name: 'Inter',
    sample: 'Aa Bb Cc 123'
  };

  return (
    <div className="P_FontSelection">
      <h1>Select Font</h1>
      <div className="font-options">
        <button
          className={`font-option ${selectedFont === font.id ? 'selected' : ''}`}
          onClick={() => {
            console.log('Font selected:', font.id);
            onFontSelect(font.id);
          }}
        >
          <span className="font-name">{font.name}</span>
          <span className="font-sample" style={{ fontFamily: font.name }}>
            {font.sample}
          </span>
        </button>
      </div>
      <div className="navigation">
        <A_Button 
          onClick={onBack} 
          text="Back" 
          variant="secondary"
        />
        <A_Button 
          onClick={onSelect} 
          text="Next" 
          variant="primary"
          disabled={!selectedFont}
        />
      </div>
    </div>
  );
} 