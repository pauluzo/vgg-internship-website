import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import "./admin.css";
import {connect} from 'react-redux';
import axios from 'axios'
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts'

const AdminLogin = (props) => {
  const [data, setData] = useState({
    oldPassword: "",
    newPassword: "",
    rePassword: ""
  });
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false)

  const [details, setDetails] = useState({
    username: props.adminDetails.username,
    password: props.adminDetails.password    
  });
  

  const handleSubmit = (event) => {
    setLoading(true);
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      setLoading(false);
      return;
    } else if(data['oldPassword'] !== details.password) {
      ToastsStore.error("The old password is incorrect");
      setLoading(false);
    } else if(data.rePassword !== data.newPassword) {
      ToastsStore.error("The new password and re-entered password do not match. Try again.");
      setLoading(false);
    } else {
      let newPassword = data.newPassword;
      console.log(newPassword);
      details.password = newPassword;
      setDetails(details);
      console.log(details);
      props.pageInformation.adminDetails = details;
      axios.put(`https://vgg-internship-db.herokuapp.com/api/content/${props.pageInformation._id}`, { ...props.pageInformation, })
      .then((res) => {
        props.updateStore(res.data)
        ToastsStore.success("changes have been made successfully");
        setLoading(false);
        setData({
          oldPassword: "",
          newPassword: "",
          rePassword: ""
        })
      })
      .catch((err) => {
        console.log(err)
        ToastsStore.error("An ERROR occured!")
        setLoading(false)
      })
    }
  }


  const handleChange = (event) => {
    const {name, value} = event.target;
    if(name === "username") {
      setDetails({...details, [name]: value});
    } else setData({...data, [name]: value});
  }

  return (
    <>
      <ToastsContainer position={ToastsContainerPosition.TOP_LEFT} store={ToastsStore} />
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
              <h4 style={{textAlign: "center", marginBottom: "1em"}}>Login Details *</h4>
              <Form.Row>
                <Form.Group as={Col} md="4" controlId="adminUsername">
                  <Form.Label>
                    Admin Username
                    <span style={{color: "red"}} > *</span>
                  </Form.Label>
                    
                  <Form.Control
                    required
                    type="text"
                    name="username"
                    onChange={handleChange}
                    value={details.username}
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
                    value={data.oldPassword}
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
                    value={data.newPassword}
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
                    value={data.rePassword}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
            </div>
            <Button type="submit" className="btn btn-success" style={{width: "50%", margin: "20px"}} disabled={loading}>{loading? "Updating..." : "Update"}</Button>
          </Form>
        </fieldset>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    pageInformation: state,
    adminDetails: state.adminDetails
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateStore: (content) => {
      dispatch({
        type: "UPDATE_STATE",
        data: content
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin)