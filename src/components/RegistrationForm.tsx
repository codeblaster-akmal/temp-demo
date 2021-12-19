// RegistrationForm.tsx

import {
  Box,
  FormControlLabel,
  Grid,
  Radio,
  styled,
  Typography,
} from "@mui/material";
import { Component } from "react";
import ApplicantDetails from "../commoncomponents/ApplicantDetails";
import CustomizedSteppers from "../commoncomponents/Stepper";
import Aplicant from "./Applicant";
import Header from "./Header";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Title from "./Title";
import AddIcon from "@mui/icons-material/Add";
import CustomRadioButton from "../commoncomponents/RadioButton";
import CustomizedButtons from "../commoncomponents/Button";
// import { connect } from "react-redux";

const plotNumbers = ["17-A", "17-B", "16-C", "16-D"];
const TabStyleWrapper = styled("div")(() => ({
  ".MuiTabs-indicator": {
    backgroundColor: "transparent",
  },
}));
export default class RegistrationForm extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      Details: {
        name: "punya",
        phoneNum: "+91 1234567890",
        an: 122345678,
        plotNum: "7A-3",
      },
      ischecked: "17-A",
      addApplicant: false,
      plotWithApplicants: [
        {
          pltNumner: "17-A",
          pltId: 1,
          applicants: [
            {
              id: 1,
              title: "Primary Applicant",
              Fname: "",
              Mname: "",
              Lname: "",
              adhar: {
                name: "",
                link: "",
              },
              pan: {
                name: "",
                link: "",
              },
              isAdharUploaded: false,
              isPanUploaded: false,
              isAdharDisplayed: false,
              isPanDisplayed: false,
            },
            {
              id: 2,
              title: "Secondary Applicant",
              Fname: "",
              Mname: "",
              Lname: "",
              adhar: {
                name: "",
                link: "",
              },
              pan: {
                name: "",
                link: "",
              },
              isFileUploaded: false,
              isAdharDisplayed: false,
              isPanDisplayed: false,
            },
          ],
        },
        {
          pltNumner: "",
          applicants: [],
        },
      ],
    };
  }
  setApplicantData = (id: any, Applicant: any, pltId: any) => {
    console.log("setApplicantData");
    const plotWithApplicants = this.state.plotWithApplicants[0];
    const updatedPlotWithApplicants = plotWithApplicants.filter(
      (plot: any) => plot.pltId === pltId
    );
    console.log(updatedPlotWithApplicants, "filterrr");
    const newState = updatedPlotWithApplicants.applicants.map((appl: any) => {
      if (appl.id === id) {
        return {
          ...Applicant,
        };
      }
      return appl;
    });

    const updatedData = [
      {
        ...plotWithApplicants,
        applicants: [...updatedPlotWithApplicants.applicants],
      },
    ];
    this.setState({
      updatedPlotWithApplicants: updatedData,
    });
  };
  handleChange = (event: any) => {
    this.setState({ ischecked: event.target.value });
  };
  addAnotherApplicant = (e: any) => {
    const plotWithApplicants = this.state.plotWithApplicants[0].applicants.push(
      {
        // id:1,
        title: "",
        Fname: "",
        Mname: "",
        Lname: "",
        adhar: {
          name: "",
          link: "",
        },
        pan: {
          name: "",
          link: "",
        },
        isFileUploaded: false,
        isAdharDisplayed: false,
        isPanDisplayed: false,
      }
    );
    this.setState({ plotWithApplicants: plotWithApplicants });
  };
  proceedHandler = (e: any) => {
    this.state.history.push("/RegistrationCenters");
  };
  render() {
    // console.log(this.state.plotWithApplicants[0].applicants)
    return (
      <>
        <Header />
        <Title />
        <CustomizedSteppers />
        <ApplicantDetails />
        <TabContext value={this.state.ischecked}>
          <TabStyleWrapper>
            <TabList onChange={this.handleChange} variant="fullWidth">
              <CustomRadioButton
                value={this.state.ischecked}
                onChange={this.handleChange}
                legendTitle="Choose the Plot Number and fill in the applicant details for each"
              >
                {plotNumbers.map((plotNumber) => {
                  return (
                    <Tab
                      disableRipple
                      label={
                        <FormControlLabel
                          value={plotNumber}
                          control={<Radio />}
                          label={plotNumber}
                        />
                      }
                      value={plotNumber}
                    />
                  );
                })}
              </CustomRadioButton>
            </TabList>
            <TabPanel value={"17-A"}>
              <Grid container spacing={2}>
                {this.state.plotWithApplicants[0].applicants.map(
                  (applicant: any, index: number) => {
                    return (
                      <Grid item xs={6} key={index}>
                        <Aplicant
                          setApplicantData={this.setApplicantData}
                          applicant={applicant}
                          index={index}
                          pltId={this.state.plotWithApplicants[0].pltId}
                        />
                      </Grid>
                    );
                  }
                )}
              </Grid>
            </TabPanel>
            <TabPanel value={"17-B"}>
              <Grid container spacing={2}>
                {this.state.plotWithApplicants[0].applicants.map(
                  (applicant: any, index: number) => {
                    return (
                      <Grid item xs={6} key={index}>
                        <Aplicant
                          setApplicantData={this.setApplicantData}
                          applicant={applicant}
                          index={index}
                          pltId={this.state.plotWithApplicants[0].pltId}
                        />
                      </Grid>
                    );
                  }
                )}
              </Grid>
            </TabPanel>
          </TabStyleWrapper>
        </TabContext>
        {this.state.addApplicant ? (
          <Grid container spacing={2}>
            <Grid item xs={6}></Grid>
            <Aplicant title="Third Applicant" />
          </Grid>
        ) : null}
        <CustomizedButtons
          size="small"
          startIcon={<AddIcon />}
          variant="outlined"
          onclick={this.addAnotherApplicant}
        >
          Add another applicant
        </CustomizedButtons>
        <Box my={"1rem"}>
          <CustomizedButtons variant="contained" size="large">
            <Typography
              sx={{ fontWeight: 600 }}
              textAlign={"center"}
              variant="body1"
            >
              Proceed
            </Typography>
          </CustomizedButtons>
        </Box>
      </>
    );
  }
}
// const mapStatetoprops = (state:any) => {
//   console.log(state);
//   return {
//     plotWithApplicants: state.plotWithApplicants,
//   };
// };
// export default connect(mapStatetoProps)(RegistrationForm);
