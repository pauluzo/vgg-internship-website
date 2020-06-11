import React from 'react';
import './JoinMission.css';
import NavBar from "../home-page/Navbar"
import Footer from "../home-page/Footer"

export default function JoinMission() {
  return (
    <>
    <NavBar/>
    <div style={{paddingTop: "70px"}} className='mission'>
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
            <a style={{color: "inherit"}} href="/registration-form"><button>Join now</button></a>
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
              The UX/UI Design track is set to prepare you and sharpen your skills
              in designing real life projects, so you can showcase great user interfaces and
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
              The Frontend track is set to prepare you and sharpen your skills in 
              implementing designs and building robust applications, that work
              seamlessly.
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
              Backend track is set to prepare you and sharpen your skills in 
              software architecture, so you can design great products that 
              stand through time.
            </p>
          </div>

          <div className='cardbody'>
            <img
              className='maths'
              src='https://i.ibb.co/FBFTXPp/data2.jpg'
              alt='data2'
              border='0'
            />
            <h3 className='heading-three'>Quality Assurance</h3>
            <p className='paras'>
              Quality Assurance track is set to help you understand the importance
              of quality software products and how to ensure they meet the best standards.
            </p>
          </div>
        </div>
      </section>

      <section className='interns'>
        <div className='intern-numbers'>
          <h3>1000+</h3>
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
          Sign up today to join this community with a wide range of experienced tutors to take your career in software developement to the next level!
        </p>
        <a style={{color: "inherit"}} href="/registration-form"><button>Join now</button></a>
      </section>
    </div>
    <Footer/>
    </>
  );
}
