import { Button } from "@mui/material";
import React from "react";
import { RiAttachment2 } from "react-icons/ri";
import { styled } from "@mui/material/styles";
import { createStyles, makeStyles } from "@mui/styles";

const Input = styled("input")({
  display: "none",
});
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: "white",
    },
  })
);

const StyledButton = styled(Button)(() => ({
  backgroundColor: "#fff",
  borderRadius: "20px",
  textDecoration: "capitalize",
  color:"blue"
  
}));

export default function UploadButton(props: any, ...buttonProps: any) {
  const classes = useStyles();
  return (
    <div>
      <label htmlFor="contained-button-file">
        <Input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
          
          
          
        />
        <StyledButton
          
          variant="outlined"
          onClick={props.onChange}
          component="span"
          startIcon={<RiAttachment2 />}
          {...buttonProps}
        >
          {`Upload ${props.ButtonText}`}
        </StyledButton>
      </label>
    </div>
  );
}