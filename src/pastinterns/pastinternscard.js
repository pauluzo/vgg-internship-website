import React from "react";
import PropTypes from "prop-types";

const PastInternsCard = ({ intern }) => {
  const { name, track, image} = intern

  return (
    <div className="p-5">
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "25px",marginBottom: "25px"}}>
            <div>
                <div className="img-div">
                    <img
                        src={image}
                        height="130"
                        width="150"
                        className="card-img-top"
                        alt={name}
                    />
                </div>
                <div className=" text-center facilitators-name p-2" style={{borderBottom: "1px solid #DAA520"}}>
                    {name}
                </div>
                <div className="text-center facilitators-track p-2">
                    {track}
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