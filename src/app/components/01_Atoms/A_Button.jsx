import React from 'react';
import { Horse, ShoppingCart } from '@phosphor-icons/react'; // Import any default icon you want

const A_Button = ({ 
  icon: Icon = Horse,
  text = '', 
  iconPosition = 'left',
  onClick,
  variant = 'primary',
  size = 'medium',
  weight = 'regular'
}) => {
  const buttonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    borderRadius: '6px',
    transition: 'all 0.2s',
    fontSize: '14px',
    flexDirection: iconPosition === 'right' ? 'row-reverse' : 'row',
    padding: '6px',
    backgroundColor: variant === 'primary' ? 'var(--light-blue)' : 'transparent',
    color: variant === 'primary' ? 'var(--main-blue)' : 'var(--text-secondary)',
    width: 'fit-content',
  };

  const iconSizes = {
    small: 16,
    medium: 20,
    large: 24
  };

  return (
    <button
      onClick={onClick}
      style={buttonStyle}
    >
      <Icon 
        size={iconSizes[size]} 
        weight={weight}
        color={variant === 'primary' ? 'var(--main-blue)' : 'var(--text-secondary)'}
      />
      {text && <span>{text}</span>}
    </button>
  );
};

export default A_Button;

// export default class A_Button extends React.PureComponent {
//     constructor(props) {
//       super(props)
//     }
    
//     render() {
//       const { handleClick, label } = this.props;
//       console.log("A_Button is rendering!");  // Debugging
          
//         return (
//             <button onClick={handleClick} style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
//               {label}
//             </button>
//           );
//     }
  
// };
