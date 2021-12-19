import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { Component } from "react";
import ApplicantDetails from "../commoncomponents/ApplicantDetails";
import CustomizedSteppers from "../commoncomponents/Stepper";
import Applicant from "./Applicant";
import Header from "./Header";
import Title from "./Title";
import CustomButtonGroup from "../commoncomponents/ButtonGroup";
import { colorTheme } from "../GlobalTheme/Theming";
import CustomizedButtons from "../commoncomponents/Button";
import CustomKeyboardDatePicker from "../commoncomponents/Datepicker";
import CustomCheckbox from "../commoncomponents/Checkbox";
import RegistrationDetails from "./RegistrationDetails";

const TimeSlots = [
  { id: 1, slot: "9am - 10am", slotLeft: "2" },
  { id: 2, slot: "12pm - 1pm", slotLeft: "1" },
  { id: 3, slot: "2:30pm - 3:30pm", slotLeft: "2" },
  { id: 4, slot: "5:30pm - 6:30pm", slotLeft: "No" },
];

export default class RegistrationCenter extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      Details: {
        name: "punya",
        phoneNum: "+91 1234567890",
        an: 122345678,
        plotNum: "7A-3",
      },
      isSlotSelected: 3,
      addApplicant: false,
    };
  }
  addAnotherApplicant = (e: any) => {
    this.setState({
      addApplicant: true,
    });
  };

  handleSlotSelect = (e: any) => {
    this.setState({ ...this.state, isSlotSelected: +e.target.value });
  };
  render() {
    return (
      <>
        <Header />
        <Title />
        <Box my={3}>
          <CustomizedSteppers />
        </Box>
        <ApplicantDetails />
        {this.state.addApplicant ? (
          <Grid container spacing={2}>
            <Grid item xs={6}></Grid>
            <Applicant title="Third Applicant" />
          </Grid>
        ) : null}
        <RegistrationDetails />
        <Grid container alignItems={"center"} justifyContent={"space-between"}>
          <Grid item xs={2}>
            <CustomKeyboardDatePicker />
          </Grid>
          <Grid item xs={8}>
            <Typography
              sx={{
                margin: "0.5rem 0",
                fontWeight: 600,
                color: colorTheme.primaryLite,
              }}
              variant="subtitle1"
            >
              Select a time slot
            </Typography>
            <Stack direction="row" spacing={2}>
              {TimeSlots.map((slot) => (
                <label htmlFor={`group-buttons-${slot.id}`} key={slot.id}>
                  <input
                    hidden
                    type="radio"
                    disabled={slot.slotLeft === "No"}
                    id={`group-buttons-${slot.id}`}
                    value={slot.id}
                    checked={this.state.isSlotSelected === slot.id}
                    onChange={this.handleSlotSelect}
                  />
                  <CustomButtonGroup
                    slotLeft={slot.slotLeft}
                    isbuttonchecked={this.state.isSlotSelected === slot.id}
                  >
                    {slot.slot}
                  </CustomButtonGroup>
                </label>
              ))}
            </Stack>
          </Grid>
        </Grid>
        <Divider sx={{ margin: "2rem 0" }} />
        <CustomCheckbox CheckBoxLabel="I agree to Hoabl's T&C" />
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
