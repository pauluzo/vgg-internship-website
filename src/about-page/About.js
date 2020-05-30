import React from 'react';
import './about.css';
import Feature from './Feature';
import crowd from './crowd-of-users.svg';

const About = () => {
  return (
    <div className="about__page">
      <div className="about__page-hero">
        <section className="about__page-hero-body">
          <h3> Our Mission </h3>
          <h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo corrupti veritatis odio suscipit ipsam.
          </h1>
        </section>
        <section className="about__page-hero-image"></section>
      </div>
      <div className="about__page-info">
        <div className="about__page-info-left">
          <h2>Building World-Class Talent</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ratione esse. Distinctio illum qui praesentium in voluptate, earum ab magnam quod ex asperiores quos. Vel commodi voluptatibus non obcaecati deserunt. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ratione esse. Distinctio illum qui praesentium in voluptate, earum ab magnam quod ex asperiores quos. Vel commodi voluptatibus non obcaecati deserunt!
          </p>
        </div>
        <div className="about__page-info-right">
        </div>
      </div>
      <div className="container">
        <div className="about__page-internship">
          <div className="text-center">
            <h3 className="text-vgg-blue">How the Internship works</h3>
            <p>We combine technology with a well proven education system of learning to mentor interns and help them grow which in turn advances the ecosystem.</p>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <Feature src={crowd} alt="crowd of users" details="EVERYONE CAN JOIN, NO EXTRANCE EXAM NEEDED" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <Feature src={crowd} alt="crowd of users" details="EVERYONE CAN JOIN, NO EXTRANCE EXAM NEEDED" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <Feature src={crowd} alt="crowd of users" details="EVERYONE CAN JOIN, NO EXTRANCE EXAM NEEDED" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <Feature src={crowd} alt="crowd of users" details="EVERYONE CAN JOIN, NO EXTRANCE EXAM NEEDED" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <Feature src={crowd} alt="crowd of users" details="EVERYONE CAN JOIN, NO EXTRANCE EXAM NEEDED" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <Feature src={crowd} alt="crowd of users" details="EVERYONE CAN JOIN, NO EXTRANCE EXAM NEEDED" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;