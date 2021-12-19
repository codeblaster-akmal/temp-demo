import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import React, { Component } from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

class SelectCompo extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render(): React.ReactNode {
    console.log(this.props);
    return (
      <div style={{ marginTop: "20px" }}>
        <FormControl style={{width:"300px"}}>
          <InputLabel id="demo-simple-select-label">
           {this.props.label}
          </InputLabel>
          <Select
            label={this.props.label}
            name={this.props.name}
            value={this.props.value}
            onChange={this.props.onChange}
            style={{width:"200px"}}
            variant="outlined"
          >
            {this.props?.menuItems?.map((menu: any, index: number) => {
              return (
                  
                <MenuItem key={index} value={menu}>
                  {menu}
                </MenuItem>
              );
            })}

            
          </Select>
        </FormControl>
      </div>
    );
  }
}

export default SelectCompo;
