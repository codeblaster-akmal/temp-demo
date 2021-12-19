import { useState } from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import moment from "moment";
// import "./DatePicker.css";
import { Box } from "@material-ui/core";

function CustomKeyboardDatePicker(props: any) {
  const [selectedDate, setDate] = useState("moment()");
  const [inputValue, setInputValue] = useState(
    moment().format("Do MMMM YYYY,dddd")
  );
  const today = new Date();
  const onDateChange = (date: any, value: any) => {
    setDate(date);
    setInputValue(value);
  };

  const dateFormatter = (str: string) => {
    return str;
  };

  console.log("date", inputValue); // date

  // const finalDate = (date: any) => {

  // }
  return (
    <Box style={{ position: "relative" }}>
      <label htmlFor="custom-datepicker">
        <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
          <KeyboardDatePicker
            id="custom-datepicker"
            hidden={true}
            variant="inline"
            inputVariant="standard"
            autoOk={true}
            fullWidth
            showTodayButton={true}
            value={selectedDate}
            format="Do MMMM YYYY,dddd"
            inputValue={inputValue}
            onChange={onDateChange}
            rifmFormatter={dateFormatter}
            minDate={today}
            InputProps={{
              disableUnderline: true,
            }}
          />
          <Box
            bgcolor={"#fff"}
            sx={{
              position: "absolute",
              top: 0,
              width: "80%",
              minHeight: "100%",
            }}
          >
            {inputValue}
          </Box>
        </MuiPickersUtilsProvider>
      </label>
    </Box>
  );
}

export default CustomKeyboardDatePicker;
