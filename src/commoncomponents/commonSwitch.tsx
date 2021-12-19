import * as React from "react";
import { styled } from "@mui/material/styles";
import { FormGroup } from '@mui/material';
// import FormControlLabel from "@mui/material/FormControlLabel";
import Switch, { SwitchProps } from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiSwitch: {
      switchBase: {
        // Controls default (unchecked) color for the thumb
        color: "#fff",
        label: "#90EE90"
      },
      colorSecondary: {
        "&$checked": {
          // Controls checked color for the thumb
          color: "#90EE90",
          label: "#90EE90"
        }
      },
      track: {
        // Controls default (unchecked) color for the track
        opacity: 0.2,
        backgroundColor: "#fff",
        "$checked$checked + &": {
          // Controls checked color for the track
          opacity: 0.7,
          backgroundColor: "#98FB98"
        }
      }
    }
  }
});

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)"
    }
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#008000",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#90EE90"
      }
    }
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200
    })
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box"
  }
}));

export default function CommonSwitch() {
  const [state, setState] = React.useState({
    checkedA: true
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.checked);
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <ThemeProvider theme={theme}>
      <FormGroup
      style={{ color: state.checkedA ? "green" : "black" }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <AntSwitch
            defaultChecked
            checked={state.checkedA}
              onChange={handleChange}
              name="checkedA"
            inputProps={{ "aria-label": "ant design" }}
          />  
          <Typography>Enable whatsapp Communications</Typography>
        </Stack>
      </FormGroup>
    </ThemeProvider>
  );
}

