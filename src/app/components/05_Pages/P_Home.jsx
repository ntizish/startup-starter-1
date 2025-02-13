import React from "react";
import A_Button from "../01_Atoms/A_Button";
import { Heart, Lifebuoy } from '@phosphor-icons/react';
import M_HomeNav from "../02_Molecules/M_HomeNav";

export default class P_Home extends React.PureComponent {

  constructor(props) {
    super(props)
  }

  render() {
    const {onGenerate} = this.props

    return (
      <div style={{ 
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white'
      }}>
        <M_HomeNav />
      </div>
    );
  }
};