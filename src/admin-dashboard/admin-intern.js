import React, { useState, Fragment } from "react";
import { Form, Col, Button } from "react-bootstrap";
import CloseBtn from "../become-an-intern/images/close-icon.png";
import "./admin.css";

export default function AdminIntern () {
  const [data, setData] = useState({});
  const [validated, setValidated] = useState(false);
  const [details, setDetails] = useState([
    {internName: "A", internTrack: "B", internImage: "C", testimony: "D", twitterInfo: "E"},
    {internName: "A", internTrack: "B", internImage: "C", testimony: "D", twitterInfo: "E"},
  ]);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    } else {
      let userData = data;
      userData.details = details;
      setData({...data, userData});
      console.log(data);
    }
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setData({...data, [name]: value});
  }

  const addField = () => {
    details.push({internName: "F", internTrack: "G", internImage: "H"});
    setDetails([...details]);
  }

  return (
    <>
      <div className="admin-homepage">
        <fieldset style={{border: "1px solid white", padding: "20px", borderRadius: "20px"}} >
          <h2>
            Past Interns
          </h2>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            style={{display: "flex", flexDirection: "column", alignItems: "center"}}
          >
            <div className="form-row-container">
              <h4 style={{textAlign: "center", marginBottom: "1em"}}>Past Interns' Header *</h4>
              <Form.Row>
                <Form.Group as={Col} md="6" controlId="internHeaderText">
                  <Form.Label>
                    Header Text
                    <span style={{color: "red"}} > *</span>
                  </Form.Label>
                    
                  <Form.Control
                    as="textarea"
                    rows="2"
                    required
                    type="text"
                    name="headerText"
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
            </div>
            <div className="form-row-container">
              <h4>Past Interns' Details *</h4>
              <Form.Row>
                <Form.Group as={Col} md="6" controlId="internDetailsTitle">
                  <Form.Label>
                    Details Title
                    <span style={{color: "red"}} > *</span>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="2"
                    required
                    type="text"
                    name="detailsTitle"
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <div className="form-row-container">
                  <h4>Details *</h4>
                  {
                    details.map((_, index) => (
                      <Fragment key={`detail${index}`} >
                        <Detail
                          index={index}
                          setDetails={setDetails}
                          details={details}
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

const Detail = (props) => {
  const details = [...props.details];
  const setDetails = props.setDetails;
  const index = props.index;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name === "internName") {
      details[index].internName = value;
    } else if (name === "internTrack") {
      details[index].internTrack = value;
    } else if(name === "internImage") {
      details[index].internImage = value;
    }

    console.log(details);
    setDetails([...details]);
  }

  const removeField = () => {
    details.splice(index, 1);
    setDetails([...details]);
  }

  return (
    <> 
      <div className="form-row-container">
        <div className="close-btn" onClick={removeField}>
          <img alt="close" src={CloseBtn} />
        </div>
        <h5>{`Past Intern ${props.index + 1}`}</h5>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId={`internName${props.index}`}>
            <Form.Label>
              Intern Name
              <span style={{color: "red"}} > *</span>
            </Form.Label>         
            <Form.Control
              as="textarea"
              rows="2"
              required
              type="text"
              name="internName"
              onChange={handleChange}
              value={`${details[index].internName}`}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId={`internTrack${props.index}`}>
            <Form.Label>
              Intern's Track
              <span style={{color: "red"}} > *</span>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows="2"
              required
              type="text"
              name="internTrack"
              onChange={handleChange}
              value={`${details[index].internTrack}`}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId={`internImage${props.index}`}>
            <Form.Label>
              Intern's Image
              <span style={{color: "red"}} > *</span>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows="2"
              required
              type="text"
              name="internImage"
              onChange={handleChange}
              value={`${details[index].internImage}`}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId={`internTestimony${props.index}`}>
            <Form.Label>
              Intern's Testimony
              <span style={{color: "red"}} > *</span>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows="2"
              required
              type="text"
              name="testimony"
              onChange={handleChange}
              value={`${details[index].testimony}`}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId={`twitterInfo${props.index}`}>
            <Form.Label>
              Intern's Twitter Handle
              <span style={{color: "red"}} > *</span>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows="2"
              required
              type="text"
              name="twitterInfo"
              onChange={handleChange}
              value={`${details[index].twitterInfo}`}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
      </div>
    </>
  );
}