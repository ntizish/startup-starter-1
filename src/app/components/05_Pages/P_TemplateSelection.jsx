import React from 'react';
import A_Button from '../01_Atoms/A_Button';
import M_GenerationNav from '../02_Molecules/M_GenerationNav';

export default function P_TemplateSelection({ onSelect, onBack, selectedTemplate, onTemplateSelect }) {
  return (
    <div className="P_TemplateSelection">
    <M_GenerationNav onBack={onBack} />
      <h1>Select Template</h1>
      <div className="template-options">
        <button
          className={`template-option ${selectedTemplate === 'CreativeMess' ? 'selected' : ''}`}
          onClick={() => {
            console.log('Template selected:', 'CreativeMess');
            onTemplateSelect('CreativeMess')
          }}
        >
          <span className="template-name">Creative Mess</span>
          <span className="template-preview">Preview image here</span>
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
          disabled={!selectedTemplate}
        />
      </div>
    </div>
  );
} 