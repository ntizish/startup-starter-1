// Main button
import React from "react";

export default class A_Button extends React.PureComponent {
    constructor(props) {
      super(props)
    }
    
    render() {
      const { handleClick, label } = this.props;
      console.log("A_Button is rendering!");  // Debugging
          
        return (
            <button onClick={handleClick} style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
              {label}
            </button>
          );
    }
  
};
