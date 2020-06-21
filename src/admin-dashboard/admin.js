import React from "react";
import "./admin.css";
import NavBar from "../home-page/Navbar";
import Footer from "../home-page/Footer";
import AdminHomepage from "./admin-homepage";

export default function Admin() {
  return(
    <>
      <NavBar/>
      <div className="admin-container">
        <div style={{backgroundColor: "gainsboro", minHeight: "100vh"}} className="container">
          <div className="admin-intro">
            <h1>
              Welcome, Admin.
            </h1>
            <p>* You can make changes to any section of the form below.</p>
            <p>* Refresh browser after saving, to see the effects of the changes.</p>
          </div>
          <div className="admin-form">
            <AdminHomepage />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}