import React from 'react'
import "./facilitatorStyle.css";
import {connect} from 'react-redux'

function CommunityManager(props) {
    return(
        <div className="mario-container py-1">
          <div className="mario" style={{display: "flex"}}>
            <div className="px-3" style={{marginRight: "auto", marginLeft: "auto"}}>
              <img src={props.communityManager.managerImage} alt={props.communityManager.managerName} />
            </div>
            <div className=" mario-div px-3">
              <blockquote className=" text-center p-3"style={{fontSize: "20px"}}>{props.communityManager.managerText}</blockquote>
              <div className="mario-text text-center py-2">
                <span  style={{borderBottom: "1px solid #DAA520"}}>{props.communityManager.managerName}</span><br/>
                <span style={{fontSize: "20px"}}>{props.communityManager.managerTitle}</span>
                <div>
                  <ul className="social-media-list list-unstyled list-inline text-center">
                    <li className="list-inline-item">
                      <button type="button" className="btn btn-circle" style={{backgroundColor: "#DAA520"}}>
                        <a href={`https://www.instagram.com/${props.communityManager.instagramInfo}`} rel="noopener noreferrer" target="_blank">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </button>
                    </li>
                    <li className="list-inline-item">
                      <button type="button" className="btn btn-circle" style={{backgroundColor: "#DAA520"}}>
                        <a href={`https://twitter.com/${props.communityManager.twitterInfo}`} rel="noopener noreferrer" target="_blank">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
    communityManager: state.manager
  }
}

export default connect(mapStateToProps)(CommunityManager)