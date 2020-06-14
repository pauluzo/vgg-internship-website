import React from "react";
import "./admin.css";
import NavBar from "../home-page/Navbar";
import Footer from "../home-page/Footer";
import { Form, Col, Button, Container} from "react-bootstrap";

export default function Admin() {
  return(
    <>
      <NavBar/>
      <div className="admin-container">
        <div style={{backgroundColor: "grey", minHeight: "100vh"}} className="container">
          <div className="admin-intro">
            <h1>
              Welcome, Admin.
            </h1>
            <p>* You can make changes to any section of the form below.</p>
            <p>* Refresh browser after saving, to see the effects of the changes.</p>
          </div>
          <div className="admin-form">
            <div className="admin-homepage">
              <fieldset>
                <h3>
                  Home Page
                </h3>

                <Form
                
                >
                  <Form.Row>
                    <Form.Group as={Col} md="4" controlId="homepageHeader">
                      <Form.Label>
                        Homepage Header
                        <span style={{color: "red"}} > *</span>
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="HomepageHeader"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                </Form>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}