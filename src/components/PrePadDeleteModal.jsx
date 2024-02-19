import { useDispatch } from "react-redux";
import { remove } from "../store/contactSlice";
import { PrePadButton } from "./PrePadButton";

import { Fade, Modal } from "@mui/material";

export const PrePadDeleteModal = ({ open, setOpen, pageData, page, handlePageChange, selectedContactId }) => {
  const dispatch = useDispatch();

  const handleClose = () => setOpen(false);

  const handleDelete = ({ id }) => {
    dispatch(remove(id));
    handleClose();
    if (pageData.length === 1) {
      handlePageChange("event", page - 1);
    }
  };

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description">
      <Fade in={open}>
        <div className="prepad-modal-inner">
          <h1 id="modal-modal-title">Are you sure you want to delete this contact?</h1>
          <div id="modal-modal-description">This will delete this contact permanently. You cannot undo this action.</div>
          <div id="modal-modal-bottom">
            <PrePadButton text="cancel" onClick={() => handleClose()} isDisabled={false} type="button" />
            <PrePadButton text="delete" onClick={() => handleDelete(selectedContactId)} isDisabled={false} type="button" />
          </div>
        </div>
      </Fade>
    </Modal>
  );
};
