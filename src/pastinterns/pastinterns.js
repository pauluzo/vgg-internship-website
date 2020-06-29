import React from 'react';
import CommunityManager from '../components/communityManager';
import './pastinternsstyle.css';
import PastInternsCard from './pastinternscard';
import NavBar from "../home-page/Navbar"
import Footer from "../home-page/Footer"
import {connect} from 'react-redux'

const PastInterns = (props) => {
  return (
    <>
    <NavBar/>
    <div className="pt-5">
      <div className='interns-intro'>
        <div className='text-center'>
          <p>
            {'"'}{props.pastInterns.headerText.slice(0,43)}
            <br /> {props.pastInterns.headerText.slice(43,props.pastInterns.headerText.length-19)}
            <span style={{ color: '#DAA520' }}>{props.pastInterns.headerText.slice(props.pastInterns.headerText.length-19,)}</span>{'"'}
          </p>
        </div>
      </div>

      <div>
        <CommunityManager />
      </div>
      <div style={{ width: '100%', height: '300px' }}>
        <div className='transforming2'></div>
      </div>
      <div>
        <div style={{ borderBottom: '1px dotted #DAA520' }}>
          <h1
            className='pastinterns text-center py-3'
            style={{ color: '#DAA520' }}
          >
            {props.pastInterns.detailsTitle}
          </h1>
        </div>
        <div className='interns-card-container'>
          {props.pastInterns.details.map((intern, index) => {
            return (
              <div key={index}>
                <PastInternsCard intern={intern} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    pastInterns: state.pastInterns
  }
}
export default connect(mapStateToProps)(PastInterns);
