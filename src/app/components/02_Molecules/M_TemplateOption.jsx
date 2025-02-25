import React from 'react';
import A_Tag from '../01_Atoms/A_Tag';

export default function M_TemplateOption({ 
  image, 
  tags = [], 
  isSelected, 
  onClick 
}) {
  return (
    <button
      className={`M_TemplateOption ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <div className="template-image">
        <img src={image} alt="Template preview" />
      </div>
      <div className="M_TemplateTags">
        {tags.slice(0, 3).map((tag, index) => (
          <A_Tag 
            key={index} 
            text={tag.text}
            backgroundColor={tag.backgroundColor}
            textColor={tag.textColor}
          />
        ))}
      </div>
    </button>
  );
} 