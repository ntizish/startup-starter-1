import React from 'react';
import A_Button from '../01_Atoms/A_Button';
import M_GenerationNav from '../02_Molecules/M_GenerationNav';
import M_FontOption from '../02_Molecules/M_FontOption';

export default function P_FontSelection({ onSelect, onBack, selectedFont, onFontSelect }) {
  const font = {
    id: 'Inter',
    name: 'Inter',
  };

  return (
    <div className="P_ParameterSelection">
      <div className="content-container">
        <M_GenerationNav onBack={onBack} />
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center', width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
            <div className="M_StepIndicator">
              <div className="A_StepDot"><div className="A_StepDot_Inner"></div></div>
              <div className="A_StepDot"><div className="A_StepDot_Inner"></div></div>
              <div className="A_StepDot A_StepDot--active"><div className="A_StepDot_Inner"></div></div>
              <div className="A_StepDot"></div>
            </div>

            <h1 className="A_Text A_Text--heading A_Text--heading-center" style={{width: '428px'}}>Select the perfect font for your project</h1>
          </div>
          
          <div className="template-options" style={{width: '100%'}}>
            <M_FontOption
              font={font}
              isSelected={selectedFont === font.id}
              onClick={() => {
                console.log('Font selected:', font.id);
                onFontSelect(font.id);
              }}
            />
          </div>
        </div>
      </div>

      <div className="navigation">
        <A_Button 
          onClick={onSelect} 
          text="Proceed" 
          variant="primary"
          disabled={!selectedFont}
        />
      </div>
    </div>
  );
} 