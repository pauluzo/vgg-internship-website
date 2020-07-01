import React, { useState, Fragment } from "react";
import { Form, Col, Button } from "react-bootstrap";
import "./admin.css";
import CloseBtn from "../become-an-intern/images/close-icon.png";
import {connect} from 'react-redux'
import axios from 'axios'
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts'

function AdminFooter (props) {
  const [data, setData] = useState({
    emailIcon: props.footer.emailIcon,
    emailText: props.footer.emailText,
    footerImage: props.footer.footerImage,
    footerText: props.footer.footerText,
    footerText2: props.footer.footerText2,
  });
  const [validated, setValidated] = useState(false);
  const [icons, setIcons] = useState(props.footer.icons)
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
      userData.icons = icons;
      setData({...data, userData});
      props.pageInformation.footer = data;
      axios.put(`https://vgg-internship-db.herokuapp.com/api/content/${props.pageInformation._id}`, { ...props.pageInformation, })
        .then((res) => {
          props.updateStore(res.data)
          ToastsStore.success("changes have been made successfully")
          setLoading(false)
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
    setData({...data, [name]: value});
  }

  const addField = () => {
    icons.push({benefitTitle: "F", benefitText: "G"});
    setIcons([...icons]);
  }

  return (
    <>
      <ToastsContainer position={ToastsContainerPosition.TOP_LEFT} store={ToastsStore} />
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
                    value={data.footerImage}
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
                    value={data.footerText}
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
                    value={data.footerText2}
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
                    value={data.emailIcon}
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
                    value={data.emailText}
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
            <Button type="submit" className="btn btn-success" style={{width: "50%", margin: "20px"}} disabled={loading}>{loading? "Updating..." : "Update"}</Button>
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

const mapStateToProps = (state) => {
  return {
    pageInformation: state,
    footer: state.footer
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
export default connect(mapStateToProps, mapDispatchToProps)(AdminFooter)