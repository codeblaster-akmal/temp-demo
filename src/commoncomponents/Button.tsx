import { Button, styled, Typography } from "@mui/material";
import { colorTheme } from "../GlobalTheme/Theming";

const ButtonWrapper = styled("div")(() => ({
  "& .MuiButton-root ": {
    textTransform: "capitalize",
    borderRadius: 1,
    backgroundColor: colorTheme.primary,
    color: "#fff",
    "&:hover": {
      backgroundColor: colorTheme.primary,
    },
  },
  "& .MuiButton-outlined": {
    margin: "10px 0",
    backgroundColor: "#fff",
    color: colorTheme.primary,
    borderColor: colorTheme.primary,
    borderRadius: 20,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  "& .MuiButton-text": {
    backgroundColor: "#fff",
    color: colorTheme.outlineColor,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

export default function CustomizedButtons(props: any) {
  const { children } = props;
  return (
    <ButtonWrapper>
      <Button disableElevation {...props}>
        <Typography
          sx={{ fontWeight: 600 }}
          textAlign={"center"}
          variant="body1"
        >
          {children}
        </Typography>
      </Button>
    </ButtonWrapper>
  );
}
