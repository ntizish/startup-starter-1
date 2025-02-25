import React from 'react';
import { Horse } from '@phosphor-icons/react';

const A_Link = ({ 
  icon: Icon = Horse,
  text = '', 
  iconPosition = 'left',
  onClick,
  variant = 'primary',
  size = 'medium',
  weight = 'regular'
}) => {
  const iconSizes = {
    small: 16,
    medium: 20,
    large: 24
  };

  const getFlexDirection = () => {
    switch(iconPosition) {
      case 'right':
        return 'row-reverse';
      case 'up':
        return 'column';
      case 'down':
        return 'column-reverse';
      default: // 'left'
        return 'row';
    }
  };

  return (
    <button
      onClick={onClick}
      className={`A_Link A_Link--primary`}
      style={{
        flexDirection: getFlexDirection()
      }}
    >
      <Icon 
        size={iconSizes[size]} 
        weight={weight}
        color={variant === 'primary' ? 'var(--link-grey)' : 'var(--text-secondary)'}
      />
      {text && <span className="A_Text A_Text--regular">{text}</span>}
    </button>
  );
};

export default A_Link;
