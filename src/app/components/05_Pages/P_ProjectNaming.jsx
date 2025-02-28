import React, { useState } from 'react';
import A_Button from '../01_Atoms/A_Button';
import M_GenerationNav from '../02_Molecules/M_GenerationNav';
import A_GeneratorInput from '../01_Atoms/A_GeneratorInput';

export default function P_ProjectNaming({ onComplete, onBack, projectName, onNameChange }) {
  const [error, setError] = useState('');

  const handleNameChange = (e) => {
    const name = e.target.value;
    if (name.length > 50) {
      setError('Project name must be less than 50 characters');
    } else {
      setError('');
      onNameChange(name);
    }
  };

  const handleComplete = () => {
    if (!projectName.trim()) {
      setError('Please enter a project name');
      return;
    }
    onComplete();
  };

  return (
    <div className="P_ParameterSelection">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center', width: '100%' }}>
        <M_GenerationNav onBack={onBack} />
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center', width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
            <div className="M_StepIndicator">
              <div className="A_StepDot"><div className="A_StepDot_Inner"></div></div>
              <div className="A_StepDot"><div className="A_StepDot_Inner"></div></div>
              <div className="A_StepDot"><div className="A_StepDot_Inner"></div></div>
              <div className="A_StepDot A_StepDot--active"><div className="A_StepDot_Inner"></div></div>
            </div>

            <h1 className="A_Text A_Text--heading A_Text--heading-center" style={{width: '428px'}}>Name Your Project</h1>
          </div>
          
          <div style={{width: '100%', maxWidth: '428px'}}>
            <A_GeneratorInput
              id="projectName"
              value={projectName}
              onChange={handleNameChange}
              placeholder="Projectus"
              error={error}
            />
          </div>
        </div>
      </div>

      <div className="navigation">
        <A_Button 
          onClick={onComplete} 
          text="Proceed" 
          variant="primary"
          disabled={!projectName.trim() || !!error}
        />
      </div>
    </div>
  );
} 