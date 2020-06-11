import React from 'react';
import './facilitatorStyle.css';
import Mario from '../images/Mario.jpg';

function CommunityManager() {
  return (
    <div className='mario-container'>
      <div className='px-3'>
        <img src={Mario} alt='Mario Micheal' />
      </div>
      <div className=' mario-div px-3'>
        <blockquote className=' text-center p-3'>
          VGG Virtual Internship is the remote internship programme of Venture
          Garden Group which is dedicated to refining and equipping talents
          across the globe with cutting-edge tech skills.
          <br />
          The impact of VGG Virtual Internship can be felt all over the
          internet. Our vision is to make this virtual internship community the
          largest and most profitable virtual community for techies in Africa.
        </blockquote>
        <div className='mario-text text-center py-2'>
          <span style={{ borderBottom: '1px solid #DAA520' }}>
            Mario Micheal
          </span>
          <br />
          <span style={{ fontSize: '20px' }}>Community Manager</span>
          <div className='my-2'>
            <ul className='social-media-list list-unstyled list-inline text-center'>
              <li className='list-inline-item'>
                <button
                  type='button'
                  className='btn btn-circle'
                  style={{ backgroundColor: '#DAA520' }}
                >
                  <a
                    href='https://www.instagram.com/positive_mario'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <i className='fab fa-instagram'></i>
                  </a>
                </button>
              </li>
              <li className='list-inline-item'>
                <button
                  type='button'
                  className='btn btn-circle'
                  style={{ backgroundColor: '#DAA520' }}
                >
                  <a
                    href='https://twitter.com/Positive_Mario'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <i className='fab fa-twitter'></i>
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityManager;
