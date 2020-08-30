import React, { Component } from "react";
import ReactDOM from "react-dom";
export default class ModalWindow extends Component {
  info = this.props.info;
  render() {
    if (this.info) {
      return ReactDOM.createPortal(
        <section className="modal">
          <div className="modal__background">
            <div className="modal__window">
              <button
                className="modal__button-exit"
                onClick={this.info.cancel}
              ></button>
              <h1 className="modal__title">{this.info.title}</h1>
              <p className="modal__body">{this.info.body}</p>
              <button className="modal__button" onClick={this.info.cancel}>
                Cancel
              </button>
              <button
                className="modal__button modal__button--cancel"
                onClick={this.info.delete}
              >
                Delete
              </button>
            </div>
          </div>
        </section>,
        document.querySelector("#modal")
      );
    } else return <p></p>;

    // <Modal
    //   show={info.show}
    //   onHide={info.handleClose}
    //   backdrop="static"
    //   keyboard={false}
    //   centered
    //   size="sm"
    //   dialogClassName="modal"
    // >
    //   <Modal.Header closeButton>
    //     <Modal.Title as="h1">{info.title}</Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body>{info.body}</Modal.Body>
    //   <Modal.Footer>
    //     <Button variant="secondary" onClick={info.handleClose}>
    //       Close
    //     </Button>
    //     <Button variant="primary" onClick={info.action}>
    //       {info.actionName}
    //     </Button>
    //   </Modal.Footer>
    // </Modal>
  }
}
