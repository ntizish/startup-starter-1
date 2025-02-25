import React from 'react';
import A_Button from '../01_Atoms/A_Button';
import M_GenerationNav from '../02_Molecules/M_GenerationNav';
import { ArrowCircleRight } from '@phosphor-icons/react';
import M_TemplateOption from '../02_Molecules/M_TemplateOption';

export default function P_TemplateSelection({ onSelect, onBack, selectedTemplate, onTemplateSelect }) {
  return (
    <div className="P_TemplateSelection">
      <M_GenerationNav onBack={onBack} />
      
      <div className="template-options">
        <M_TemplateOption
          name="Creative Mess"
          imageUrl="src/app/assets/images/slides/CM/preview.png"
          tags={[
            { text: "Creative", fill: true },
            { text: "Modern", fill: false },
            { text: "Dynamic", fill: false }
          ]}
          isSelected={selectedTemplate === 'CreativeMess'}
          onClick={() => {
            console.log('Template selected:', 'CreativeMess');
            onTemplateSelect('CreativeMess')
          }}
        />
      </div>
      
      <div className="navigation">
        <A_Button 
          onClick={onSelect} 
          text="Proceed" 
          variant="primary"
          disabled={!selectedTemplate}
        />
      </div>
    </div>
  );
} 