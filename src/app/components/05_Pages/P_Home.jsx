import React, { useState } from 'react';
import { PlusCircle } from '@phosphor-icons/react';
import M_WelcomeBlock from '../02_Molecules/M_WelcomeBlock';
import A_Button from '../01_Atoms/A_Button';
import P_Generator from './P_Generator';
import M_HomeNav from '../02_Molecules/M_HomeNav';

export default function P_Home() {
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
      <A_Button 
        icon={PlusCircle}
        weight="fill"
        text="Looks quite empty..."
        variant="action_block"
        iconPosition="up"
        onClick={() => setIsGenerating(true)}
      />
    </div>
  );
}