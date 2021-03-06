import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import deleteIcon from "../assets/Icons/delete_outline-24px.svg";

function ModalWindow(props) {
  const info = props.info;
  //console.log(info);
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
          //backdrop="static"
          keyboard={false}
          size="sm"
          centered={true}
          // restoreFocus={false}
          autoFocus={true}
          backdrop={true}
          scrollable={false}
          dialogClassName="modal"
        >
          <div>
            <Modal.Header closeButton={true} closeLabel="">
              <Modal.Title as="h1">{`Delete ${info.name} ${info.item}?`}</Modal.Title>
            </Modal.Header>
            <Modal.Body as="p">
              {`Please confirm that you'd like to delete ${info.name} from the ${info.item} list.`}{" "}
              <br /> {`You won't be able to undo this action`}
            </Modal.Body>
          </div>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={handleClose}
              className="modal__button"
            >
              Close
            </Button>
            <Button
              className="modal__button-delete modal__button"
              variant="primary"
              onClick={() => {
                console.log(info.id);
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
