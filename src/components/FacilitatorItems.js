import React from "react";
import PropTypes from "prop-types";

const FacilitatorItems = ({ facilitator }) => {
  const { name, track, twitter, github, image} = facilitator;
  const twitterLink = `https://twitter.com/${twitter}`
  const githubLink = `https://github.com/${github}`
    

  return (
    <div className="card">
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "25px",marginBottom: "25px"}}>
        <div>
        <div className="img-div">
        <img
          src={require(`../images/${image}`)}
          height="130"
          width="150"
          className="card-img-top"
          alt={name}
        />
      </div>
      <div className="facilitators-name p-2" style={{borderBottom: "1px solid #DAA520"}}>
        {name}
      </div>
      <div className="facilitators-track p-2">
        {track}
      </div>
      <div>
        <ul className="social-media-list list-unstyled list-inline text-center">
          <li className="list-inline-item">
            <button type="button" className="btn btn-circle" style={{backgroundColor: "#DAA520"}}>
              <a href={githubLink} rel="noopener noreferrer" target="_blank">
                <i className="fab fa-github"></i>
              </a>
            </button>
          </li>
          <li className="list-inline-item">
            <button type="button" className="btn btn-circle" style={{backgroundColor: "#DAA520"}}>
              <a href={twitterLink} rel="noopener noreferrer" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
            </button>
          </li>
        </ul>
      </div>
        </div>
      </div>
    </div>
  )
}


FacilitatorItems.propTypes = {
  facilitator: PropTypes.object,
};

export default FacilitatorItems;
