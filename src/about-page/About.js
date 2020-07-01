import React from 'react';
import './about.css';
import scaling from './scaling.png';
import NavBar from "../home-page/Navbar"
import Footer from "../home-page/Footer"
import {connect} from 'react-redux'

const BenefitsCards = (props) => {
  return (
    <div>
      <div className="content">
        <h5 className="p-heading">{props.benefitTitle}</h5>
        <p>
          {props.benefitText}
        </p>
      </div>
      <hr />
    </div>
  )
}
const About = (props) => {
  const benefitsList = props.about.benefits.map((benefit, index) => (
  <BenefitsCards 
    key={index} 
    benefitTitle={benefit.benefitTitle}
    benefitText={benefit.benefitText}
  />))
  return (
    <>
    <NavBar/>
    <div style={{paddingTop: "70px"}} className="about__page">
      <div className="container">
        <div className="about__page-hero">
          <section className="about__page-hero-body">
            <h3> {props.about.headerTitle} </h3>
            <h1>
              {props.about.headerText}
            </h1>
          </section>
          <section className="about__page-hero-image"></section>
        </div>
      </div>
      <div className="container about__page-info">
        <div className="about__page-info-left">
          <h2>{props.about.detailsTitle}</h2>
          <p>
            {props.about.detailsText}
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
              {benefitsList}
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

const mapStateToProps = (state) => {
  return {
    about: state.about
  }
}

export default connect(mapStateToProps)(About);
