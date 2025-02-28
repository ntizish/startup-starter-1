import React from 'react';
import { CaretLeft } from '@phosphor-icons/react';
import A_Link from '../01_Atoms/A_Link';

const M_GenerationNav = ({ onBack, hideBackButton }) => {
  return (
    <nav className="M_GenerationNav">
      {!hideBackButton && (
        <A_Link 
          icon={CaretLeft}
          weight="bold"
          size="small"
          text="Back"
          variant="primary"
          onClick={onBack}
        />
      )}

      <p className="A_Text A_Text--regular">
        Deck Generation
      </p>
    </nav>
  );
};

export default M_GenerationNav;