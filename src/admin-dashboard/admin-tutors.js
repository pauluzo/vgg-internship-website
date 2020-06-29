import React, { useState, Fragment } from "react";
import { Form, Col, Button } from "react-bootstrap";
import CloseBtn from "../become-an-intern/images/close-icon.png";
import "./admin.css";

export default function AdminTutors () {
  const [data, setData] = useState({});
  const [validated, setValidated] = useState(false);
  const [details, setDetails] = useState([
    {tutorName: "A", tutorTrack: "B", tutorImage: "C", githubInfo: "D", twitterInfo: "E"},
    {tutorName: "F", tutorTrack: "G", tutorImage: "H", githubInfo: "I", twitterInfo: "J"},
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
    details.push({tutorName: "F", tutorTrack: "G", tutorImage: "H", githubInfo: "I", twitterInfo: "J"});
    setDetails([...details]);
  }

  return (
    <>
      <div className="admin-homepage">
        <fieldset style={{border: "1px solid white", padding: "20px", borderRadius: "20px"}} >
          <h2>
            Tutors
          </h2>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            style={{display: "flex", flexDirection: "column", alignItems: "center"}}
          >
            <div className="form-row-container">
              <h4 style={{textAlign: "center", marginBottom: "1em"}}>Tutors Header *</h4>
              <Form.Row>
                <Form.Group as={Col} md="6" controlId="headerTitle">
                  <Form.Label>
                    Header Title
                    <span style={{color: "red"}} > *</span>
                  </Form.Label>
                    
                  <Form.Control
                    as="textarea"
                    rows="2"
                    required
                    type="text"
                    name="headerTitle"
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="headerBody">
                  <Form.Label>
                    Header Body
                    <span style={{color: "red"}} > *</span>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="2"
                    required
                    type="text"
                    name="headerBody"
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
            </div>
            <div className="form-row-container">
              <h4>Tutor Details *</h4>
              <Form.Row>
                <Form.Group as={Col} md="6" controlId="detailsTitle">
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
    if(name === "tutorName") {
      details[index].tutorName = value;
    } else if (name === "tutorTrack") {
      details[index].tutorTrack = value;
    } else if(name === "tutorImage") {
      details[index].tutorImage = value;
    } else if(name === "githubInfo") {
      details[index].githubInfo = value;
    } else if(name === "twitterInfo") details[index].twitterInfo = value;

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
        <h5>{`Tutor ${props.index + 1}`}</h5>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId={`tutorName${props.index}`}>
            <Form.Label>
              Tutor Name
              <span style={{color: "red"}} > *</span>
            </Form.Label>         
            <Form.Control
              as="textarea"
              rows="2"
              required
              type="text"
              name="tutorName"
              onChange={handleChange}
              value={`${details[index].tutorName}`}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId={`tutorTrack${props.index}`}>
            <Form.Label>
              Tutor's Track
              <span style={{color: "red"}} > *</span>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows="2"
              required
              type="text"
              name="tutorTrack"
              onChange={handleChange}
              value={`${details[index].tutorTrack}`}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId={`tutorImage${props.index}`}>
            <Form.Label>
              Tutor's Image
              <span style={{color: "red"}} > *</span>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows="2"
              required
              type="text"
              name="tutorImage"
              onChange={handleChange}
              value={`${details[index].tutorImage}`}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId={`githubInfo${props.index}`}>
            <Form.Label>
              Github Info
              <span style={{color: "red"}} > *</span>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows="2"
              required
              type="text"
              name="githubInfo"
              onChange={handleChange}
              value={`${details[index].githubInfo}`}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId={`twitterInfo${props.index}`}>
            <Form.Label>
              Twitter Info
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