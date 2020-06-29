import React, { useState } from "react";
import "./admin.css";
import NavBar from "../home-page/Navbar";
import Footer from "../home-page/Footer";
import AdminHomepage from "./admin-homepage";
import AdminMission from "./admin-mission";
import AdminTutors from "./admin-tutors";
import AdminIntern from "./admin-intern";
import AdminAbout from "./admin-about";
import AdminFooter from "./admin-footer";
import AdminManager from "./admin-manager";
import AdminRegistration from "./admin-registration";
import AdminLogin from "./admin-login";
import LoginPage from "./login-page";

export default function Admin() {
  // This boolean should ideally be gotten from redux, to prevent
  // admin from having to login every time they navigate to another
  // page and return back to admin page.
  const [login, setLogin] = useState(false);

  return(
    <>
      {
        login ? 
        <>
          <NavBar/>
          <div className="admin-container">
            <div style={{backgroundColor: "gainsboro", minHeight: "100vh"}} className="container">
              <div className="admin-intro">
                <h1>
                  Welcome, Admin.
                </h1>
                <p>You can make changes to any section of the form below.</p>
                <p>The website will automatically update if the changes are successful</p>
              </div>
              <div className="admin-form">
                <AdminHomepage />
                <AdminMission />
                <AdminTutors/>
                <AdminIntern/>
                <AdminAbout/>
                <AdminFooter/>
                <AdminManager/>
                <AdminRegistration/>
                <AdminLogin/>
              </div>
            </div>
          </div>
          <Footer />
        </> : 
        <LoginPage
          // these values are for testing. Should be replaced by redux store details
          setLogin={setLogin}
          username="pauluzo"
          password="suokafor"
        />
      }
    </>
  );
}