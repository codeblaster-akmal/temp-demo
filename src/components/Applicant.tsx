import React from "react";
import CustomInputField from "../commoncomponents/InputField";
import UploadButton from "./UploadButton";
import Box from "@mui/material/Box";
import { Button, Typography } from "@material-ui/core";
// import "./Applicant.css";
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
      Applicant: [],
    };
  }

  handleModalClose = () => {
    this.setState({ isOpen: false });
  };

  onchangehandler = (event: any) => {
    const Applicant = this.state.Applicant;
    Applicant[event.target.name] = event.target.value;
    this.setState({ Applicant });
    // this.props.update(Applicant.id, Applicant, this.props.pltId);
  };

  Filehandler = (event: any, documentType: string, indexnum: number) => {
    if (indexnum === this.props.index) {
      const Applicant = this.state.Applicant;
      console.log(7685764564, Applicant);
      const fileName = event.target?.files[0].name;
      if (documentType === "adhar") {
        // this.setState({ ...Applicant, isAdharUploaded: true });
        Applicant["isAdharUploaded"] = true;
        Applicant["adhar"]["name"] = fileName;
      } else {
        Applicant["isPanUploaded"] = true;
        Applicant["pan"]["name"] = fileName;
      }
      let fullFile = event.target?.files[0];
      let attachment: any;
      if (fullFile) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          attachment = e.target.result;
          if (attachment) {
            if (documentType === "adhar") {
              Applicant["adhar"]["link"] = attachment;
            } else {
              Applicant["pan"]["link"] = attachment;
            }
          }
        };
        reader.readAsDataURL(fullFile);
      }
      this.setState({ Applicant });
      // this.props.update(Applicant.id, Applicant, this.props.pltId);
    }
  };
  displayAdhar = () => {
    const Applicant = this.state.Applicant;
    Applicant["isAdharDisplayed"] = true;
    this.setState({ ...Applicant, Applicant, isOpen: true });
  };
  displayImage = () => {
    const Applicant = this.state.Applicant;
    Applicant["isPanDisplayed"] = true;
    this.setState({ ...Applicant, Applicant, isOpen: true });
    // this.props.update(Applicant.id, Applicant, this.props.pltId);
  };
  componentDidMount() {
    this.setState({ Applicant: this.props.applicant });
    console.log(this.state.Applicant, this.props.index);
  }
  render() {
    // console.log(this.state.plotWithApplicants[0].applicants, "applicant render");
    console.log(98765463, this.state.Applicant, "app render");
    // const classes=useStyles();
    return (
      <div style={{ marginTop: "2rem" }}>
        <Typography variant="h6">{this.state.Applicant.title}</Typography>
        <Box sx={{ background: "#f1f1f1", padding: 2 }}>
          <Grid container justifyContent={"space-between"}>
            <Grid item xs={3}>
              <CustomInputField
                name="Fname"
                placeholder="Enter First Name"
                variant="standard"
                fullWidth="false"
                value={this.state.Applicant.Fname}
                onChange={this.onchangehandler}
              />
            </Grid>
            <Grid item xs={3}>
              <CustomInputField
                name="Mname"
                placeholder="Enter Middle Name"
                variant="standard"
                fullWidth="false"
                value={this.state.Applicant.Mname}
                onChange={this.onchangehandler}
              />
            </Grid>
            <Grid item xs={3}>
              <CustomInputField
                name="Lname"
                placeholder="Enter Last Name"
                variant="standard"
                fullWidth="false"
                value={this.state.Applicant.Lname}
                onChange={this.onchangehandler}
              />
            </Grid>
          </Grid>
          <Grid container justifyContent={"space-evenly"}>
            <Grid item xs={6}>
              <Box>
                <UploadButton
                  id={1}
                  fileUploaded={this.state.Applicant?.isAdharUploaded}
                  index={this.props.index}
                  ButtonText="Aadhaar Card"
                  className="styles"
                  name="adhar"
                  onchange={this.Filehandler}
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                <UploadButton
                  fileUploaded={this.state.Applicant?.isPanUploaded}
                  id={2}
                  index={this.props.index}
                  ButtonText="Pan Card"
                  className="styles"
                  name="pan"
                  onchange={this.Filehandler}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            display="flex"
            justifyContent="center"
            className="Applicant"
          >
            {this.state.Applicant?.isAdharUploaded ? (
              // {this.props.plotWithApplicants[0]?.applicants.isAdharUploaded ? (
              <Grid item xs={6}>
                <Grid item className="imgTag"></Grid>
                <Grid>
                  <Typography
                    onClick={this.displayAdhar}
                    variant="body2"
                    className="applicant"
                  >
                    {this.state.Applicant.adhar.name}
                  </Typography>
                  {this.state.Applicant?.isAdharDisplayed ? (
                    <BasicModal
                      src={this.state.Applicant.adhar.link}
                      isOpen={this.state.isOpen}
                      onCloseModal={this.handleModalClose}
                    />
                  ) : null}
                </Grid>
              </Grid>
            ) : null}
            {this.state.Applicant.isPanUploaded ? (
              <Grid item xs={6}>
                <Typography
                  onClick={this.displayImage}
                  variant="body2"
                  className="applicant"
                >
                  {this.state.Applicant.pan.name}
                </Typography>
                {this.state.Applicant?.isPanDisplayed ? (
                  <>
                    <BasicModal
                      src={this.state.Applicant.pan.link}
                      isOpen={this.state.isOpen}
                      onCloseModal={this.handleModalClose}
                    />
                  </>
                ) : null}
              </Grid>
            ) : null}
          </Grid>
          {this.state.Applicant.isPanUploaded ||
          this.state.Applicant.isAdharUploaded ? null : (
            <Typography variant="body2" className="Applicant">
              PDF/JPEG/PNG only: Max Size:5mb
            </Typography>
          )}
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
