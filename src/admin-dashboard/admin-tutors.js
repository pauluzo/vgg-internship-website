import React, { useState, Fragment } from "react";
import { Form, Col, Button } from "react-bootstrap";
import CloseBtn from "../become-an-intern/images/close-icon.png";
import "./admin.css";
import {connect} from 'react-redux'
import ProgressBar from "bootstrap-progress-bar";
import axios from 'axios'
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts'

function AdminTutors (props) {
  const [data, setData] = useState({
    detailsTitle: props.tutors.detailsTitle,
    headerBody: props.tutors.headerBody,
    headerTitle: props.tutors.headerTitle,
  });
  const [validated, setValidated] = useState(false);
  const [details, setDetails] = useState(props.tutors.details);
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
      userData.details = details;
      setData({...data, userData});
      props.pageInformation.tutors = data;
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
    details.push({tutorName: "", tutorTrack: "", tutorImage: "", githubInfo: "", twitterInfo: ""});
    setDetails([...details]);
  }

  return (
    <>
      <ToastsContainer position={ToastsContainerPosition.TOP_LEFT} store={ToastsStore} />
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
                <Form.Group as={Col} md="6" controlId="tutorsHeaderTitle">
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
                <Form.Group as={Col} md="6" controlId="tutorsHeaderBody">
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
              </Form.Row>
            </div>
            <div className="form-row-container">
              <h4>Tutor Details *</h4>
              <Form.Row>
                <Form.Group as={Col} md="6" controlId="tutorDetailsTitle">
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
            <Button type="submit" className="btn btn-success" style={{width: "50%", margin: "20px"}} disabled={loading}>{loading? "Updating..." : "Update"}</Button>
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
  const cloudName = 'mydar'
  const unsignedUploadPreset = 'fhfkz28c'
  const [imageUrl, setImageUrl] = useState(details[index].tutorImage)
  const [percent, setPercent] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name === "tutorName") {
      details[index].tutorName = value;
    } else if (name === "tutorTrack") {
      details[index].tutorTrack = value;
    } else if(name === "tutorImage") {
      details[index].tutorImage = imageUrl;
    } else if(name === "githubInfo") {
      details[index].githubInfo = value;
    } else if(name === "twitterInfo") details[index].twitterInfo = value;

    setDetails([...details]);
  }

  const removeField = () => {
    details.splice(index, 1);
    setDetails([...details]);
  }

  const uploadFile = (file) => {
    let url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`
    let xhr = new XMLHttpRequest()
    let fd = new FormData()
    xhr.open('POST', url, true)
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
    xhr.upload.onprogress = (event) => {
        const { loaded, total } = event;
  
        let progress = Math.round((loaded * 100.0) / total);
        setPercent(progress)
      }
    xhr.onreadystatechange = function(e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
          let response = JSON.parse(xhr.responseText)
          let url = response.secure_url
          setImageUrl(url)
          details[index].tutorImage = url
          setDetails([...details]);
        }
    }
    fd.append('upload_preset', unsignedUploadPreset)
    fd.append('file', file);
    xhr.send(fd);

}

const handleFiles = (event) => {
    let file = event.target.files[0]
    uploadFile(file)
    
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
          <Form.Group as={Col} md="4" controlId={`githubInfo${props.index}`}>
            <Form.Label>
              Github Info
            </Form.Label>
            <Form.Control
              as="textarea"
              rows="2"
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
            </Form.Label>
            <Form.Control
              as="textarea"
              rows="2"
              type="text"
              name="twitterInfo"
              onChange={handleChange}
              value={`${details[index].twitterInfo}`}
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
              value={imageUrl}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId={`internImage${props.index}`}>
          <input name="coverimage" type="file" accept="image/*" onChange={handleFiles} />Upload Image
            {percent > 0 && percent < 100 && (
              <ProgressBar now={percent} active label={`${percent}%`} />
            )}
          </Form.Group>
        </Form.Row>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    pageInformation: state,
    tutors: state.tutors
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
export default connect(mapStateToProps, mapDispatchToProps)(AdminTutors)