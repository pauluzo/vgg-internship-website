import React from 'react';
import './about.css';

const Feature = (props) => {
  return (
  	<div className="feature-box">
  		<img src={props.src} alt={props.alt} />
  		<p>{props.details}</p>
  	</div>
  )
}

export default Feature;