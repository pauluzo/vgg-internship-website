import React from "react";
import "./admin.css";
import NavBar from "../home-page/Navbar";
import Footer from "../home-page/Footer";
import AdminHomepage from "./admin-homepage";
import AdminMission from "./admin-mission";
import AdminTutors from "./admin-tutors";
import AdminIntern from "./admin-intern";

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
            <p>You can make changes to any section of the form below.</p>
          </div>
          <div className="admin-form">
            <AdminHomepage />
            <AdminMission />
            <AdminTutors/>
            <AdminIntern/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}