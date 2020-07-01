import React, { useState, Fragment } from "react";
import { Form, Col, Button } from "react-bootstrap";
import CloseBtn from "../become-an-intern/images/close-icon.png";
import "./admin.css";
import {connect} from 'react-redux'
import axios from 'axios'
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts'

function AdminHomepage(props) {
  const [data, setData] = useState({
    headerTitle: props.home.headerTitle,
    headerBody: props.home.headerBody, 
    headerButton: props.home.headerButton, 
    activitiesTitle: props.home.activitiesTitle, 
    instructorsTitle: props.home.instructorsTitle,
    tracksTitle: props.home.tracksTitle
  });
  const [validated, setValidated] = useState(false);
  const [activities, setActivities] = useState(props.home.activities);
  const [tracks, setTracks] = useState(props.home.tracks);
  const [instructors, setInstructors] = useState(props.home.instructors);
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
      userData.activities = activities;
      userData.tracks = tracks;
      userData.instructors = instructors;
      setData({...data, userData});
      props.pageInformation.home = data;
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
    setData(data => ({
      ...data, 
      [name]: value
  }))
  }

  const addField = (field) => {
    if(field === "activities") {
      activities.push({activityIcon: "", activityTitle: "", activityContent: ""});
      setActivities([...activities]);
    } else if(field === "tracks") {
      tracks.push({trackHeader: "", trackText: ""});
      setTracks([...tracks]);
    } else {
      instructors.push({instructorName: "", instructorTrack: "", instructorImage: ""});
      setInstructors([...instructors]);
    }
  }

  return (
    <>
      <ToastsContainer position={ToastsContainerPosition.TOP_LEFT} store={ToastsStore} />
      <div className="admin-homepage">
        <fieldset style={{border: "1px solid white", padding: "20px", borderRadius: "20px"}} >
          <h2>
            Home Page
          </h2>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            style={{display: "flex", flexDirection: "column", alignItems: "center"}}
          >
            <div className="form-row-container">
              <h4 style={{textAlign: "center", marginBottom: "1em"}}>Homepage Header *</h4>
              <Form.Row>
                <Form.Group as={Col} md="4" controlId="homeHeaderTitle">
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
                <Form.Group as={Col} md="4" controlId="homeHeaderBody">
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
                <Form.Group as={Col} md="4" controlId="homeHeaderButton">
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
              <h4>Internship Activities *</h4>
              <Form.Row>
                <Form.Group as={Col} md="4" controlId="activitiesTitle">
                  <Form.Label>
                    Activities Title
                    <span style={{color: "red"}} > *</span>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="2"
                    required
                    type="text"
                    name="activitiesTitle"
                    value={data.activitiesTitle}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <div className="form-row-container">
                  <h4>Activities *</h4>
                  {
                    activities.map((_, index) => (
                      <Fragment key={`activity${index}`} >
                        <Activity 
                          index={index}
                          setActivities={setActivities}
                          activities={activities}
                        />
                      </Fragment>
                    ))
                  }
                  <div style={{width: "100%", justifyContent: "center", display: "flex"}}><Button onClick={() => addField('activities')} className="btn btn-primary" style={{width: "50%", margin: "20px"}}>Add Field</Button></div>
                </div>
              </Form.Row>
            </div>
            <div className="form-row-container">
              <h4>Internship Tracks *</h4>
              <Form.Row>
                <Form.Group as={Col} md="4" controlId="tracksTitle">
                  <Form.Label>
                    Tracks Title
                    <span style={{color: "red"}} > *</span>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="2"
                    required
                    type="text"
                    name="tracksTitle"
                    value={data.tracksTitle}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <div className="form-row-container">
                  <h4>Tracks *</h4>
                  {
                    tracks.map((_, index) => (
                      <Fragment key={`track${index}`} >
                        <Track 
                          index={index}
                          setTracks={setTracks}
                          tracks={tracks}
                        />
                      </Fragment>
                    ))
                  }
                  <div style={{width: "100%", justifyContent: "center", display: "flex"}}><Button onClick={() => addField('tracks')} className="btn btn-primary" style={{width: "50%", margin: "20px"}}>Add Field</Button></div>
                </div>
              </Form.Row>
            </div>
            <div className="form-row-container">
              <h4>Instructors *</h4>
              <Form.Row>
                <Form.Group as={Col} md="4" controlId="instructorsTitle">
                  <Form.Label>
                    Instructors Title
                    <span style={{color: "red"}} > *</span>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="2"
                    required
                    type="text"
                    name="instructorsTitle"
                    value={data.instructorsTitle}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <div className="form-row-container">
                  <h4>Instructor's details *</h4>
                  {
                    instructors.map((_, index) => (
                      <Fragment key={`instructor${index}`} >
                        <Instructor 
                          index={index}
                          setInstructors={setInstructors}
                          instructors={instructors}
                        />
                      </Fragment>
                    ))
                  }
                  <div style={{width: "100%", justifyContent: "center", display: "flex"}}><Button onClick={() => addField('instructors')} className="btn btn-primary" style={{width: "50%", margin: "20px"}}>Add Field</Button></div>
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

const Activity = (props) => {
  const activities = [...props.activities];
  const setActivities = props.setActivities;
  const index = props.index;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name === "activityIcon") {
      activities[index].activityIcon = value;
    } else if (name === "activityTitle") {
      activities[index].activityTitle = value;
    } else activities[index].activityContent = value;

    setActivities(activities);
  }

  const removeField = () => {
    activities.splice(index, 1);
    setActivities([...activities]);
  }

  return (
    <> 
      <div className="form-row-container">
        <div className="close-btn" onClick={removeField}>
          <img alt="close" src={CloseBtn} />
        </div>
        <h5>{`Activity ${props.index + 1}`}</h5>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId={`activityIcon${props.index}`}>
            <Form.Label>
              Activity Icon
              <span style={{color: "red"}} > *</span>
            </Form.Label>
                      
            <Form.Control
              as="textarea"
              rows="2"
              required
              type="text"
              name="activityIcon"
              onChange={handleChange}
              value={`${activities[index].activityIcon}`}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId={`activityTitle${props.index}`}>
            <Form.Label>
              Activity Title
              <span style={{color: "red"}} > *</span>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows="2"
              required
              type="text"
              name="activityTitle"
              onChange={handleChange}
              value={`${activities[index].activityTitle}`}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId={`activityContent${props.index}`}>
            <Form.Label>
              Activity Content
              <span style={{color: "red"}} > *</span>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows="2"
              required
              type="text"
              name="activityContent"
              onChange={handleChange}
              value={`${activities[index].activityContent}`}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
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
    if(name === "trackHeader") {
      tracks[index].trackHeader = value;
    } else if (name === "trackText") {
      tracks[index].trackText = value;
    }

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
          <Form.Group as={Col} md="6" controlId={`trackHeader${props.index}`}>
            <Form.Label>
              Track Header
              <span style={{color: "red"}} > *</span>
            </Form.Label>         
            <Form.Control
              as="textarea"
              rows="2"
              required
              type="text"
              name="trackHeader"
              onChange={handleChange}
              value={`${tracks[index].trackHeader}`}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId={`trackText${props.index}`}>
            <Form.Label>
              Track Text
              <span style={{color: "red"}} > *</span>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows="2"
              required
              type="text"
              name="trackText"
              onChange={handleChange}
              value={`${tracks[index].trackText}`}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
      </div>
    </>
  );
}

const Instructor = (props) => {
  const instructors = [...props.instructors];
  const setInstructors = props.setInstructors;
  const index = props.index;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name === "instructorName") {
      instructors[index].instructorName = value;
    } else if (name === "instructorTrack") {
      instructors[index].instructorTrack = value;
    } else instructors[index].instructorImage = value;

    setInstructors(instructors);
  }

  const removeField = () => {
    instructors.splice(index, 1);
    setInstructors([...instructors]);
  }

  return (
    <> 
      <div className="form-row-container">
        <div className="close-btn" onClick={removeField}>
          <img alt="close" src={CloseBtn} />
        </div>
        <h5>{`Instructor ${props.index + 1}`}</h5>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId={`instructorName${props.index}`}>
            <Form.Label>
              Instructor Name
              <span style={{color: "red"}} > *</span>
            </Form.Label>
                      
            <Form.Control
              as="textarea"
              rows="2"
              required
              type="text"
              name="instructorName"
              onChange={handleChange}
              value={`${instructors[index].instructorName}`}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId={`instructorTrack${props.index}`}>
            <Form.Label>
              Instructor Track
              <span style={{color: "red"}} > *</span>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows="2"
              required
              type="text"
              name="instructorTrack"
              onChange={handleChange}
              value={`${instructors[index].instructorTrack}`}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId={`instructorImage${props.index}`}>
            <Form.Label>
              Image url
              <span style={{color: "red"}} > *</span>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows="2"
              required
              type="text"
              name="instructor"
              onChange={handleChange}
              value={`${instructors[index].instructorImage}`}
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
    home: state.home
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
export default connect(mapStateToProps, mapDispatchToProps)(AdminHomepage)
