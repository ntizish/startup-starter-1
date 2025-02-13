import React from "react";
import A_Button from "../01_Atoms/A_Button";
import { Heart, Lifebuoy, PlusCircle } from '@phosphor-icons/react';
import M_HomeNav from "../02_Molecules/M_HomeNav";
import M_WelcomeBlock from '../02_Molecules/M_WelcomeBlock';

export default class P_Home extends React.PureComponent {

  constructor(props) {
    super(props)
  }

  render() {
    const {onGenerate} = this.props

    return (
      <div style={{ 
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        gap: '56px'
      }}>
        <M_HomeNav />
        <M_WelcomeBlock/>
        <A_Button 
          icon={PlusCircle}
          weight="fill"
          text="Looks quite empty..."
          variant="action_block"
          iconPosition="up"
          onClick={onGenerate}
        />
      </div>
    );
  }
};