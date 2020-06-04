import React from "react";
import './LandingPage.css';
import { Nav, Navbar} from "react-bootstrap";



 const NavBar=() => {
  return (
    <Navbar collapseOnSelect expand="lg" className="background">
      <Navbar.Brand href="/">
      <img  style={{width:"200px", textAlign: "center"}}  src="https://res.cloudinary.com/dev-sam/image/upload/v1590685777/we7l1ttvgs6btbvuilvt.png" alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto pointer">
          <Nav.Link className="text-white text" href="/">Home</Nav.Link>
          <Nav.Link className="text-white text" href="/about">About</Nav.Link>
          <Nav.Link className="text-white text" href="/tutors">Tutors</Nav.Link>
          <Nav.Link className="text-white text" href="/interns">Past Interns</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      
    </Navbar>
  );
}

export default NavBar;