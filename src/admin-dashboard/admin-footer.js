import React, { useState, Fragment } from "react";
import { Form, Col, Button } from "react-bootstrap";
import "./admin.css";
import CloseBtn from "../become-an-intern/images/close-icon.png";

export default function AdminFooter () {
  const [data, setData] = useState({});
  const [validated, setValidated] = useState(false);
  const [icons, setIcons] = useState([
    {iconLink: "f", mediaSrc: "h"},
    {iconLink: "r", mediaSrc: "q"}
  ])

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    } else {
      let userData = data;
      userData.icons = icons;
      setData({...data, userData});
      console.log(data);
    }
  }


  const handleChange = (event) => {
    const {name, value} = event.target;
    setData({...data, [name]: value});
  }

  const addField = () => {
    icons.push({benefitTitle: "F", benefitText: "G"});
    setIcons([...icons]);
  }

  return (
    <>
      <div className="admin-homepage">
        <fieldset style={{border: "1px solid white", padding: "20px", borderRadius: "20px"}} >
          <h2>
            Footer
          </h2>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            style={{display: "flex", flexDirection: "column", alignItems: "center"}}
          >
            <div className="form-row-container">
              <h4 style={{textAlign: "center", marginBottom: "1em"}}>Footer Header *</h4>
              <Form.Row>
              <Form.Group as={Col} md="6" controlId="footerImage">
                  <Form.Label>
                    Footer Image
                    <span style={{color: "red"}} > *</span>
                  </Form.Label>
                    
                  <Form.Control
                    as="textarea"
                    rows="2"
                    required
                    type="text"
                    name="footerImage"
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="footerText">
                  <Form.Label>
                    Footer Text
                    <span style={{color: "red"}} > *</span>
                  </Form.Label>
                    
                  <Form.Control
                    as="textarea"
                    rows="2"
                    required
                    type="text"
                    name="footerText"
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="footerText2">
                  <Form.Label>
                    Footer Sub-Text
                    <span style={{color: "red"}} > *</span>
                  </Form.Label>
                    
                  <Form.Control
                    as="textarea"
                    rows="2"
                    required
                    type="text"
                    name="footerText2"
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
            </div>
            <div className="form-row-container">
              <h4>Footer Icon Details *</h4>
              <Form.Row>
                <Form.Group as={Col} md="6" controlId="emailIcon">
                  <Form.Label>
                    Email Icon Link
                    <span style={{color: "red"}} > *</span>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="2"
                    required
                    type="text"
                    name="emailIcon"
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="emailText">
                  <Form.Label>
                    Email Text
                    <span style={{color: "red"}} > *</span>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="2"
                    required
                    type="text"
                    name="emailText"
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <div className="form-row-container">
                  <h4>Footer Icons *</h4>
                  {
                    icons.map((_, index) => (
                      <Fragment key={`detail${index}`} >
                        <Icon
                          index={index}
                          setIcons={setIcons}
                          icons={icons}
                        />
                      </Fragment>
                    ))
                  }
                  <div style={{width: "100%", justifyContent: "center", display: "flex"}}><Button onClick={() => addField()} className="btn btn-primary" style={{width: "50%", margin: "20px"}}>Add Field</Button></div>
                </div>
              </Form.Row>
            </div>
            <Button type="submit" className="btn btn-success" style={{width: "50%", margin: "20px"}}>Update</Button>
          </Form>
        </fieldset>
      </div>
    </>
  );
}

const Icon = (props) => {
  const icons = [...props.icons];
  const setIcons = props.setIcons;
  const index = props.index;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name === "iconLink") {
      icons[index].iconLink = value;
    } else if (name === "mediaSrc") {
      icons[index].mediaSrc = value;
    }

    console.log(icons);
    setIcons([...icons]);
  }

  const removeField = () => {
    icons.splice(index, 1);
    setIcons([...icons]);
  }

  return (
    <> 
      <div className="form-row-container">
        <div className="close-btn" onClick={removeField}>
          <img alt="close" src={CloseBtn} />
        </div>
        <h5>{`Icon ${props.index + 1}`}</h5>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId={`iconLink${props.index}`}>
            <Form.Label>
              Icon Link
              <span style={{color: "red"}} > *</span>
            </Form.Label>         
            <Form.Control
              as="textarea"
              rows="2"
              required
              type="text"
              name="iconLink"
              onChange={handleChange}
              value={`${icons[index].iconLink}`}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId={`mediaSrc${props.index}`}>
            <Form.Label>
              Social Media Link
              <span style={{color: "red"}} > *</span>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows="2"
              required
              type="text"
              name="mediaSrc"
              onChange={handleChange}
              value={`${icons[index].mediaSrc}`}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
      </div>
    </>
  );
}