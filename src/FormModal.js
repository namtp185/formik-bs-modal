import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const FormModal = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Modal
      onHide={props.onCancel}
      size={props.size}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.show}
      animation={false}
    >
      <Modal.Header>
        <Modal.Title>My Title</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.Content}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onCancel}>
          Cancel
        </Button>
        <Button
          variant="primary"
          disabled={isLoading}
          type="submit"
          form="foo"
          onClick={props.onSubmit}
        >
          {isLoading ? "Please wait.." : "Submit"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormModal;
