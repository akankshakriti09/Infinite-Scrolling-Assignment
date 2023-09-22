import React, { Component, useState } from "react";
import { Button, Modal } from "react-bootstrap";

const MenuItem = ({ item, title, description, imageUrl }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="my-2">
        <div
          className="card"
          style={{ width: "12rem" }}
          onClick={() => handleShow()}
        >
          <img
            src={
              !imageUrl
                ? "https://binamehta.com/wp-content/uploads/image-placeholder-300x200.png"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{item}</h5>
            <p className="card-text">{title}</p>
          </div>
        </div>
      </div>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{item}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <img
              src={
                !imageUrl
                  ? "https://binamehta.com/wp-content/uploads/image-placeholder-300x200.png"
                  : imageUrl
              }
              className="card-img-top"
              alt="..."
            />
          </div>
          <div>{description}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MenuItem;
