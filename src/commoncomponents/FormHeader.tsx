import React, { Component } from "react";
import { Typography } from "@mui/material";
// import './SectionComponent1'
// import { fontFamily } from "@mui/system";

class FormHeader extends Component {
  render() {
    return (
      <div>
        <h1 style={{ fontFamily:"sans-serif",marginLeft:"0px"}}>
        POA Registration form
        </h1>
        <hr style={{width:"182px",marginLeft:"0px",backgroundColor:"black", borderTop: "3px solid", }}/>
        
      </div>
    );
  }
}

export default FormHeader;
