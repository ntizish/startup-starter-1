import React, { useState } from 'react';
import A_Button from '../01_Atoms/A_Button';

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
    <div className="P_ProjectNaming">
      <h1>Name Your Project</h1>
      <div className="project-naming-form">
        <div className="input-group">
          <label htmlFor="projectName">Project Name</label>
          <input
            id="projectName"
            type="text"
            value={projectName}
            onChange={handleNameChange}
            placeholder="Enter project name"
            className={error ? 'error' : ''}
          />
          {error && <span className="error-message">{error}</span>}
        </div>
      </div>
      <div className="navigation">
        <A_Button 
          onClick={onBack} 
          text="Back" 
          variant="secondary"
        />
        <A_Button 
          onClick={handleComplete} 
          text="Generate"
          variant="primary"
          disabled={!projectName.trim() || !!error}
        />
      </div>
    </div>
  );
} 