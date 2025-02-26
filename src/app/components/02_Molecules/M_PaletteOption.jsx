import React from 'react';
import A_Tag from '../01_Atoms/A_Tag';

export default function M_PaletteOption({ colors, tags, isSelected, onClick }) {
  return (
    <button className={`M_PaletteOption ${isSelected ? 'selected' : ''}`} onClick={onClick}>
      <div className="palette-preview">
        {colors.map((color, index) => (
          <div 
            key={`${color}-${index}`}
            className="color-circle"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <div className="M_TemplateTags">
        {tags.map((tag, index) => (
          <A_Tag 
            key={`${tag.text}-${index}`}
            text={tag.text}
            backgroundColor={tag.backgroundColor}
            textColor={tag.textColor}
          />
        ))}
      </div>
    </button>
  );
} 