import { Button, styled, Typography } from "@mui/material";
import { colorTheme } from "../GlobalTheme/Theming";

interface CustomButtonProps {
  isbuttonchecked: boolean;
  slotLeft: any;
}

const StyledButton = styled(Button)<CustomButtonProps>(
  ({ theme, isbuttonchecked }) => ({
    borderRadius: "2rem",
    borderColor: colorTheme.outlineColor,
    backgroundColor: isbuttonchecked ? colorTheme.primary : "transparent",
    color: isbuttonchecked ? "#fff" : colorTheme.primaryLite,
    disabled: {
      color: colorTheme.primaryLite,
      borderColor: colorTheme.primaryLite,
    },
    "&:hover": {
      borderColor: colorTheme.outlineColor,
      backgroundColor: isbuttonchecked ? colorTheme.primaryLite : "transparent",
    },
  })
);

const CustomButtonGroup: React.FC<CustomButtonProps> = (props: any) => {
  console.log(props);
  const { children, slotLeft } = props;
  return (
    <>
      <StyledButton
        disabled={slotLeft === "No"}
        disableRipple
        variant="outlined"
        component="span"
        {...props}
      >
        <Typography
          sx={{ fontWeight: 600 }}
          textAlign={"center"}
          variant="body1"
          display="block"
        >
          {children}
        </Typography>
      </StyledButton>
      <Typography
        textAlign={"center"}
        variant="body1"
        display="block"
        sx={{
          fontWeight: 600,
          margin: "2px 0",
          color: colorTheme.outlineColor,
        }}
      >
        {`${slotLeft} slots left`}
      </Typography>
    </>
  );
};

export default CustomButtonGroup;
