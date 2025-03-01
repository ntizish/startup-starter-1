import React from 'react';
import { Horse } from '@phosphor-icons/react';

const A_Button = ({ 
  icon: Icon = null,
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

  const getIconColor = () => {
    switch(variant) {
      case 'primary-special':
        return 'var(--white)';
      case 'primary':
        return 'var(--main-blue)';
      default:
        return 'var(--text-secondary)';
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
      {Icon && <Icon 
        size={iconSizes[size]} 
        weight={weight}
        color={getIconColor()}
      />}
      {(variant === "primary" || variant === "primary-special") ? (
        <span className={`A_Text A_Text--${variant === 'action_block' ? 'small' : 'regular'}`}>{text}</span>
      ) : text}
    </button>
  );
};

export default A_Button;
