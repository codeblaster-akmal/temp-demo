import { Component } from "react";
import { Box, Container, Grid, InputAdornment, MenuItem, Select } from "@mui/material";
// import Select from "../commoncomponents/Select"
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import Button from "../commoncomponents/Button";
import ImageAssets from "../assets/images/Index";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import "./Login.css";
import CommonSwitch from "../commoncomponents/commonSwitch";
import Timer from "../commoncomponents/Timer";
import Header from "./Header";
import CustomizedSteppers from "../commoncomponents/Stepper";
import styled from "@emotion/styled";
import CustomInputField from "../commoncomponents/InputField";

// const ImageStyles = {
//   width: "260px",
//   height: "400px",
//   backgroundImage: `url(${ImageAssets.ColorHoablImage})`,
//   // backgroundColor: "rgba(43, 40, 40, 0.938)",
//   backgroundBlendMode: "luminosity",
// };

const ImageContainer = styled("div")({
  textAlign: "end",
});

export default class extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      enableSendOTP: false,
      phoneNumber: "",
      otp: "",
      secondInputFieldShow: false,
      invalidPhoneNumber: "",
      errorMessage: false,
      imagevisible: false,
    };
  }
  componentDidMount() {
    this.setState({
      errorMessage: true,
    });
  }

  onChangeInputValuePhoneNumber = (e: any) => {
    const onlyNums = e.target.value.replace(/[^0-9]/g, "");
    if (onlyNums.length < 10) {
      this.setState({
        [e.target.name]: onlyNums,
        enableSendOTP: false,
        errorMessage: false,
      });
      // <div>invalid Phone Number</div>
    } else if (onlyNums.length === 10) {
      const number = onlyNums.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3");
      this.setState({
        [e.target.name]: number,
        enableSendOTP: true,
        errorMessage: true,
      });
    } else {
      this.setState({
        enableSendOTP: false,
        [e.target.name]: onlyNums,
        errorMessage: false,
      });
    }
    this.setState({
      imagevisible: true,
    });
  };
  sendOTP = (e: any) => {
    e.preventDefault();
    this.setState({ secondInputFieldShow: true });
  };

  private selectComponent: any = () => {
    return (
      <div>
        <Select variant="standard" placeholder="+91" defaultValue={+91}>
          <MenuItem value={+91}>+91</MenuItem>
          <MenuItem value={+1}>+1</MenuItem>
          <MenuItem value={+92}>+92</MenuItem>
        </Select>
      </div>
    );
  };
  backToHomePage = () => {
    this.props["history"].push("/RegistrationForm");
  };

  render() {
    // console.log(this.state, "Lets check the state")
    console.log(this.state.secondInputFieldShow);
    return (
      <Container>
        <Header />
        <CustomizedSteppers />
        <Grid container justifyContent={"space-between"}>
          <Grid item xs={6}>
            <div style={{ marginTop: "50px", display: "flex" }}>
              <CustomInputField
                style={{ width: "145%", padding: 0, margin: 0 }}
                className="InputField"
                name="phoneNumber"
                value={this.state.phoneNumber}
                variant={"standard"}
                onChange={this.onChangeInputValuePhoneNumber}
                placeholder={"Enter your phone number"}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIphoneOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
                maxLength="10"
                selectComponent={this.selectComponent()}
                error={!this.state.enableSendOTP && !this.state.errorMessage}
                helperText={
                  !this.state.enableSendOTP && !this.state.errorMessage
                    ? "Invalid phone Number"
                    : null
                }
              />
            </div>
            {!this.state.secondInputFieldShow && (
              <Button
                name="Send OTP"
                onclick={this.sendOTP}
                style={{ margin: "10px 10px 10px 0px", width: "90px" }}
                disabled={!this.state.enableSendOTP}
              />
            )}
            {this.state.secondInputFieldShow && (
              <div className="InputField">
                <CustomInputField
                  style={{ width: "72%" }}
                  name="otp"
                  value={this.state.otp}
                  onChangeInput={this.onChangeInputValuePhoneNumber}
                  variant={"standard"}
                  placeholder={"Enter OTP"}
                  icon={<LockOpenIcon />}
                  Timer={<Timer />}
                  maxLength="6"
                />
                <Box style={{ margin: "10px 10px 10px 0px" }}>
                  <CommonSwitch />
                </Box>
                <Button
                  style={{ margin: "10px 10px 10px 0px" }}
                  name="Submit"
                  onClick={this.backToHomePage}
                />
              </div>
            )}
          </Grid>
          <Grid item xs={6}>
            {console.log("let check", !this.state.enableSendOTP)}
            <ImageContainer>
              {this.state.imagevisible ? (
                <img src={ImageAssets.SideImage}></img>
              ) : (
                <img src={ImageAssets.Blackandwhite} alt="colorImagHoabl" />
              )}
            </ImageContainer>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
