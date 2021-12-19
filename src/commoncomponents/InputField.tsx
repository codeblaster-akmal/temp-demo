import { TextField } from "@mui/material";

export default function CustomInputField(props: any) {
  const { fullWidth = false, variant = "standard" } = props;
  return <TextField variant={variant} fullWidth={fullWidth} {...props} />;
}
