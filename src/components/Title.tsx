import React, { Component } from "react";
import { Typography } from "@mui/material";
import { Grid } from "@material-ui/core";
import "./Title.css";
// import './SectionComponent1'
// import { fontFamily } from "@mui/system";

class Title extends Component {
  render() {
    return (
      <div className="Title">
        <Grid container>
          <Grid item>
            <Typography
              variant="h4"
              style={{
                fontWeight: 900,
                fontFamily: "Gotham-bold",
              }}
            >
              POA Registration form
            </Typography>
            <hr
              style={{
                width: "14rem",
                marginLeft: "0px",
                backgroundColor: "#000",
                borderTop: "1.5px solid #000",
              }}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Title;
