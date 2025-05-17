import React, { useState, useEffect } from 'react';
import { PlusCircle } from '@phosphor-icons/react';
import M_WelcomeBlock from '../02_Molecules/M_WelcomeBlock';
import A_Button from '../01_Atoms/A_Button';
import P_Generator from './P_Generator';
import P_GeneratedDeck from './P_GeneratedDeck';
import M_HomeNav from '../02_Molecules/M_HomeNav';
import M_SavedTemplate from '../02_Molecules/M_SavedTemplate';

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
      {localPresentations.length > 0 ? (
        <div style={{
          width: '100%',
          maxWidth: '600px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          padding: '0 0 24px 0'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            padding: '0 0 0 8px'
          }}>
            <h3 className="A_Text A_Text--section-heading">You have {localPresentations.length} deck{localPresentations.length !== 1 ? 's' : ''}</h3>
            <A_Button
              icon={PlusCircle}
              text="Add"
              variant="secondary"
              onClick={() => setIsGenerating(true)}
            />
          </div>
          {localPresentations.map((presentation) => (
            <M_SavedTemplate
              key={presentation.id}
              presentation={presentation}
              onRegenerate={handleRegenerate}
              onDelete={handleDelete}
            />
          ))}
        </div>
      ) : (
        <A_Button 
          icon={PlusCircle}
          weight="fill"
          text="Create New Presentation"
          variant="action_block"
          iconPosition="up"
          onClick={() => setIsGenerating(true)}
        />
      )}
    </div>
  );
}