import React, { useState } from "react";
import { Form, Col, Button, Container } from "react-bootstrap";
import "./admin.css";
import {connect} from 'react-redux'
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts'

const LoginPage = (props) => {
  const [data, setData] = useState({});
  const [validated, setValidated] = useState(false);

  const adminPassword = props.adminDetails.password;
  const adminUsername = props.adminDetails.username;

  const handleChange = (event) => {
    const {name, value} = event.target;
    setData({...data, [name]: value});
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    } else if(data.username !== adminUsername || data.password !== adminPassword) {
      ToastsStore.error("The credentials you gave are incorrect. Try again")
      return;
    }
    else {
      let pageInfo = {...props.pageInformation, isLoggedIn: true};
      props.updateStore(pageInfo);
    }
  }

  return (
    <>
      <ToastsContainer position={ToastsContainerPosition.TOP_LEFT} store={ToastsStore} />
      <Container fluid style={{height: "100vh"}}>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          style={{height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}
        >
          <Form.Row md="4">
            <Form.Group as={Col} controlId="username">
              <Form.Label>
                Username
                <span style={{color: "red"}} > *</span>
              </Form.Label>
              <Form.Control 
                required
                type="text"
                name="username"
                onChange={handleChange}
                placeholder="enter username"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="password">
              <Form.Label>
                Password
                <span style={{color: "red"}} > *</span>
              </Form.Label>
              <Form.Control 
                required
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="enter password"
              />
            </Form.Group>
          </Form.Row>
          <Button type="submit" className="btn btn-primary" style={{width: "50%", margin: "20px", maxWidth: "200px"}}>Log In</Button>
        </Form>
      </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)