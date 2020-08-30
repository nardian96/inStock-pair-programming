import React, { useState } from "react";
import { Modal, Button, ModalDialog, ModalTitle } from "react-bootstrap";
import deleteIcon from "../assets/Icons/delete_outline-24px.svg";

function ModalWindow(props) {
  const info = props.info;
  console.log(info);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (info.name) {
    return (
      <>
        <Button variant="primary" onClick={handleShow} className="modal-button">
          <img
            src={deleteIcon}
            alt="delete icon"
            className="warehouse-item__delete-button"
            onClick={handleShow}
          />
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          size="sm"
          // restoreFocus={false}
          // autoFocus={false}
          backdrop={false}
          dialogClassName="modal"
        >
          <Modal.Header closeButton={true} closeLabel="">
            <Modal.Title as="h1">{`Delete ${info.name} ${info.item}?`}</Modal.Title>
          </Modal.Header>
          <Modal.Body as="p">
            {`Please confirm that you'd like to delete ${info.name} from the ${info.item} list.`}{" "}
            <br /> {`You won't be able to undo this action`}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                info.action(info.id);
                handleClose();
              }}
            >
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  } else return <p></p>;
}

export default ModalWindow;
