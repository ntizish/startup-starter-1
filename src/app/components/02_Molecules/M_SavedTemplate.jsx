import React from 'react';
import { ArrowsClockwise, Trash } from '@phosphor-icons/react';
import A_Button from '../01_Atoms/A_Button';
import '../../assets/stylesheets/02_Molecules/_M_SavedTemplate.scss';

const M_SavedTemplate = ({ 
  presentation,
  onRegenerate,
  onDelete
}) => {
  return (
    <div className="M_SavedTemplate">
      {/* Top section with name and date */}
      <div className="M_SavedTemplate__header">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <h4 className="A_Text A_Text--heading">{presentation.projectName}</h4>
          <p className="A_Text A_Text--small">
            Created: {new Date(presentation.timestamp).toLocaleString()}
          </p>
        </div>
      </div>

      {/* Middle section with template details */}
      {/* <div className="M_SavedTemplate__details">
        <p className="A_Text A_Text--regular">Template: {presentation.template}</p>
        <p className="A_Text A_Text--regular">Palette: {presentation.palette}</p>
        <p className="A_Text A_Text--regular">Font: {presentation.font}</p>
      </div> */}

      {/* Bottom section with buttons */}
      <div className="M_SavedTemplate__actions">
        <A_Button
          icon={ArrowsClockwise}
          text="Regenerate"
          variant="tertiary"
          onClick={() => onRegenerate(presentation)}
        />
        <A_Button
          icon={Trash}
          variant="secondary"
          onClick={() => onDelete(presentation.id)}
        />
      </div>
    </div>
  );
};

export default M_SavedTemplate; 