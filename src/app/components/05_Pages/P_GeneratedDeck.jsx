import React from 'react';
import A_Button from '../01_Atoms/A_Button';
import M_GenerationNav from '../02_Molecules/M_GenerationNav';
import manualImage from '../../assets/images/illustrations/manual.png';

export default function P_GeneratedDeck({ onBack, onClose }) {
  return (
    <div className="P_ParameterSelection">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center', width: '100%', padding: '0 0 24px 0' }}>
        <M_GenerationNav onBack={onBack} hideBackButton={true} />
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center', width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', width: '300px' }}>

            <h1 className="A_Text A_Text--heading A_Text--heading-center">Congrats!👏🏻<br />Now add the content</h1>
            <p className="A_Text A_Text--small A_Text--small-center" style={{color: 'var(--text-secondary)'}}>Your pitch deck is ready, you can now fill placeholder with your content and export it!</p>
          </div>
          
          <div style={{width: '100%', textAlign: 'center'}}>
            <img 
              src={manualImage} 
              alt="Generated Deck Preview" 
              style={{
                width: '100%'
              }}
            />
          </div>
        </div>
      </div>

      <div className="navigation">
        <A_Button 
          onClick={onClose} 
          text="Back to Home" 
          variant="primary"
        />
      </div>
    </div>
  );
} 