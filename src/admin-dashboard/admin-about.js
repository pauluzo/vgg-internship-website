import React, { useState, Fragment } from "react";
import { Form, Col, Button } from "react-bootstrap";
import CloseBtn from "../become-an-intern/images/close-icon.png";
import "./admin.css";
import {connect} from 'react-redux'
import axios from 'axios'
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts'

function AdminAbout (props) {
  const [data, setData] = useState({
    detailsImage: props.about.detailsImage,
    detailsText: props.about.detailsText,
    detailsTitle: props.about.detailsTitle,
    headerText: props.about.headerText,
    headerTitle: props.about.headerTitle
  });
  const [validated, setValidated] = useState(false);
  const [benefits, setBenefits] = useState(props.about.benefits);
  const [loading, setLoading] = useState(false)

  const handleSubmit = (event) => {
    setLoading(true)
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      setLoading(false)
      return;
    } else {
      let userData = data;
      userData.benefits = benefits;
      setData({...data, userData});
      props.pageInformation.about = data;
      axios.put(`https://vgg-internship-db.herokuapp.com/api/content/${props.pageInformation._id}`, { ...props.pageInformation, })
        .then((res) => {
          props.updateStore(res.data)
          ToastsStore.success("changes have been made successfully")
          setLoading(false)
        })
        .catch((err) => {
          ToastsStore.error("An ERROR occured!")
          setLoading(false)
        })
    }
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setData({...data, [name]: value});
  }

  const addField = () => {
    benefits.push({benefitTitle: "F", benefitText: "G"});
    setBenefits([...benefits]);
  }

  return (
    <>
      <ToastsContainer position={ToastsContainerPosition.TOP_LEFT} store={ToastsStore} />
      <div className="admin-homepage">
        <fieldset style={{border: "1px solid white", padding: "20px", borderRadius: "20px"}} >
          <h2>
            About Page
          </h2>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            style={{display: "flex", flexDirection: "column", alignItems: "center"}}
          >
            <div className="form-row-container">
              <h4 style={{textAlign: "center", marginBottom: "1em"}}>About Page Header *</h4>
              <Form.Row>
                <Form.Group as={Col} md="6" controlId="aboutHeaderTitle">
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
                    value={data.headerTitle}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="aboutHeaderText">
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
                    value={data.headerText}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
            </div>
            <div className="form-row-container">
              <h4>About Details *</h4>
              <Form.Row>
                <Form.Group as={Col} md="4" controlId="aboutDetailsTitle">
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
                    value={data.detailsTitle}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="detailsText">
                  <Form.Label>
                    Details Text
                    <span style={{color: "red"}} > *</span>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="2"
                    required
                    type="text"
                    name="detailsText"
                    value={data.detailsText}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="detailsImage">
                  <Form.Label>
                    Details Image
                    <span style={{color: "red"}} > *</span>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="2"
                    type="text"
                    name="detailsImage"
                    value={data.detailsImage}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <div className="form-row-container">
                  <h4>About Benefits *</h4>
                  {
                    benefits.map((_, index) => (
                      <Fragment key={`detail${index}`} >
                        <Benefit
                          index={index}
                          setBenefits={setBenefits}
                          benefits={benefits}
                        />
                      </Fragment>
                    ))
                  }
                  <div style={{width: "100%", justifyContent: "center", display: "flex"}}><Button onClick={() => addField()} className="btn btn-primary" style={{width: "50%", margin: "20px"}}>Add Field</Button></div>
                </div>
              </Form.Row>
            </div>
            <Button type="submit" className="btn btn-success" style={{width: "50%", margin: "20px"}} disabled={loading}>{loading? "Updating..." : "Update"}</Button>
          </Form>
        </fieldset>
      </div>
    </>
  );
}

const Benefit = (props) => {
  const benefits = [...props.benefits];
  const setBenefits = props.setBenefits;
  const index = props.index;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name === "benefitTitle") {
      benefits[index].benefitTitle = value;
    } else if (name === "benefitText") {
      benefits[index].benefitText = value;
    }

    setBenefits([...benefits]);
  }

  const removeField = () => {
    benefits.splice(index, 1);
    setBenefits([...benefits]);
  }

  return (
    <> 
      <div className="form-row-container">
        <div className="close-btn" onClick={removeField}>
          <img alt="close" src={CloseBtn} />
        </div>
        <h5>{`Benefit ${props.index + 1}`}</h5>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId={`benefitTitle${props.index}`}>
            <Form.Label>
              Benefit Title
              <span style={{color: "red"}} > *</span>
            </Form.Label>         
            <Form.Control
              as="textarea"
              rows="2"
              required
              type="text"
              name="benefitTitle"
              onChange={handleChange}
              value={`${benefits[index].benefitTitle}`}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId={`benefitText${props.index}`}>
            <Form.Label>
              Benefit Text
              <span style={{color: "red"}} > *</span>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows="2"
              required
              type="text"
              name="benefitText"
              onChange={handleChange}
              value={`${benefits[index].benefitText}`}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    pageInformation: state,
    about: state.about
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminAbout)