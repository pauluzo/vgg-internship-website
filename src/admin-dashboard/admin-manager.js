import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import "./admin.css";
import {connect} from 'react-redux'
import ProgressBar from "bootstrap-progress-bar";
import axios from 'axios'
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts'

function AdminManager (props) {
  const cloudName = 'mydar'
  const unsignedUploadPreset = 'fhfkz28c'
  const [percent, setPercent] = useState(0);
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    instagramInfo: props.communityManager.instagramInfo,
    managerImage: props.communityManager.managerImage,
    managerName: props.communityManager.managerName,
    managerText: props.communityManager.managerText,
    managerTitle: props.communityManager.managerTitle,
    twitterInfo: props.communityManager.twitterInfo
  });
  const [validated, setValidated] = useState(false);
  

  const handleSubmit = (event) => {
    setLoading(true)
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    } else {
      props.pageInformation.manager = data;
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
          setData(data => ({
            ...data, 
            managerImage: url
            
        }))
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
    <ToastsContainer position={ToastsContainerPosition.TOP_LEFT} store={ToastsStore} />
      <div className="admin-homepage">
        <fieldset style={{border: "1px solid white", padding: "20px", borderRadius: "20px"}} >
          <h2>
            Community Manager
          </h2>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            style={{display: "flex", flexDirection: "column", alignItems: "center"}}
          >
            <div className="form-row-container">
              <h4 style={{textAlign: "center", marginBottom: "1em"}}>Manager's Details *</h4>
              <Form.Row>
                <Form.Group as={Col} md="4" controlId="managerText">
                  <Form.Label>
                    Manager's Text
                    <span style={{color: "red"}} > *</span>
                  </Form.Label>
                    
                  <Form.Control
                    as="textarea"
                    rows="2"
                    required
                    type="text"
                    name="managerText"
                    value={data.managerText}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="managerName">
                  <Form.Label>
                    Manager's Name
                    <span style={{color: "red"}} > *</span>
                  </Form.Label>
                    
                  <Form.Control
                    as="textarea"
                    rows="2"
                    required
                    type="text"
                    name="managerName"
                    value={data.managerName}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="managerTitle">
                  <Form.Label>
                    Manager's Title
                    <span style={{color: "red"}} > *</span>
                  </Form.Label>
                    
                  <Form.Control
                    as="textarea"
                    rows="2"
                    required
                    type="text"
                    name="managerTitle"
                    value={data.managerTitle}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="instagramInfo">
                  <Form.Label>
                    Instagram Info
                    <span style={{color: "red"}} > *</span>
                  </Form.Label>
                    
                  <Form.Control
                    as="textarea"
                    rows="2"
                    required
                    type="text"
                    name="instagramInfo"
                    value={data.instagramInfo}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="twitterInfo">
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
                    value={data.twitterInfo}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="managerImage">
                  <Form.Label>
                    Manager's Image
                    <span style={{color: "red"}} > *</span>
                  </Form.Label>
                    
                  <Form.Control
                    as="textarea"
                    rows="2"
                    required
                    type="text"
                    name="managerImage"
                    value={data.managerImage}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="managerImage">
                <input name="coverimage" type="file" accept="image/*" onChange={handleFiles} />Upload Image
                  {percent > 0 && percent < 100 && (
                    <ProgressBar now={percent} active label={`${percent}%`} />
                  )}
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

const mapStateToProps = (state) => {
  return {
    pageInformation: state,
    communityManager: state.manager
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
export default connect(mapStateToProps, mapDispatchToProps)(AdminManager)