import React from "react";
import PropTypes from "prop-types";

const PastInternsCard = ({ intern }) => {
  const { internName, internTrack, internImage, testimony, twitterInfo} = intern
  const twitterLink = `https://twitter.com/${twitterInfo}`;

  return (
    <div className="p-5">
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "25px",marginBottom: "25px"}}>
            <div>
                <div className="img-div">
                    <img
                        src={internImage}
                        height="130"
                        width="150"
                        className="card-img-top"
                        alt={internName}
                    />
                </div>
                <div className=" text-center facilitators-name p-2" style={{borderBottom: "1px solid #DAA520"}}>
                    {internName}
                </div>
                <div className="text-center facilitators-track p-2">
                    {internTrack}
                </div>
                {
                    (testimony && twitterInfo) && 
                    <>
                        <div className="text-center  p-2" style={{borderTop: "1px solid #DAA520"}}>
                            <h5 style={{fontWeight: "bold"}}>Testimony</h5>
                            <p style={{fontSize: "18px"}}>{`"${testimony}"`}</p>
                        </div>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <button type="button" className="btn btn-circle" style={{backgroundColor: "#DAA520"}}>
                                <a href={twitterLink} rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </button>
                        </div>
                    </>
                }
            </div>
        </div>
    </div>
  )
}


PastInternsCard.propTypes = {
  intern: PropTypes.object,
};

export default PastInternsCard;
