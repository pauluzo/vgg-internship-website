import React from "react";
import FacilitatorItems from "./FacilitatorItems";
import facilitatorDetails from "./facilitatorsdata";
import "./facilitatorStyle.css";
import CommunityManager from "./communityManager"



const Facilitators = () => {
  return (
    <div>
      <div style={{width: "100%", height: "90vh"}}>
        <div className="facilitators-intro">
          <div >
            <span style={{color: "#DAA520", fontWeight: "bold"}}>Our Facilitators</span>
            <h1 >"We never know which lives we influence,<br/> when, or why! We <span style={{color: "#DAA520"}}>JUST DO IT</span>"</h1>
          </div>
        </div>
      </div>
      <div>
        <CommunityManager />
      </div>
      <div style={{width: "100%", height: "300px"}}>
        <div className="transforming"></div>
      </div>
      <div className="cards-container" style={{backgroundColor: "gainsboro"}}>
        {facilitatorDetails.map((facilitator) => {
          return (
            <div key={facilitator.id}>
              <FacilitatorItems facilitator={facilitator} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Facilitators;
