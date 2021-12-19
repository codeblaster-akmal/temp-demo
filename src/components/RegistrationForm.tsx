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

// const plotNumbers = ["17-A", "17-B", "16-C", "16-D"];

const applicant = {
  fName: "",
  mName: "",
  lName: "",
  aadharFile: "",
  panFile: "",
  aadharName: "",
  panName: "",
};

const plots = [
  {
    label: "17-A",
    value: "17-A",
    applicants: [{ ...applicant }],
  },
  {
    label: "17-B",
    value: "17-B",
    applicants: [{ ...applicant }],
  },
  {
    label: "16-C",
    value: "16-C",
    applicants: [{ ...applicant }],
  },
  {
    label: "16-D",
    value: "16-D",
    applicants: [{ ...applicant }],
  },
];

const TabStyleWrapper = styled("div")(() => ({
  ".MuiTabs-indicator": {
    backgroundColor: "transparent",
  },
  ".MuiTabPanel-root": {
    padding: 0,
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
      currentPlotValue: "17-A",
      plots,
    };
  }
  handleChangeTabNradio = (event: any) => {
    this.setState({ currentPlotValue: event.target.value });
  };
  addAnotherApplicant = () => {
    const { plots, currentPlotValue } = this.state;
    let updatePlots: any = [];
    updatePlots = plots.map((plot: any) => {
      if (plot.value === currentPlotValue) {
        return {
          ...plot,
          applicants: [...plot.applicants, applicant],
        };
      } else {
        return plot;
      }
    });
    this.setState({ plots: updatePlots });
  };
  filehandler = () => {
    const { plots, currentPlotValue } = this.state;
    let updatePlots: any = [];
    updatePlots = plots.map((plot: any) => {
      if (plot.value === currentPlotValue) {
        return {
          ...plot,
          applicants: [...plot.applicants, applicant],
        };
      } else {
        return plot;
      }
    });
    this.setState({ plots: updatePlots });
  };
  proceedHandler = (e: any) => {
    this.state.history.push("/regCenter");
  };
  onChangeInput = (e: any, index: any) => {
    const { plots, currentPlotValue } = this.state;
    const { name, value } = e.target;
    let updatePlots: any = [];
    updatePlots = plots.map((plot: any) => {
      if (plot.value === currentPlotValue) {
        return {
          ...plot,
          applicants: [
            ...plot.applicants.map((applicant: any, apIndex: any) => {
              if (index === apIndex) {
                return {
                  ...applicant,
                  [name]: value,
                };
              } else {
                return applicant;
              }
            }),
          ],
        };
      } else {
        return plot;
      }
    });
    this.setState({ plots: updatePlots });
  };
  onChangeFile = (e: any, index: any) => {
    const { plots, currentPlotValue } = this.state;
    const { name, files } = e.target;

    const fileName = files && files[0].name;
    let fullFile = files && files[0];
    if (fullFile) {
      console.log(87997897979);
      const reader = new FileReader();
      let attachment: any;
      reader.onload = (e: any) => {
        console.log(8799789797900);
        attachment = e.target.result;
        if (attachment) {
          console.log(87997897979001);
          let updatePlots: any = [];
          updatePlots = plots.map((plot: any) => {
            if (plot.value === currentPlotValue) {
              return {
                ...plot,
                applicants: [
                  ...plot.applicants.map((applicant: any, apIndex: any) => {
                    if (index === apIndex) {
                      return {
                        ...applicant,
                        [`${name}Name`]: fileName,
                        [`${name}File`]: attachment,
                      };
                    } else {
                      return applicant;
                    }
                  }),
                ],
              };
            } else {
              return plot;
            }
          });
          this.setState({ plots: updatePlots });
        }
      };
      reader.readAsDataURL(fullFile);
    }
  };

  render() {
    console.log(878789797, this.state);
    return (
      <>
        <Header />
        <Title />
        <CustomizedSteppers />
        <ApplicantDetails />
        <TabContext value={this.state.currentPlotValue}>
          <TabStyleWrapper>
            <TabList onChange={this.handleChangeTabNradio} variant="fullWidth">
              <CustomRadioButton
                value={this.state.currentPlotValue}
                onChange={this.handleChangeTabNradio}
                legendTitle="Choose the Plot Number and fill in the applicant details for each"
              >
                {plots.map((plot, index) => {
                  return (
                    <Tab
                      key={index}
                      disableRipple
                      label={
                        <FormControlLabel
                          value={plot.value}
                          control={<Radio />}
                          label={plot.label}
                        />
                      }
                      value={plot.value}
                    />
                  );
                })}
              </CustomRadioButton>
            </TabList>
            {this.state.plots.map((plot: any, index: any) => {
              return (
                <TabPanel value={plot.value} key={index}>
                  <Grid container spacing={2}>
                    {plot.applicants.map((applicant: any, index: number) => {
                      return (
                        <Grid item xs={6} key={index}>
                          <Aplicant
                            onChangeInput={(e: any) =>
                              this.onChangeInput(e, index)
                            }
                            onChangeFile={(e: any) =>
                              this.onChangeFile(e, index)
                            }
                            applicant={
                              index === 0
                                ? { ...applicant, title: "Primary Applicant" }
                                : index === 1
                                ? { ...applicant, title: "Secondary Applicant" }
                                : applicant
                            }
                            index={index}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                </TabPanel>
              );
            })}
          </TabStyleWrapper>
        </TabContext>
        <CustomizedButtons
          size="small"
          startIcon={<AddIcon />}
          variant="outlined"
          onClick={this.addAnotherApplicant}
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
