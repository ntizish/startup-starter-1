import React from 'react';
import A_Button from '../01_Atoms/A_Button';
import M_GenerationNav from '../02_Molecules/M_GenerationNav';
import M_PaletteOption from '../02_Molecules/M_PaletteOption';

export default function P_PaletteSelection({ onSelect, onBack, selectedPalette, onPaletteSelect }) {
  const palettes = [
    {
      id: 'CM1',
      colors: ['#FFFFFF', '#000000', '#8D8D8D'],
      tags: [
        { 
          text: "Minimal", 
          backgroundColor: "#E5E7EB",
          textColor: "#374151"
        },
        { 
          text: "Modern", 
          backgroundColor: "#C1EEBB",
          textColor: "#28661E"
        }
      ]
    },
    {
      id: 'CM2',
      colors: ['#CBCCD0', '#FFFFFF', '#92959E'],
      tags: [
        { 
          text: "Creative", 
          backgroundColor: "#FDE68A",
          textColor: "#92400E"
        },
        { 
          text: "Modern", 
          backgroundColor: "#C1EEBB",
          textColor: "#28661E"
        }
      ]
    }
  ];

  return (
    <div className="P_ParameterSelection">
      <div className="content-container">
        <M_GenerationNav onBack={onBack} />
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center', width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
            <div className="M_StepIndicator">
              <div className="A_StepDot"><div className="A_StepDot_Inner"></div></div>
              <div className="A_StepDot A_StepDot--active"><div className="A_StepDot_Inner"></div></div>
              <div className="A_StepDot"></div>
              <div className="A_StepDot"></div>
            </div>

            <h1 className="A_Text A_Text--heading A_Text--heading-center" style={{width: '428px'}}>What palette suits your project the best?</h1>
          </div>
          
          <div className="template-options" style={{width: '100%'}}>
            {palettes.map((palette) => (
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