import React from 'react';
import './about.css';
import scaling from './scaling.png';
import NavBar from "../home-page/Navbar"
import Footer from "../home-page/Footer"

const About = () => {
  return (
    <>
    <NavBar/>
    <div style={{paddingTop: "70px"}} className="about__page">
      <div className="container">
        <div className="about__page-hero">
          <section className="about__page-hero-body">
            <h3> Our Vision </h3>
            <h1>
              Our vision is to make this virtual internship community the largest 
              and most profitable virtual community for techies in Africa.
            </h1>
          </section>
          <section className="about__page-hero-image"></section>
        </div>
      </div>
      <div className="container about__page-info">
        <div className="about__page-info-left">
          <h2>Building World-Class Talent</h2>
          <p>
            The aim of this remote internship is to contibute to building
            the tech ecosystem in Africa by harnessing the wealth of
            experienced tech staff in VGG to provide tutelage and mentorship
            to those who aspire to build a career in tech. 
            This is achieved by enabling the interns with access to seasoned 
            tutorials from experts in their desired field. It also guarantees that the
            interns are taught in line with the industry's best practices and standards.
          </p>
        </div>
        <div className="about__page-info-right"></div>
      </div>
      <div className="scaling_section">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="scaling-image">
                <img src={scaling} className="img-fluid" alt="scale" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="content">
                <h5 className="p-heading">Practical learning</h5>
                <p>
                  The interns are given tasks and assignments after each week 
                  of tutelage, to ensure that they get to practice what they are 
                  taught. They also get feedbacks and detailed reviews from the tutors.
                </p>
              </div>
              <hr />
              <div className="content">
                <h5 className="p-heading">Have fun while learning</h5>
                <p>
                  Interns get to participate in weekly virtual games which are both
                  challenging and exciting. Interns represent their tracks to 
                  make sure they bring the coveted prize home
                </p>
              </div>
              <hr />
              <div className="content">
                <h5 className="p-heading">Connect and network</h5>
                <p>
                  Interns join an online community that will be available 24/7 to
                  network with each other and discuss.
                </p>
              </div>
              <hr />
              <div className="content">
                <h5 className="p-heading">Get career coaching</h5>
                <p>
                  Interns receive career coaching from industry experts in the 
                  tech field, through virtual coaching sessions organised
                  by the remote internship team.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
