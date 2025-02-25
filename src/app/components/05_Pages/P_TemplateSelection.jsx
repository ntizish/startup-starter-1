import React from 'react';
import A_Button from '../01_Atoms/A_Button';
import M_GenerationNav from '../02_Molecules/M_GenerationNav';
import { ArrowCircleRight } from '@phosphor-icons/react';
import M_TemplateOption from '../02_Molecules/M_TemplateOption';
import creativeMessPreview from '../../assets/images/slides/CM/preview.png';

export default function P_TemplateSelection({ onSelect, onBack, selectedTemplate, onTemplateSelect }) {
  return (
    <div className="P_TemplateSelection">
      <M_GenerationNav onBack={onBack} />
      
      <div className="template-options" style={{width: '100%'}}>
        <M_TemplateOption
          image={creativeMessPreview}
          tags={[
            { 
              text: "Creative", 
              backgroundColor: "#C7D6EB",
              textColor: "#1E3D66"
            },
            { 
              text: "Modern", 
              backgroundColor: "#C1EEBB",
              textColor: "#28661E"
            }
          ]}
          isSelected={selectedTemplate === 'CreativeMess'}
          onClick={() => onTemplateSelect('CreativeMess')}
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