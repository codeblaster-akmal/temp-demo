import React, { Component } from "react";
import { Divider, Grid, Typography } from "@mui/material";
import ButtonDropDown from "./ButtonDropDown";
import { colorTheme } from "../GlobalTheme/Theming";

const plotOptions = [
  {
    id: 1,
    no: "17-A",
    applicant: 2,
    name: "Anwar Shah, Miranal Kumar, Awashti",
  },
  {
    id: 2,
    no: "17-B",
    applicant: 1,
    name: "Anwar Shah,  Miranal Kumar, Awashti",
  },
  {
    id: 3,
    no: "13-A",
    applicant: 3,
    name: "Anwar Shah,  Miranal Kumar, Awashti",
  },
  {
    id: 4,
    no: "21-C",
    applicant: 2,
    name: "Anwar Shah,  Miranal Kumar, Awashti",
  },
];
class ApplicantDetails extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      Details: {
        name: "Punya Krishna",
        email: "punya@gmail.com",
        phoneNum: "+91 1234567890",
        an: 122345678,
        plotNum: "7A-3",
      },
    };
  }
  render(): React.ReactNode {
    return (
      <div style={{ marginTop: "2rem" }}>
        <Grid container>
          <Grid item xs={6}>
            <Typography sx={{ color: colorTheme.primary }} variant="h5">
              {this.state.Details.name}
            </Typography>
            <Typography
              sx={{ fontWeight: "bold", color: colorTheme.outlineColor }}
              variant="body1"
            >
              {this.state.Details.phoneNum} {this.state.Details.email}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography sx={{ color: colorTheme.primary }} variant="h5">
              Application Number
            </Typography>
            <Typography
              sx={{ fontWeight: "bold", color: colorTheme.outlineColor }}
              variant="body1"
            >
              {this.state.Details.an}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography sx={{ color: colorTheme.primary }} variant="h5">
              9
            </Typography>
            <ButtonDropDown options={plotOptions} />
          </Grid>
        </Grid>
        <Divider sx={{ marginBottom: "2rem" }} />
      </div>
    );
  }
}

export default ApplicantDetails;
