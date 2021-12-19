import React from "react";
import CustomInputField from "../commoncomponents/InputField";
import UploadButton from "./UploadButton";
import Box from "@mui/material/Box";
import { Button, Typography } from "@material-ui/core";
// import "./applicant.css";
import { withStyles } from "@material-ui/styles";
import { Grid } from "@mui/material";
import BasicModal from "../commoncomponents/ModalWindow";
// import {RegistrationFormCreators} from '../redux/RegistrationFormRedux';
import { connect } from "react-redux";

interface IAppliantState {
  fullName: string;
  lastName: string;
  fileobj: any;
  isFileUploaded: boolean;
  fileName: any;
}
interface IApplicantProps {
  title: string;
}
const useStyles = withStyles({
  root: {
    border: 0,
    borderRadius: 15,
    color: "white",
    background: "linear-gradient(45deg,#333,#999)",
    // padding:'0,30px'
  },
  typography: {
    body2: {
      textAlign: "center",
      backgroundColor: "black",
      // palette.info.dark
      color: "white",
      fontWeight: "100",
      padding: "10px 20px",
    },
  },
});
export default class Aplicant extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isOpen: false,
      applicant: [],
    };
  }

  handleModalClose = () => {
    this.setState({ isOpen: false });
  };

  onchangeHandler = (event: any) => {
    this.props.onChangeInput(event);
  };

  fileHandler = (event: any) => {
    this.props.onChangeFile(event);
  };
  displayAdhar = () => {
    const applicant = this.state.applicant;
    applicant["isAdharDisplayed"] = true;
    this.setState({ ...applicant, applicant, isOpen: true });
  };
  displayImage = () => {
    const applicant = this.state.applicant;
    applicant["isPanDisplayed"] = true;
    this.setState({ ...applicant, applicant, isOpen: true });
    // this.props.update(applicant.id, applicant, this.props.pltId);
  };
  render() {
    // const classes=useStyles();
    return (
      <div style={{ marginTop: "2rem" }}>
        <Typography variant="h6">{this.props.applicant.title}</Typography>
        <Box sx={{ background: "#f1f1f1", padding: 2 }}>
          <Grid container justifyContent={"space-between"}>
            <Grid item xs={3}>
              <CustomInputField
                name="fName"
                placeholder="Enter First Name"
                variant="standard"
                fullWidth="false"
                value={this.props.applicant.fName}
                onChange={this.onchangeHandler}
              />
            </Grid>
            <Grid item xs={3}>
              <CustomInputField
                name="mName"
                placeholder="Enter Middle Name"
                variant="standard"
                fullWidth="false"
                value={this.props.applicant.mName}
                onChange={this.onchangeHandler}
              />
            </Grid>
            <Grid item xs={3}>
              <CustomInputField
                name="lName"
                placeholder="Enter Last Name"
                variant="standard"
                fullWidth="false"
                value={this.props.applicant.lName}
                onChange={this.onchangeHandler}
              />
            </Grid>
          </Grid>
          <Grid container justifyContent={"space-evenly"}>
            <Grid item xs={6}>
              <Box>
                <UploadButton
                  id={`${this.props.index}-1`}
                  fileUploaded={this.props.applicant.aadharFile}
                  ButtonText="Aadhaar Card"
                  className="styles"
                  name="aadhar"
                  onchange={this.fileHandler}
                />
                {this.props.applicant.aadharFile && (
                  <Typography variant="body2" className="applicant">
                    {this.props.applicant.aadharName}
                  </Typography>
                )}
                <Typography variant="body2" className="applicant">
                  PDF/JPEG/PNG only: Max Size:5mb
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                <UploadButton
                  fileUploaded={this.props.applicant.panFile}
                  id={`${this.props.index}-2`}
                  ButtonText="Pan Card"
                  className="styles"
                  name="pan"
                  onchange={this.fileHandler}
                />
                {this.props.applicant.aadharFile && (
                  <Typography variant="body2" className="applicant">
                    {this.props.applicant.panName}
                  </Typography>
                )}
                <Typography variant="body2" className="applicant">
                  PDF/JPEG/PNG only: Max Size:5mb
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            display="flex"
            justifyContent="center"
            className="applicant"
          >
            {/* {this.state.applicant?.isAdharUploaded ? (
              // {this.props.plotWithApplicants[0]?.applicants.isAdharUploaded ? (
              <Grid item xs={6}>
                <Grid item className="imgTag"></Grid>
                <Grid>
                  <Typography
                    onClick={this.displayAdhar}
                    variant="body2"
                    className="applicant"
                  >
                    {this.state.applicant.adhar.name}
                  </Typography>
                  {this.state.applicant?.isAdharDisplayed ? (
                    <BasicModal
                      src={this.state.applicant.adhar.link}
                      isOpen={this.state.isOpen}
                      onCloseModal={this.handleModalClose}
                    />
                  ) : null}
                </Grid>
              </Grid>
            ) : null}
            {this.state.applicant.isPanUploaded ? (
              <Grid item xs={6}>
                <Typography
                  onClick={this.displayImage}
                  variant="body2"
                  className="applicant"
                >
                  {this.state.applicant.pan.name}
                </Typography>
                {this.state.applicant?.isPanDisplayed ? (
                  <>
                    <BasicModal
                      src={this.state.applicant.pan.link}
                      isOpen={this.state.isOpen}
                      onCloseModal={this.handleModalClose}
                    />
                  </>
                ) : null}
              </Grid>
            ) : null} */}
          </Grid>
          {/* {this.state.applicant.isPanUploaded ||
          this.state.applicant.isAdharUploaded ? null : (
            <Typography variant="body2" className="applicant">
              PDF/JPEG/PNG only: Max Size:5mb
            </Typography>
          )} */}
        </Box>
      </div>
    );
  }
}

// const mapDispatchtoProps = (dispatch:any) => ({
//   update: (id: number, data: any, pltId: number) => dispatch(RegistrationFormCreators.update(id, data, pltId)),
// });
// const mapStatetoProps = (state:any) => {
//   console.log(state);
//   return {
//     plotWithApplicants: state.plotWithApplicants,
//   };
// };
// export default connect(mapStatetoProps, mapDispatchtoProps)(Aplicant);
