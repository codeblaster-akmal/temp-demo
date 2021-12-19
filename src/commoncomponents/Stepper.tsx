import { styled } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import ModeStandbyTwoToneIcon from "@mui/icons-material/ModeStandbyTwoTone";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { Grid } from "@material-ui/core";
import "./stepper.css";
import { colorTheme } from "../GlobalTheme/Theming";

const QontoConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      border: "1px dashed grey",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      border: "1px solid darkblue",
    },
  },
}));

const QontoStepIconRoot = styled("div")(({ theme }) => ({
  color: theme.palette.mode === "light" ? theme.palette.grey[700] : "#000000",
  display: "flex",
  height: 22,
  alignItems: "center",
  "& .QontoStepIcon-completedIcon": {
    color: colorTheme.primary,
    fontSize: 28,
    borderRadius: 20,
  },
  "& .QontoStepIcon-circle": {
    fontSize: 28,
    color: colorTheme.primary,
  },
}));

const StepLabelText = styled(StepLabel)(() => ({
  ".MuiStepLabel-label": {
    marginTop: "0.5rem !important",
    font: 'normal 1rem "Gotham-medium"',
    color: colorTheme.primaryLite
  },
}));

function QontoStepIcon(props: any) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot className={className}>
      {completed ? (
        <CheckCircleOutlineOutlinedIcon className="QontoStepIcon-completedIcon" />
      ) : (
        <ModeStandbyTwoToneIcon className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

const steps = ["Phone", "Applicants", "Centers"];

export default function CustomizedSteppers() {
  return (
    <div className="stepper">
      <Grid container>
        <Grid xs={12}>
          <Stepper
            alternativeLabel
            activeStep={2}
            orientation="horizontal"
            connector={<QontoConnector />}
          >
            {steps.map((label) => (
              <Step key={label} style={{ width: "30vw" }}>
                <StepLabelText StepIconComponent={QontoStepIcon}>
                  {label}
                </StepLabelText>
              </Step>
            ))}
          </Stepper>
        </Grid>
      </Grid>
    </div>
  );
}
