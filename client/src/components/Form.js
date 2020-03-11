import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
//import Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal} from 'react-bootstrap';




function form(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (


        <div id='modal-test'>
        <Button variant="primary" onClick={handleShow}>
          Sign in
        </Button>
  
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
      <Modal.Title>Sign in</Modal.Title>
    </Modal.Header>
  
  
  <Modal.Body>
  <div>
    <div className="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>
    <div className="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1"/>
    </div>
  </div>
  </Modal.Body>
  
  <Modal.Footer>
  <div className="form-group form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
      <label className="form-check-label" for="exampleCheck1">Save password</label>
      <button type="submit" className="btn btn-primary">Login</button>
  </div>
  </Modal.Footer>
  
        </Modal>
        </div>

)
}

export default form;