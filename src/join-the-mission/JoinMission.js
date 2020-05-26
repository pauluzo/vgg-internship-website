import React from 'react';
import './JoinMission.css';

export default function JoinMission() {
  return (
    <div className='mission'>
      <section className='section'>
        <div className='about-mission'>
          <div className='text'>
            <h1 className='heading'>
              BECOME AN <span>INTERN </span>AND{' '}
              <span className='blue'>LEARN </span>FROM
            </h1>
            <p>
              Experienced teachers, to take your software developement skill to
              the next level with real life projects.
            </p>
            <button>Join now </button>
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
          <h3 className='track-heading'>Available Learning Tracks</h3>
          <p className='line'></p>
          <p className='track-para'>
            The Venture Garden Internship is focused on exposing you to real
            life projects and experienced teachers. In other to prepare and
            equip you with the right sets of skills for the real world.
          </p>
        </div> 
        <div className='card-body'>
          <div className='cardbody'>
            <img
              className='maths'
              src='https://i.ibb.co/tLR5kwF/UI.jpg'
              alt='UI'
            />
            <h3 className='heading-three'>UI/UX Design</h3>
            <p className='paras'>
              The UX/UI Design class is set to prepare and sharpen your skills
              on real life projects, so you can design great user interfaces and
              user experience.
            </p>
          </div>

          <div className='cardbody'>
            <img
              className='maths'
              src='https://i.ibb.co/zJWHFRd/front.jpg'
              alt='front'
              border='0'
            />
            <h3 className='heading-three'>Frontend</h3>
            <p className='paras'>
              The UX/UI Design class is set to prepare and sharpen your skills
              on real life projects, so you can design great UI designs.
            </p>
          </div>

          <div className='cardbody'>
            <img
              className='maths'
              src='https://i.ibb.co/mhmp0g6/back.jpg'
              alt='back'
              border='0'
            />
            <h3 className='heading-three'>Backend</h3>
            <p className='paras'>
              Backend class is set to prepare and sharpen your skills on real
              life projects,so you can design great products that stand.
            </p>
          </div>

          <div className='cardbody'>
            <img
              className='maths'
              src='https://i.ibb.co/FBFTXPp/data2.jpg'
              alt='data2'
              border='0'
            />
            <h3 className='heading-three'>Data Science</h3>
            <p className='paras'>
              Data Science class is set to prepare and sharpen your skills on
              real life projects, so you can provide real time data analyses.
            </p>
          </div>
        </div>
      </section>

      <section className='interns'>
        <div className='intern-numbers'>
          <h3>2000+</h3>
          <h4>Interns</h4>
          <h3>Batch A.</h3>
        </div>

        <div className='aim'>
          We are committed to ensuring all interns are equipped with the right knowledge for real life projects. We train our interns to deliver 
          the best.
        </div>
      </section>
      <section className='get-started'>
        <p>
          Sign up today to partake with wide range of intellectual and experienced teachers to take your career to the next level, in software developement!
        </p>
        <button>Join Now</button>
      </section>
    </div>
  );
}
