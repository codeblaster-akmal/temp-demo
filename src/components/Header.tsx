import React from "react";
// import styles from "./header.module.css";
import './Header.css'
import Button from "../commoncomponents/Button";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { IconButton, Typography } from "@material-ui/core";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "./Header.css";
import ImageAssets from "../assets/images/Index";
import SelectCompo from "../commoncomponents/Select";
import Grid from "@mui/material/Grid";
import CallIcon from '@mui/icons-material/Call';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
  },
  typography: {
    h4: {
      color: "#000000",
      flexGrow: 1,
      textAlign: "center",
      fontFamily: "san-serif",
      //   fontSize: "3.50vw",
      fontWeight: 400,
    },
    body1: {
      fontFamily: "cursive",
    },
  },
});

const styles = {
  // width:"10px",
  // padding:"100px"
  color: "white",
  backgroundColor: "black",
};

const selectStyles = {
  width: "100px",
};
const menuItems = [56001, 56002, 56003, 56004];

class Header extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectValue: "",
    };
  }
  selectHandle = (e: any) => {
    let value = e.target.value;
    this.setState({
      selectValue: value,
    });
  };

  onclickButton = () => {
    console.log("onclickButton");
  };
  render() {
    return (
      <ThemeProvider theme={theme}>
        {/* <AppBar> */}
        <Toolbar className="Header">
          <Grid container spacing={1}>
            <Grid item xs={5}>
              <img className="headerLogo" src={ImageAssets.Headerlogo} alt="Logo" />
            </Grid>
          </Grid>
          {/* <div className="social-container"> */}
            <Grid container spacing={1} style={{alignItems:"flex-end", display: "flex"}} >
              <Grid item xs={4}>
                  <CallIcon  className="callicon"style={{verticalAlign:"middle" ,fontSize:"1rem" }}/>
                <span>
                  {" "}
                  {/* <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{verticalAlign:"middle"}}/> */}
                  {/* <i className="fas fa-phone-square-alt"></i> */}
                  {/* <img src={ImageAssets.phoneIcon} alt="Logo" /> */}
                  02269006900    
                </span>
              </Grid>
              <Grid xs={3}>
              <Typography >The Rush</Typography>
              </Grid>

              <Grid item xs={3}>
                <div className="fa">
                <a href="https://www.youtube.com" className="youtube social">
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
             
                <a href="https://www.facebook.com" className="facebook social">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
              
                <a
                  href="https://www.instagram.com"
                  className="instagram social"
                >
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                </div>
              </Grid>
          {/* </div> */}
            </Grid>
        </Toolbar>
        {/* <Button name="Submit" onclick={this.onclickButton} style={styles} />
        {/* <Button name="Submit" onclick={this.onclickButton} style={styles} /> 
        <SelectCompo
          label="header"
          placeholder="header"
          value={this.state.selectValue}
          name="header"
          menuItems={menuItems}
          onChange={this.selectHandle}
          style={selectStyles}
        ></SelectCompo> */}
        {/* </AppBar> */}
      </ThemeProvider>
    );
  }
}
export default Header;
