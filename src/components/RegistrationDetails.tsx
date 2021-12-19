import { Component } from "react";
import { Box, Collapse, Grid, Typography } from "@mui/material";
import CustomAutoComplete from "../commoncomponents/Auocomplete";
import { colorTheme } from "../GlobalTheme/Theming";
import CustomizedButtons from "../commoncomponents/Button";

const pinCodes = [
  {
    label: "56002",
    area: "Jayanagar",
    address:
      "31nd D Cross Rd, 4th T Block East, 4th Block, Jayanagar, Bengaluru, Karnataka 560011",
  },
  {
    label: "56003",
    area: "Jayanagar",
    address:
      "32nd D Cross Rd, 4th T Block East, 4th Block, Jayanagar, Bengaluru, Karnataka 560011",
  },
  {
    label: "56004",
    area: "Jayanagar",
    address:
      "33nd D Cross Rd, 4th T Block East, 4th Block, Jayanagar, Bengaluru, Karnataka 560011",
  },
  {
    label: "56005",
    area: "Jayanagar",
    address:
      "34nd D Cross Rd, 4th T Block East, 4th Block, Jayanagar, Bengaluru, Karnataka 560011",
  },
  {
    label: "76003",
    area: "Jayanagar",
    address:
      "35nd D Cross Rd, 4th T Block East, 4th Block, Jayanagar, Bengaluru, Karnataka 560011",
  },
  {
    label: "76004",
    area: "Jayanagar",
    address:
      "32nd D Cross Rd, 4th T Block East, 4th Block, Jayanagar, Bengaluru, Karnataka 560011",
  },
  {
    label: "76005",
    area: "Jayanagar",
    address:
      "32nd D Cross Rd, 4th T Block East, 4th Block, Jayanagar, Bengaluru, Karnataka 560011",
  },
];

export default class RegistrationDetails extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      pinCode: "",
      isVisible: false,
    };
  }
  onTagsChange = (event: any, values: any) => {
    this.setState({
      pinCode: values !== null ? values : this.state.pinCode,
      isVisible: false,
    });
  };

  onClickHandler = () => {
    this.setState({ isVisible: true });
  };
  render() {
    const { isVisible, pinCode } = this.state;
    const { area, address } = pinCode;
    return (
      <Grid container>
        <Grid item xs={3}>
          <Typography sx={{ fontWeight: 600, margin: "0 0 1rem" }} variant="h5">
            Select Registration Center
          </Typography>
          <CustomAutoComplete
            data={pinCodes}
            optionLabel="label"
            value={pinCode}
            onChange={this.onTagsChange}
          />
          <Box my={"2rem"}>
            <CustomizedButtons
              onClick={this.onClickHandler}
              variant="contained"
              size="large"
            >
              <Typography
                sx={{ fontWeight: 600 }}
                textAlign={"center"}
                variant="body1"
              >
                See Registrations Centers
              </Typography>
            </CustomizedButtons>
          </Box>
          <Collapse in={isVisible}>
            <Typography
              sx={{
                color: colorTheme.primary,
                fontWeight: 600,
                margin: "1rem 0 0.3rem",
              }}
              variant="body1"
            >
              Registration Center
            </Typography>
            <Typography
              sx={{
                color: colorTheme.outlineColor,
                fontWeight: 600,
              }}
              variant="body2"
            >
              {area}
            </Typography>
            <Typography
              sx={{
                color: colorTheme.outlineColor,
                fontWeight: 600,
              }}
              variant="body2"
            >
              {address}
            </Typography>
          </Collapse>
        </Grid>
      </Grid>
    );
  }
}
