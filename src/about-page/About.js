import React from 'react';
import './about.css';

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
    </div>
  )
}

export default About;
