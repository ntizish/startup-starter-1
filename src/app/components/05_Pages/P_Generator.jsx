import React, { useState } from 'react';
import P_TemplateSelection from './P_TemplateSelection';
import P_PaletteSelection from './P_PaletteSelection';
import P_FontSelection from './P_FontSelection';
import P_ProjectNaming from './P_ProjectNaming';

const STEPS = {
  TEMPLATE: 'template',
  PALETTE: 'palette',
  FONT: 'font',
  NAME: 'name'
};

export default function P_Generator({ onComplete, onCancel }) {
  const [selections, setSelections] = useState({
    template: '',
    palette: '',
    font: '',
    projectName: ''
  });

  const [currentStep, setCurrentStep] = useState(STEPS.TEMPLATE);

  const handleSelection = (key, value) => {
    setSelections(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleNext = () => {
    switch(currentStep) {
      case STEPS.TEMPLATE:
        setCurrentStep(STEPS.PALETTE);
        break;
      case STEPS.PALETTE:
        setCurrentStep(STEPS.FONT);
        break;
      case STEPS.FONT:
        setCurrentStep(STEPS.NAME);
        console.log('Selected options:', {
            template: selections.template,
            palette: selections.palette,
            font: selections.font
        });
        break;
      case STEPS.NAME:
        onComplete(selections);
        break;
    }
  };

  const renderStep = () => {
    switch(currentStep) {
      case STEPS.TEMPLATE:
        return (
          <P_TemplateSelection
            onSelect={() => handleNext()}
            onBack={onCancel}
            selectedTemplate={selections.template}
            onTemplateSelect={(template) => handleSelection('template', template)}
          />
        );
      case STEPS.PALETTE:
        return (
          <P_PaletteSelection
            onSelect={() => handleNext()}
            onBack={() => setCurrentStep(STEPS.TEMPLATE)}
            selectedPalette={selections.palette}
            onPaletteSelect={(palette) => handleSelection('palette', palette)}
          />
        );
      case STEPS.FONT:
        return (
          <P_FontSelection
            onSelect={() => handleNext()}
            onBack={() => setCurrentStep(STEPS.PALETTE)}
            selectedFont={selections.font}
            onFontSelect={(font) => handleSelection('font', font)}
          />
        );
      case STEPS.NAME:
        return (
          <P_ProjectNaming
            onComplete={() => onComplete(selections)}
            onBack={() => setCurrentStep(STEPS.FONT)}
            projectName={selections.projectName}
            onNameChange={(name) => handleSelection('projectName', name)}
          />
        );
    }
  };

  return (
    <div className="P_Generator">
      {renderStep()}
    </div>
  );
} 