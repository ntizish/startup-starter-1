import React, { useEffect, useState } from 'react';
import A_Button from '../01_Atoms/A_Button';
import M_GenerationNav from '../02_Molecules/M_GenerationNav';
import M_PaletteOption from '../02_Molecules/M_PaletteOption';
import { getPalettesForTemplate } from '../../../libraries/templateRegistry';

export default function P_PaletteSelection({ onSelect, onBack, selectedPalette, onPaletteSelect, selectedTemplate }) {
  const [availablePalettes, setAvailablePalettes] = useState([]);
  
  useEffect(() => {
    // Make sure we have a selectedTemplate
    if (!selectedTemplate) return;
    
    // Get all available palettes for the selected template
    const palettes = getPalettesForTemplate(selectedTemplate);
    setAvailablePalettes(palettes);
  }, [selectedTemplate]);

  return (
    <div className="P_ParameterSelection">
      <div className="content-container">
        <M_GenerationNav onBack={onBack} />
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center', width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
            <div className="M_StepIndicator M_StepIndicator--small">
              <div className="A_StepDot A_StepDot--small"><div className="A_StepDot_Inner A_StepDot_Inner--small"></div></div>
              <div className="A_StepDot A_StepDot--small A_StepDot--active"><div className="A_StepDot_Inner A_StepDot_Inner--small"></div></div>
              <div className="A_StepDot A_StepDot--small"></div>
              <div className="A_StepDot A_StepDot--small"></div>
            </div>

            <h1 className="A_Text A_Text--heading A_Text--heading-center" style={{width: '290px'}}>What palette suits your project the best?</h1>
          </div>
          
          <div className="template-options" style={{width: '100%', padding: '0 0 24px 0'}}>
            {availablePalettes.map((palette) => (
              <M_PaletteOption
                key={palette.id}
                colors={palette.colors}
                tags={palette.tags}
                isSelected={selectedPalette === palette.id}
                onClick={() => {
                  console.log('Palette selected:', palette.id);
                  onPaletteSelect(palette.id);
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
          disabled={!selectedPalette}
        />
      </div>
    </div>
  );
} 