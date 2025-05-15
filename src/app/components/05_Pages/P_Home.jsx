import React, { useState } from 'react';
import { PlusCircle } from '@phosphor-icons/react';
import M_WelcomeBlock from '../02_Molecules/M_WelcomeBlock';
import A_Button from '../01_Atoms/A_Button';
import P_Generator from './P_Generator';
import M_HomeNav from '../02_Molecules/M_HomeNav';

export default function P_Home({ savedPresentations = [] }) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = (selections) => {
    console.log('Generating with selections:', selections);
    parent.postMessage({ 
      pluginMessage: { 
        type: 'generate-slide',
        ...selections
      }
    }, '*');
  };

  const handleGeneratorClose = () => {
    setIsGenerating(false);
  };

  if (isGenerating) {
    return (
      <P_Generator
        onComplete={handleGenerate}
        onCancel={handleGeneratorClose}
      />
    );
  }

  return (
    <div style={{ 
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'white',
      gap: '40px',
      padding: '20px'
    }}>
      <M_HomeNav />
      <M_WelcomeBlock />
      
      {/* Display saved presentations */}
      {savedPresentations.length > 0 && (
        <div style={{
          width: '100%',
          maxWidth: '600px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <h3 style={{ margin: 0 }}>Recent Presentations</h3>
          {savedPresentations.map((presentation) => (
            <div
              key={presentation.id}
              style={{
                padding: '16px',
                border: '1px solid #E5E5E5',
                borderRadius: '8px',
                backgroundColor: '#F8F8F8'
              }}
            >
              <h4 style={{ margin: '0 0 8px 0' }}>{presentation.projectName}</h4>
              <div style={{ fontSize: '14px', color: '#666' }}>
                <p style={{ margin: '4px 0' }}>Template: {presentation.template}</p>
                <p style={{ margin: '4px 0' }}>Palette: {presentation.palette}</p>
                <p style={{ margin: '4px 0' }}>Font: {presentation.font}</p>
                <p style={{ margin: '4px 0', fontSize: '12px', color: '#999' }}>
                  Created: {new Date(presentation.timestamp).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      <A_Button 
        icon={PlusCircle}
        weight="fill"
        text="Create New Presentation"
        variant="action_block"
        iconPosition="up"
        onClick={() => setIsGenerating(true)}
      />
    </div>
  );
}