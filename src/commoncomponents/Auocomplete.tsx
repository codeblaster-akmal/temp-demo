import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOn";

export default function CustomAutoComplete(props: any) {
  const { data, optionLabel } = props;
  return (
    <Autocomplete
      id="combo-box-demo"
      options={data}
      getOptionLabel={(option: any) => option[optionLabel] || ""}
      {...props}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          placeholder="Enter Pin code"
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <LocationOnOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
}
