import React from "react";
import PropTypes from "prop-types";

const PastInternsCard = ({ intern }) => {
  const { internName, internTrack, internImage} = intern

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
            </div>
        </div>
    </div>
  )
}


PastInternsCard.propTypes = {
  intern: PropTypes.object,
};

export default PastInternsCard;
