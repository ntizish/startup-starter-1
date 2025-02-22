import React, { useState } from 'react';
import A_Button from '../01_Atoms/A_Button';

const STEPS = {
  TEMPLATE: 'template',
  PALETTE: 'palette',
  FONT: 'font',
  NAME: 'name'
};

const M_GenerationModal = ({ onComplete, onCancel }) => {
  const [currentStep, setCurrentStep] = useState(STEPS.TEMPLATE);
  const [selections, setSelections] = useState({
    template: '',
    palette: '',
    font: '',
    projectName: ''
  });

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
          <div className="M_GenerationModal__step">
            <h2>Select Template</h2>
            <div className="M_GenerationModal__options">
              {/* Add your template options here */}
              <button 
                className={`option ${selections.template === 'CM' ? 'selected' : ''}`}
                onClick={() => handleSelection('template', 'CM')}
              >
                CM Template
              </button>
              {/* Add more template options */}
            </div>
          </div>
        );

      case STEPS.PALETTE:
        return (
          <div className="M_GenerationModal__step">
            <h2>Select Color Palette</h2>
            <div className="M_GenerationModal__options">
              {/* Add your palette options here */}
            </div>
          </div>
        );

      case STEPS.FONT:
        return (
          <div className="M_GenerationModal__step">
            <h2>Select Font</h2>
            <div className="M_GenerationModal__options">
              {/* Add your font options here */}
            </div>
          </div>
        );

      case STEPS.NAME:
        return (
          <div className="M_GenerationModal__step">
            <h2>Name Your Project</h2>
            <input
              type="text"
              value={selections.projectName}
              onChange={(e) => handleSelection('projectName', e.target.value)}
              placeholder="Enter project name"
            />
          </div>
        );
    }
  };

  return (
    <div className="M_GenerationModal">
      <div className="M_GenerationModal__content">
        {renderStep()}
        <div className="M_GenerationModal__actions">
          <A_Button 
            onClick={onCancel} 
            text="Cancel" 
            variant="secondary"
          />
          <A_Button 
            onClick={handleNext} 
            text={currentStep === STEPS.NAME ? 'Generate' : 'Next'} 
            variant="primary"
          />
        </div>
      </div>
    </div>
  );
};

export default M_GenerationModal; 