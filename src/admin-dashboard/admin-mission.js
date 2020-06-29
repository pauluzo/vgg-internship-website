import React, { useState, Fragment } from "react";
import { Form, Col, Button } from "react-bootstrap";
import CloseBtn from "../become-an-intern/images/close-icon.png";
import "./admin.css";
import {connect} from 'react-redux'
import axios from 'axios'
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts'

function AdminMission (props) {
  const [data, setData] = useState({
    headerTitle: props.joinTheMission.headerTitle,
    headerBody: props.joinTheMission.headerBody,
    headerButton: props.joinTheMission.headerButton,
    tracksHeader: props.joinTheMission.tracksHeader,
    tracksText: props.joinTheMission.tracksText,
    footerButton: props.joinTheMission.footerButton,
    footerText: props.joinTheMission.footerText,
    missionContentA: props.joinTheMission.missionContentA,
    missionContentB: props.joinTheMission.missionContentB
  });
  const [validated, setValidated] = useState(false);
  const [tracks, setTracks] = useState(props.joinTheMission.tracks);
  const [loading, setLoading] = useState(false)

  const handleSubmit = (event) => {
    setLoading(true)
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    } else {
      let userData = data;
      userData.tracks = tracks;
      setData({...data, userData});
      props.pageInformation.mission = data;
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
    tracks.push({trackTitle: "N", trackContent: "O", trackImage: "p"});
    setTracks([...tracks]);
  }

  return (
    <>
      <ToastsContainer position={ToastsContainerPosition.TOP_LEFT} store={ToastsStore} />
      <div className="admin-homepage">
        <fieldset style={{border: "1px solid white", padding: "20px", borderRadius: "20px"}} >
          <h2>
            Join The Mission
          </h2>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            style={{display: "flex", flexDirection: "column", alignItems: "center"}}
          >
            <div className="form-row-container">
              <h4 style={{textAlign: "center", marginBottom: "1em"}}>Mission Header *</h4>
              <Form.Row>
                <Form.Group as={Col} md="4" controlId="headerTitle">
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
                <Form.Group as={Col} md="4" controlId="headerBody">
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
                    value={data.headerBody}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="headerButton">
                  <Form.Label>
                    Header Button
                    <span style={{color: "red"}} > *</span>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="2"
                    required
                    type="text"
                    name="headerButton"
                    value={data.headerButton}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
            </div>
            <div className="form-row-container">
              <h4>Available Tracks *</h4>
              <Form.Row>
                <Form.Group as={Col} md="6" controlId="tracksHeader">
                  <Form.Label>
                    Tracks Header
                    <span style={{color: "red"}} > *</span>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="2"
                    required
                    type="text"
                    name="tracksHeader"
                    value={data.tracksHeader}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="tracksText">
                  <Form.Label>
                    Tracks Text
                    <span style={{color: "red"}} > *</span>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="2"
                    required
                    type="text"
                    name="tracksText"
                    value={data.tracksText}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <div className="form-row-container">
                  <h4>Tracks *</h4>
                  {
                    tracks.map((_, index) => (
                      <Fragment key={`activity${index}`} >
                        <Track 
                          index={index}
                          setTracks={setTracks}
                          tracks={tracks}
                        />
                      </Fragment>
                    ))
                  }
                  <div style={{width: "100%", justifyContent: "center", display: "flex"}}><Button onClick={() => addField()} className="btn btn-primary" style={{width: "50%", margin: "20px"}}>Add Field</Button></div>
                </div>
              </Form.Row>
            </div>
            <div className="form-row-container">
              <h4 style={{textAlign: "center", marginBottom: "1em"}}>Mission Content *</h4>
              <Form.Row>
                <Form.Group as={Col} md="6" controlId="missionContentA">
                  <Form.Label>
                    Content A
                    <span style={{color: "red"}} > *</span>
                  </Form.Label>
                    
                  <Form.Control
                    as="textarea"
                    rows="2"
                    required
                    type="text"
                    name="missionContentA"
                    value={data.missionContentA}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="missionContentB">
                  <Form.Label>
                    Content B
                    <span style={{color: "red"}} > *</span>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="2"
                    required
                    type="text"
                    name="missionContentB"
                    value={data.missionContentB}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
            </div>
            <div className="form-row-container">
              <h4 style={{textAlign: "center", marginBottom: "1em"}}>Mission Footer *</h4>
              <Form.Row>
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
                <Form.Group as={Col} md="6" controlId="footerButton">
                  <Form.Label>
                    Footer Button
                    <span style={{color: "red"}} > *</span>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="2"
                    required
                    type="text"
                    name="footerButton"
                    value={data.footerButton}
                    onChange={handleChange}
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

const Track = (props) => {
  const tracks = [...props.tracks];
  const setTracks = props.setTracks;
  const index = props.index;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name === "trackImage") {
      tracks[index].trackImage = value;
    } else if (name === "trackTitle") {
      tracks[index].trackTitle = value;
    } else tracks[index].trackContent = value;

    setTracks([...tracks]);
  }

  const removeField = () => {
    tracks.splice(index, 1);
    setTracks([...tracks]);
  }

  return (
    <> 
      <div className="form-row-container">
        <div className="close-btn" onClick={removeField}>
          <img alt="close" src={CloseBtn} />
        </div>
        <h5>{`Track ${props.index + 1}`}</h5>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId={`trackImage${props.index}`}>
            <Form.Label>
              Track Image
              <span style={{color: "red"}} > *</span>
            </Form.Label>         
            <Form.Control
              as="textarea"
              rows="2"
              required
              type="text"
              name="trackImage"
              onChange={handleChange}
              value={`${tracks[index].trackImage}`}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId={`trackTitle${props.index}`}>
            <Form.Label>
              Track Title
              <span style={{color: "red"}} > *</span>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows="2"
              required
              type="text"
              name="trackTitle"
              onChange={handleChange}
              value={`${tracks[index].trackTitle}`}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId={`trackContent${props.index}`}>
            <Form.Label>
              Track Content
              <span style={{color: "red"}} > *</span>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows="2"
              required
              type="text"
              name="trackContent"
              onChange={handleChange}
              value={`${tracks[index].trackContent}`}
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
    joinTheMission: state.mission
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminMission)