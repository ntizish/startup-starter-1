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

  return (
    <button
      onClick={onClick}
      className={`button button--${variant}`}
      style={{
        flexDirection: iconPosition === 'right' ? 'row-reverse' : 'row'
      }}
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
