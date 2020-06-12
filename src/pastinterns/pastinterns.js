import React from 'react';
import CommunityManager from '../components/communityManager';
import './pastinternsstyle.css';
import PastInternDetails from './pastinternsdata';
import PastInternsCard from './pastinternscard';
import NavBar from "../home-page/Navbar"
import Footer from "../home-page/Footer"

const PastInterns = () => {
  return (
    <>
    <NavBar/>
    <div className="pt-5">
      <div className='interns-intro'>
        <div className='text-center'>
          <p>
            "Success means different things to everyone.
            <br /> For us, success is using technology to transform the world
            around us.
            <span style={{ color: '#DAA520' }}> IT STARTS WITH YOU</span>"
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
            Our Past Interns
          </h1>
        </div>
        <div className='interns-card-container'>
          {PastInternDetails.map((intern) => {
            return (
              <div key={intern.id}>
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

export default PastInterns;
