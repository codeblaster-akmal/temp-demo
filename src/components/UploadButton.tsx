import { Typography } from "@mui/material";
import { RiAttachment2 } from "react-icons/ri";
import CustomizedButtons from "../commoncomponents/Button";
import { colorTheme } from "../GlobalTheme/Theming";

export default function UploadButton(props: any) {
  console.log(`fileUploaded`, props.fileUploaded);
  return (
    <label htmlFor={"contained-button-file" + props.id}>
      <input
        accept="image/*"
        id={"contained-button-file" + props.id}
        multiple
        type="file"
        hidden
        onChange={(e) => {
          props.onchange(e, props.name, props.index);
        }}
      />
      {props.fileUploaded ? (
        <CustomizedButtons
          variant="text"
          component="span"
          {...props}
        >
          <Typography
            marginY={1}
            component={"div"}
            fontWeight={600}
            sx={{ color: colorTheme.primaryLite, cursor: "pointer" }}
            variant="body2"
            className="documentTitle"
          >
            Adhar Uploaded
            <Typography
              mx={2}
              fontWeight={600}
              sx={{ color: colorTheme.primary }}
              component={"span"}
              variant="body2"
              className="changeBtn"
            >
              Change
            </Typography>
          </Typography>
        </CustomizedButtons>
      ) : (
        <CustomizedButtons
          variant="outlined"
          size="small"
          component="span"
          startIcon={<RiAttachment2 />}
          {...props}
        >
          {`Upload ${props.ButtonText}`}
        </CustomizedButtons>
      )}
    </label>
  );
}
