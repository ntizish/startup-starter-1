import React, { useEffect, useState } from 'react';
import A_Button from '../01_Atoms/A_Button';
import M_GenerationNav from '../02_Molecules/M_GenerationNav';
import { ArrowCircleRight } from '@phosphor-icons/react';
import M_TemplateOption from '../02_Molecules/M_TemplateOption';
import creativeMessPreview from '../../assets/images/slides/CM/preview.png';
import { getAllTemplates } from '../../../libraries/templateRegistry';

export default function P_TemplateSelection({ onSelect, onBack, selectedTemplate, onTemplateSelect }) {
  const [availableTemplates, setAvailableTemplates] = useState([]);

  useEffect(() => {
    // Get all available templates from the registry
    const templates = getAllTemplates();
    
    // Map templates to include preview images
    const templatesWithPreviews = templates.map(template => {
      // For now, hardcode the preview image for Creative Mess
      // In a real app, you'd have a more dynamic way to get these
      let previewImage = null;
      if (template.preview) {
        previewImage = template.preview;
      }
      
      return {
        ...template,
        image: previewImage
      };
    });
    
    setAvailableTemplates(templatesWithPreviews);
  }, []);

  return (
    <div className="P_ParameterSelection">
      <div className="content-container">
        <M_GenerationNav onBack={onBack} />
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
              <div className="M_StepIndicator">
                  <div className="A_StepDot A_StepDot--active"><div className="A_StepDot_Inner"></div></div>
                  <div className="A_StepDot"></div>
                  <div className="A_StepDot"></div>
                  <div className="A_StepDot"></div>
              </div>

              <h1 className="A_Text A_Text--heading A_Text--heading-center" style={{width: '428px'}}>What graphics suit your project the best?</h1>
            </div>
            
            <div className="template-options" style={{width: '100%'}}>
              {availableTemplates.map((template) => (
                <M_TemplateOption
                  key={template.id}
                  image={template.image}
                  tags={template.tags}
                  isSelected={selectedTemplate === template.id}
                  onClick={() => {
                    console.log('Template selected:', template.id);
                    onTemplateSelect(template.id);
                  }}
                />
              ))}
            </div>
        </div>
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