import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuList from "@mui/material/MenuList";
import { Box, Stack, styled, Typography } from "@mui/material";
import { colorTheme } from "../GlobalTheme/Theming";
import CustomizedButtons from "./Button";

const StyledButtonGroup = styled(ButtonGroup)((theme) => ({
  ".MuiButtonGroup-grouped:not(:last-of-type)": {
    borderRight: "none",
  },
  ".MuiButtonGroup-grouped": {
    color: colorTheme.outlineColor,
    textTransform: "capitalize",
    "&:hover": {
      background: "transparent",
    },
  },
  ".MuiButton-text ": {
    padding: 0,
  },
}));

export default function ButtonDropDown(props: any) {
  const { options } = props;
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  };

  return (
    <React.Fragment>
      <StyledButtonGroup
        disableElevation
        variant="contained"
        ref={anchorRef}
        aria-label="split button"
        onClick={handleClick}
      >
        <CustomizedButtons
          variant="text"
          size="small"
          disableElevation
          disableRipple
          onClick={handleToggle}
        >
          {/* {options[selectedIndex].name} */}
          Applicant
        </CustomizedButtons>
        <CustomizedButtons
          disableRipple
          onClick={handleToggle}
          variant="text"
          disableElevation
          size="small"
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
        >
          <ArrowDropDownIcon />
        </CustomizedButtons>
      </StyledButtonGroup>
      <Popper
        style={{ zIndex: 1 }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        placement="bottom-start"
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper elevation={2}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  sx={{ minWidth: "20rem", padding: "1rem" }}
                  id="split-button-menu"
                >
                  {options.map((option: any, index: any) => {
                    return (
                      <Box
                        key={index}
                        onClick={(event: any) =>
                          handleMenuItemClick(event, index)
                        }
                      >
                        <Stack display={"flex"} direction={"row"} columnGap={2}>
                          <Typography
                            variant="body1"
                            sx={{ color: colorTheme.outlineColor }}
                          >
                            {option.no}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{ color: colorTheme.outlineColor }}
                          >{`${option.applicant} applicants`}</Typography>
                        </Stack>
                        <Typography
                          sx={{
                            margin: "0.2rem 0",
                            color: colorTheme.optionTextColor,
                          }}
                          variant="subtitle1"
                        >
                          {option.name}
                        </Typography>
                      </Box>
                    );
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}
