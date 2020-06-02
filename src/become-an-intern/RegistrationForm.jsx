import React, { useState } from "react";
import { Form, Col, Button, Container, Card } from "react-bootstrap";
import { Redirect, Link } from "react-router-dom";
import Axios from 'axios'
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts'
import Image from "./images/intro-img.png"

export const RegistrationForm = () => {
  const [validated, setValidated] = useState(false);
  const [data, setData] = useState();
  const [redirect, setRedirect] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handlePost = () => {
    Axios.post("https://vgg-interns-api.herokuapp.com/api/register", { ...data })
    .then(res => {
      ToastsStore.success(res.data.message)
      setRedirect(true)
    })
    .catch(err => {
      const { message } = err.response.data;
     if(typeof(message)=="object"){
     message.map(item => ToastsStore.error(item.msg))
     } else {
      ToastsStore.error(message)
     }
     })
  }
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
    handlePost();
  }

  const renderRedirect = () => {
    if (redirect) {
        return <Redirect to='./'/>
    }
  }

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)), url('https://pbs.twimg.com/media/DgXB_7pXcAIUP3E.jpg')"}}>
      {renderRedirect()}
      <ToastsContainer position={ToastsContainerPosition.TOP_LEFT} store={ToastsStore}/>
      <Container style={{ margin: "20px"}}>
      <Card style={{ textAlign: "center", marginBottom: "10px", marginTop: "3px",}}>
        <Card.Img
          variant="top"
          src={Image}
          /*check the background color to change the shade*/
          style={{ backgroundColor: "#0B2B26", height: "auto", width: "100%"}}
        />
        <Card.Body>
          <Card.Title style={{ textAlign: "center", fontSize: "35px", fontWeight: "bold", color: "#50b64a" }}>
              BECOME AN INTERN
            </Card.Title>
            <Card.Text>
            Not sure what track to choose? Take this<Link to="/take-a-survey"> survey.</Link>
          </Card.Text>
        </Card.Body>
      </Card>
      
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        onChange={handleChange}
        className="align-middle"
        style={{ color: "white" }}
      >
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="firstNameValidation">
            <Form.Label>
              First name
              <span style={{ color: "red" }}> *</span>
            </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              name="firstName"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="lastNameValidation">
            <Form.Label>
              Last name
              <span style={{ color: "red" }}> *</span>
            </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              name="lastName"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="emailValidation" >
            <Form.Label>
              Email
              <span style={{ color: "red" }}> *</span>
            </Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="john.doe@mail.com"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please input a valid email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="phoneValidation">
            <Form.Label>
              Phone Number
              <span style={{ color: "red" }}> *</span>
            </Form.Label>
            <Form.Control
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please input a valid Phone number.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="genderValidation">
            <Form.Label>
              Gender
              <span style={{ color: "red" }}> *</span>
            </Form.Label>
            <Form.Control as="select" name="gender" required>
              <option></option>
              <option>Female</option>
              <option>Male</option>
              <option>Other</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="dateValidation">
            <Form.Label>
              Date of birth
              <span style={{ color: "red" }}> *</span>
            </Form.Label>
            <Form.Control
              type="date"
              name="dob"
              placeholder="Date of birth"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please Input your date of birth.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="trackValidation">
            <Form.Label>
              Track
              <span style={{ color: "red" }}> *</span>
            </Form.Label>
            <Form.Control as="select" name="track" required>
              <option></option>
              <option>Frontend</option>
              <option>Backend</option>
              <option>DevOps</option>
              <option>UI/UX designer</option>
              <option>Software Quality Assurance</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="proficiencyValidation">
            <Form.Label>
              Proficiency
              <span style={{ color: "red" }}> *</span>
            </Form.Label>
            <Form.Control as="select" name="proficiency" required>
              <option></option>
              <option>Beginner</option>
              <option>Junior</option>
              <option>Intermediate</option>
              <option>Senior</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="cityValidation">
            <Form.Label>
              City
              <span style={{ color: "red" }}> *</span>
            </Form.Label>
            <Form.Control type="text" placeholder="City" required name="city" />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="stateValidation">
            <Form.Label>
              State
              <span style={{ color: "red" }}> *</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="State"
              required
              name="state"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="countryValidation">
            <Form.Label>
              Country
              <span style={{ color: "red" }}> *</span>
            </Form.Label>
            <Form.Control
              type="text"
              name="country"
              placeholder="Country"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Country.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Button type="submit" style={{padding: "5px", width: "100%", fontSize: "23px"}}>Submit</Button>
      </Form>
    </Container>
    </div>
  );
};
