import React from "react";
import './LandingPage.css';
import { Nav, Navbar } from "react-bootstrap";
import Logo from "../become-an-intern/images/intro-img.png";
import { Link } from "react-router-dom";



const NavBar=() => {
  return (
    <Navbar collapseOnSelect variant="dark" expand="lg" className="background" style={{position: "fixed", width: "100%", zIndex: "20", height: "70px"}}>
      <Navbar.Brand href="/">
      <img  style={{width:"200px", textAlign: "center"}}  src={Logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{color: "white"}}/>
      <Navbar.Collapse id="responsive-navbar-nav" style={{zIndex: "1", backgroundColor: "inherit", paddingLeft: "10px"}}>
        <Nav className="ml-auto pointer">
          <Link to="/" className="text-white text nav-link">Home</Link>
          <Link className="text-white text nav-link" to="/registration-form">Register</Link>
          <Link className="text-white text nav-link" to="/join-the-mission">Join The Mission</Link>
          <Link className="text-white text nav-link" to="/facilitators">Tutors</Link>
          <Link className="text-white text nav-link" to="/past-interns">Past Interns</Link>
          <Link className="text-white text nav-link" to="/about">About</Link>
        </Nav>
      </Navbar.Collapse>
      
    </Navbar>
  );
}

export default NavBar;