import { FormControl, RadioGroup, FormLabel, styled } from "@mui/material";
import { colorTheme } from "../GlobalTheme/Theming";

const RadioFormContainer = styled("div")(() => ({
  ".MuiFormControl-root": {
    display: "flex",
    ".MuiFormLabel-root": {
      fontWeight: 600,
      color: colorTheme.outlineColor,
    },
    ".MuiFormControlLabel-label": {
      fontSize: "2rem",
      color: colorTheme.outlineColor,
    },
    ".Mui-checked, .Mui-checked ~ .MuiFormControlLabel-label": {
      color: colorTheme.primary,
    },
  },
}));

export default function CustomRadioButton(props: any) {
  const { children, legendTitle } = props;

  return (
    <RadioFormContainer>
      <FormControl component="fieldset">
        <FormLabel component="legend">{legendTitle}</FormLabel>
        <RadioGroup row {...props}>
          {children}
        </RadioGroup>
      </FormControl>
    </RadioFormContainer>
  );
}
