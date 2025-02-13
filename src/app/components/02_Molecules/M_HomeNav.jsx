import React from 'react';
import { Lifebuoy } from '@phosphor-icons/react';
import A_Button from '../01_Atoms/A_Button';
import logo from '../../assets/images/logo.svg';

const M_HomeNav = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <img 
        src={logo} 
        alt="Logo" 
        style={{ height: '24px' }}
      />
      <A_Button 
        icon={Lifebuoy}
        text="Help"
        variant="secondary"
      />
    </nav>
  );
};

export default M_HomeNav;