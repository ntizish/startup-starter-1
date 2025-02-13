import React from 'react';
import { Horse } from '@phosphor-icons/react';

const A_Button = ({ 
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
      className={`A_Button A_Button--${variant}`}
      style={{
        flexDirection: getFlexDirection()
      }}
    >
      <Icon 
        size={iconSizes[size]} 
        weight={weight}
        color={variant === 'primary' ? 'var(--main-blue)' : 'var(--text-secondary)'}
      />
      {text && <span className="A_Text A_Text--button">{text}</span>}
    </button>
  );
};

export default A_Button;
