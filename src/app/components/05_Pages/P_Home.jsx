import React, { useState, useEffect } from 'react';
import { PlusCircle, Trash, ArrowsClockwise } from '@phosphor-icons/react';
import M_WelcomeBlock from '../02_Molecules/M_WelcomeBlock';
import A_Button from '../01_Atoms/A_Button';
import P_Generator from './P_Generator';
import P_GeneratedDeck from './P_GeneratedDeck';
import M_HomeNav from '../02_Molecules/M_HomeNav';

export default function P_Home({ savedPresentations = [] }) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [localPresentations, setLocalPresentations] = useState(savedPresentations);

  useEffect(() => {
    // Update local state when prop changes
    setLocalPresentations(savedPresentations);
  }, [savedPresentations]);

  useEffect(() => {
    // Listen for messages from the plugin
    const handleMessage = (event) => {
      const message = event.data.pluginMessage;
      
      if (message.type === 'SAVED_PRESENTATIONS') {
        setLocalPresentations(message.presentations);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const handleGenerate = (selections) => {
    console.log('Generating with selections:', selections);
    parent.postMessage({ 
      pluginMessage: { 
        type: 'generate-slide',
        ...selections,
        isRegeneration: false
      }
    }, '*');
    setShowSuccess(true);
  };

  const handleGeneratorClose = () => {
    setIsGenerating(false);
    setShowSuccess(false);
  };

  const handleDelete = (id) => {
    // Send delete request to plugin
    parent.postMessage({ 
      pluginMessage: { 
        type: 'delete-presentation',
        id
      }
    }, '*');
    
    // Optimistically update UI
    setLocalPresentations(prev => prev.filter(p => p.id !== id));
  };

  const handleRegenerate = (presentation) => {
    parent.postMessage({ 
      pluginMessage: { 
        type: 'generate-slide',
        ...presentation,
        isRegeneration: true
      }
    }, '*');
    setShowSuccess(true);
  };

  if (isGenerating) {
    return (
      <P_Generator
        onComplete={handleGenerate}
        onCancel={handleGeneratorClose}
      />
    );
  }

  if (showSuccess) {
    return (
      <P_GeneratedDeck
        onBack={handleGeneratorClose}
        onClose={handleGeneratorClose}
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
      {localPresentations.length > 0 && (
        <div style={{
          width: '100%',
          maxWidth: '600px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <h3 style={{ margin: 0 }}>Recent Presentations</h3>
          {localPresentations.map((presentation) => (
            <div
              key={presentation.id}
              style={{
                padding: '16px',
                border: '1px solid #E5E5E5',
                borderRadius: '8px',
                backgroundColor: '#F8F8F8',
                position: 'relative'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                display: 'flex',
                gap: '8px'
              }}>
                <A_Button
                  icon={ArrowsClockwise}
                  variant="secondary"
                  onClick={() => handleRegenerate(presentation)}
                  style={{ padding: '8px' }}
                />
                <A_Button
                  icon={Trash}
                  variant="secondary"
                  onClick={() => handleDelete(presentation.id)}
                  style={{ padding: '8px' }}
                />
              </div>
              <h4 style={{ margin: '0 0 8px 0', paddingRight: '80px' }}>{presentation.projectName}</h4>
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