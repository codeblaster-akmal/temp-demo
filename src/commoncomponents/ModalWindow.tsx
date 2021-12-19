// BasicModal.tsx

import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props: any) {
  const { isOpen, onCloseModal } = props;

  return (
    <Modal
      open={isOpen}
      onClose={onCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 200,
          backgroundColor: "grey",
          border: "2px solid #FFFFF",
          color: "white",
        }}
      >
        {
          <img
            src={props.src}
            height="100%"
            width="100%"
            alt=""
            onLoadedData={() => console.log("loaded")}
          />
        }
      </Box>
    </Modal>
  );
}
