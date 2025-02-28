import React, { useState } from 'react';
import P_TemplateSelection from './P_TemplateSelection';
import P_PaletteSelection from './P_PaletteSelection';
import P_FontSelection from './P_FontSelection';
import P_ProjectNaming from './P_ProjectNaming';
import P_GeneratedDeck from './P_GeneratedDeck';

const STEPS = {
  TEMPLATE: 'template',
  PALETTE: 'palette',
  FONT: 'font',
  NAME: 'name',
  DECK: 'deck'
};

export default function P_Generator({ onComplete, onCancel }) {
  const [selections, setSelections] = useState({
    template: '',
    palette: '',
    font: '',
    projectName: '',
    generatedDeckImage: null
  });

  const [currentStep, setCurrentStep] = useState(STEPS.TEMPLATE);

  const handleSelection = (key, value) => {
    setSelections(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleNext = async () => {
    switch(currentStep) {
      case STEPS.TEMPLATE:
        setCurrentStep(STEPS.PALETTE);
        break;
      case STEPS.PALETTE:
        setCurrentStep(STEPS.FONT);
        break;
      case STEPS.FONT:
        setCurrentStep(STEPS.NAME);
        break;
      case STEPS.NAME:
        try {
          // Generate deck and complete the process
          const generatedImage = 'path_to_generated_image';
          const finalSelections = {
            ...selections,
            generatedDeckImage: generatedImage
          };
          
          // Complete the generation process
          onComplete(finalSelections);
          
          // Update local state and show the deck preview
          handleSelection('generatedDeckImage', generatedImage);
          setCurrentStep(STEPS.DECK);
        } catch (error) {
          console.error('Failed to generate deck:', error);
        }
        break;
      case STEPS.DECK:
        // Just handle the download here
        window.location.href = selections.generatedDeckImage;
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
            onComplete={() => handleNext()}
            onBack={() => setCurrentStep(STEPS.FONT)}
            projectName={selections.projectName}
            onNameChange={(name) => handleSelection('projectName', name)}
          />
        );
      case STEPS.DECK:
        return (
          <P_GeneratedDeck
            onBack={() => setCurrentStep(STEPS.NAME)}
            onClose={onCancel}
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