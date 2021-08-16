import React from "react";
import { Dialog } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const NDialog = ({ open, handleClose, children }) => {
  return (
    <Dialog
      disableScrollLock={false}
      TransitionComponent={Transition}
      aria-labelledby="modal"
      aria-describedby="modal-description"
      open={open}
      onClose={handleClose}
      BackdropProps={{
        onTouchMove: (e) => {
          e.preventDefault();
        },
        onTouchStart: (e) => {
          e.preventDefault();
        },
        onTouchEnd: (e) => {
          e.preventDefault();
        },
      }}
    >
      {children}
    </Dialog>
  );
};

export default NDialog;
