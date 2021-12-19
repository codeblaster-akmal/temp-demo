import React, { Component } from "react";
import { Autocomplete, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

export default class CustomInputField extends Component<any, any> {

  
  render() {
    const { fullWidth=false } = this.props
    return (
      <div>
        <div>
          <TextField
            // {...this.props.textfieldprops}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {this.props.icon}
                </InputAdornment>
              ),
            }}
            // disabled
            fullWidth={fullWidth}
            name={this.props.name}
            value={this.props.value}
            style={this.props.style}
            variant={this.props.variant}
            placeholder={this.props.placeholder}
            onChange={this.props.onChange}
          />
        </div>
      </div>
    );
  }
}