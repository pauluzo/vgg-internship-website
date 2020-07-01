import React from "react";
import FacilitatorItems from "./FacilitatorItems";
import "./facilitatorStyle.css";
import CommunityManager from "./communityManager"
import NavBar from "../home-page/Navbar"
import Footer from "../home-page/Footer"
import {connect} from 'react-redux'

const Facilitators = (props) => {
  return (
    <>
      <NavBar/>
      <div className="pt-5">
        <div className='tutor-facilitators-intro'>
          <div>
            <span style={{ color: '#DAA520', fontWeight: 'bold' }}>
              {props.tutors.headerTitle}
            </span>
            <h1>
              {'"'}{props.tutors.headerBody.slice(0,39)}
              <br />
              {props.tutors.headerBody.slice(39,props.tutors.headerBody.length-10)}
              <span style={{ color: '#DAA520' }}>{props.tutors.headerBody.slice(props.tutors.headerBody.length-10,)}</span>{'"'}
            </h1>
          </div>
        </div>
      </div>
      <div>
        <CommunityManager />
      </div>
      <div style={{width: "100%"}}>
        <div className="transformingg"></div>
      </div>
      <div className='tutor-cards-container' style={{ backgroundColor: 'gainsboro' }}>
        <h2>{props.tutors.detailsTitle}</h2>
        <div className='tutor-facilitators-container'>
          {props.tutors.details.map((facilitator, index) => {
            return (
              <div key={index}>
                <FacilitatorItems facilitator={facilitator} />
              </div>
            );
          })}
        </div>
      </div>
      <Footer/>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    tutors: state.tutors
  }
}

export default connect(mapStateToProps)(Facilitators)
