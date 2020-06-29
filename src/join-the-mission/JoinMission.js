import React from 'react';
import './JoinMission.css';
import NavBar from "../home-page/Navbar"
import Footer from "../home-page/Footer"
import {connect} from 'react-redux'

const TracksCard = (props) => {
  return (
    <div className='cardbody'>
      <img
        className='maths'
        src={props.trackImage}
        alt={props.trackTitle}
      />
      <h3 className='heading-three'>{props.trackTitle}</h3>
      <p className='paras'>
        {props.trackContent}
      </p>
    </div>
  )
}
function JoinMission(props) {
  const mission = props.joinTheMission
  const tracksList = mission.tracks.map((track, index) => (
  <TracksCard 
    trackImage={track.trackImage}
    trackTitle={track.trackTitle}
    trackContent={track.trackContent}
  />))
  return (
    <>
    <NavBar/>
    <div style={{paddingTop: "70px"}} className='mission'>
      <section className='section'>
        <div className='about-mission'>
          <div className='text'>
            <h1 className='heading'>
              {mission.headerTitle.slice(0,9)}<span>{mission.headerTitle.slice(9,16)}</span>{mission.headerTitle.slice(16,20)}{' '}
              <span className='blue'>{mission.headerTitle.slice(20,26)}</span>{mission.headerTitle.slice(26,)}
            </h1>
            <p>
              {mission.headerBody}
            </p>
            <a style={{color: "inherit"}} href="/registration-form"><button>{mission.headerButton}</button></a>
          </div>
          <div>
            <img
              className='vgg1'
              src='https://i.ibb.co/PDfd8mb/vgg5.png'
              alt='vgg5'
              border='0'
            />
          </div>
        </div>
      </section>

      <section className='tracks'>
        <div className='tracks-text'>
          <h3 className='track-heading'>{mission.tracksHeader}</h3>
          <p className='line'></p>
          <p className='track-para'>
            {mission.tracksText}
          </p>
        </div> 
        <div className='card-body'>
          {tracksList}
        </div>
      </section>

      <section className='interns'>
        <div className='intern-numbers'>
          <h3>{mission.missionContentA.slice(0,6)}</h3>
          <h4>{mission.missionContentA.slice(6,13)}</h4>
          <h3>{mission.missionContentA.slice(13,)}</h3>
        </div>

        <div className='aim'>
          {mission.missionContentB}
        </div>
      </section>
      <section className='get-started'>
        <p>
          {mission.footerText}
        </p>
        <a style={{color: "inherit"}} href="/registration-form"><button>{mission.footerButton}</button></a>
      </section>
    </div>
    <Footer/>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    joinTheMission: state.mission
  }
}

export default connect(mapStateToProps)(JoinMission)