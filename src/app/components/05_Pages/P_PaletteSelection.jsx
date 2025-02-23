import React from 'react';
import A_Button from '../01_Atoms/A_Button';

export default function P_PaletteSelection({ onSelect, onBack, selectedPalette, onPaletteSelect }) {
  const palette = {
    id: 'CM1',
    name: 'Creative Mess 1',
    colors: ['#FFFFFF', '#000000', '#8D8D8D']
  };

  return (
    <div className="P_PaletteSelection">
      <h1>Select Color Palette</h1>
      <div className="palette-options">
        <button
          className={`palette-option ${selectedPalette === palette.id ? 'selected' : ''}`}
          onClick={() => {
            console.log('Palette selected:', palette.id);
            onPaletteSelect(palette.id);
          }}
        >
          <div className="palette-preview">
            {palette.colors.map(color => (
              <div 
                key={color} 
                className="color-sample"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <span>{palette.name}</span>
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
          disabled={!selectedPalette}
        />
      </div>
    </div>
  );
} 