import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import "./admin.css";

export default function AdminManager () {
  const [data, setData] = useState({});
  const [validated, setValidated] = useState(false);
  

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    } else if(data["rePassword"] !== data['newPassword']) {
      alert("The new password and re-enered password do not match. Try again.");
    } else {
      console.log(data);
    }
  }


  const handleChange = (event) => {
    const {name, value} = event.target;
    setData({...data, [name]: value});
  }

  return (
    <>
      <div className="admin-homepage">
        <fieldset style={{border: "1px solid white", padding: "20px", borderRadius: "20px"}} >
          <h2>
            Admin Login Details
          </h2>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            style={{display: "flex", flexDirection: "column", alignItems: "center"}}
          >
            <div className="form-row-container">
              <h4 style={{textAlign: "center", marginBottom: "1em"}}>Manager's Details *</h4>
              <Form.Row>
                <Form.Group as={Col} md="4" controlId="adminUsername">
                  <Form.Label>
                    Admin Username
                    <span style={{color: "red"}} > *</span>
                  </Form.Label>
                    
                  <Form.Control
                    required
                    type="text"
                    name="adminUsername"
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="oldPassword">
                  <Form.Label>
                    Admin's Old Password
                    <span style={{color: "red"}} > *</span>
                  </Form.Label>
                    
                  <Form.Control
                    required
                    type="password"
                    name="oldPassword"
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="newPassword">
                  <Form.Label>
                    Admin's New Password
                    <span style={{color: "red"}} > *</span>
                  </Form.Label>
                    
                  <Form.Control
                    required
                    type="password"
                    name="newPassword"
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="rePassword">
                  <Form.Label>
                    Re-type New Password
                    <span style={{color: "red"}} > *</span>
                  </Form.Label>
                    
                  <Form.Control
                    required
                    type="password"
                    name="rePassword"
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
            </div>
            <Button type="submit" className="btn btn-success" style={{width: "50%", margin: "20px"}}>Update</Button>
          </Form>
        </fieldset>
      </div>
    </>
  );
}
