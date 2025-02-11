import React from "react";
import A_Button from "../01_Atoms/A_Button";

export default class P_Home extends React.PureComponent {

  constructor(props) {
    super(props)
  }

  render() {
    const {onGenerate} = this.props

    return (
        <div style={{ padding: "20px", textAlign: "center", backgroundColor: 'white' }}>
          <h1>Welcome to Pitch Deck Generator</h1>
          <p>Select your settings and generate slides easily.</p>
          <A_Button label="Generate Slide" handleClick={onGenerate} />
        </div>
    );
  }
};