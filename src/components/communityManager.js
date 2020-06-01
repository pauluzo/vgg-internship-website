import React from 'react'
import "./facilitatorStyle.css";
import Mario from '../images/Mario.jpg'

function CommunityManager() {
    return(
        <div className="mario-container py-5">
          <div className="mario" style={{display: "flex"}}>
            <div className="px-3">
              <img src={Mario} alt="Mario Micheal" />
            </div>
            <div className=" mario-div px-3">
              <blockquote className=" text-center p-3"style={{fontSize: "20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in tellus sem. Nunc justo tortor, pharetra at fringilla eu, volutpat blandit risus. Aenean convallis felis quis diam finibus, sed vestibulum libero ullamcorper. Aliquam sagittis lectus quis purus porta lobortis. Quisque vel ipsum id sem sollicitudin egestas et non neque. Mauris.</blockquote>
              <div className="mario-text text-center py-2">
                <span  style={{borderBottom: "1px solid #DAA520"}}>Mario Micheal</span><br/>
                <span style={{fontSize: "20px"}}>Community Manager</span>
                <div>
                  <ul className="social-media-list list-unstyled list-inline text-center">
                    <li className="list-inline-item">
                      <button type="button" className="btn btn-circle" style={{backgroundColor: "#DAA520"}}>
                        <a href="https://www.instagram.com/positive_mario" rel="noopener noreferrer" target="_blank">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </button>
                    </li>
                    <li className="list-inline-item">
                      <button type="button" className="btn btn-circle" style={{backgroundColor: "#DAA520"}}>
                        <a href="https://twitter.com/Positive_Mario" rel="noopener noreferrer" target="_blank">
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

export default CommunityManager