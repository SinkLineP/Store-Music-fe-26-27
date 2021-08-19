import React from 'react';
import { Modal } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom";


const ModalOrder = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Your order is accepted
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Wait for our manager to contact you)</h4>
            </Modal.Body>
            <Modal.Footer>
                    {props.linkTo}
            </Modal.Footer>
        </Modal>
    )
}

export default ModalOrder;