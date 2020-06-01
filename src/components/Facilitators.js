import React from "react";
import FacilitatorItems from "./FacilitatorItems";
import "./facilitatorStyle.css";
import Mario from '../images/Mario.jpg'



const Facilitators = () => {
  const facilitatorDetails = [
    {
      id: 1,
      name: "Vincent Olajide",
      track: "Programme Coordinator",
      twitter: "sunskyuk",
      github: "",
      image: "profile.jpg"
    },

    {
      id: 2,
      name: "Precious Uchendu",
      track: "Frontend Developer",
      twitter: "allindeveloper",
      github: "",
      image: "Precious.jpg"
    },

    {
      id: 3,
      name: "Olatokunbo Ogunlade",
      track: "Frontend Developer",
      twitter: "OgunladeTokunbo",
      github: "",
      image: "Ogunlade.jpg"
    },

    {
      id: 4,
      name: "Tunde Ojediran",
      track: "Frontend Developer",
      twitter: "danieltundeoje",
      github: "tundeojediran",
      image: "Tunde.jpg"
    },

    {
      id: 5,
      name: "John Stephen",
      track: "Backend Developer(Java)",
      twitter: "progsteve",
      github: "progsteve",
      image: "Progsteve.jpg"
    },

    {
      id: 6,
      name: "Azeezat Raheem",
      track: "Backend Developer(Java)",
      twitter: "TheCodingHijabi",
      github: "TheCodingHijabi",
      image: "profile.jpg"
    },

    {
      id: 7,
      name: "Theophilus Ighalo",
      track: "Backend Developer(Python)",
      twitter: "",
      github: "",
      image: "profile.jpg"
    },

    {
      id: 8,
      name: "Chidi Onyeachonam",
      track: "Backend Developer(Python)",
      twitter: "",
      github: "",
      image: "profile.jpg"
    },

    {
      id: 9,
      name: "Daniel Ogwu",
      track: "Backend Developer(C#)",
      twitter: "danhero3",
      github: "ddanhero",
      image: "Ogwu.jpg"
    },

    {
      id: 10,
      name: "Collins Nwaogugu",
      track: "Backend Developer(C#)",
      twitter: "",
      github: "",
      image: "profile.jpg"
    },

    {
      id: 11,
      name: "Ikechukwu konweh",
      track: "Backend Developer(C#)",
      twitter: "",
      github: "",
      image: "profile.jpg"
    },

    {
      id: 12,
      name: "Azeezat Asimolowo",
      track: "Software Quality Assurance",
      twitter: "",
      github: "unqazdam",
      image: "Azeezat.jpg"
    },

    {
      id: 13,
      name: "Segun Abdrauf",
      track: "Software Quality Assurance",
      twitter: "realshegmovic",
      github: "realshegmovic",
      image: "segun.jpg"
    },

    {
      id: 14,
      name: "Promise Chukwuenyem",
      track: "DEVOPS Engineer",
      twitter: "PromisePreston",
      github: "PromisePreston",
      image: "Promise.jpg"
    },

    {
      id: 15,
      name: "Onyinye Uce",
      track: "DEVOPS Engineer",
      twitter: "sylon23",
      github: "",
      image: "Sylon.jpg"
    },

    {
      id: 16,
      name: "Olakunle Abiola",
      track: "DEVOPS Engineer",
      twitter: "mr_kyen",
      github: "mr_kyen",
      image: "Olakunle.jpg"
    },

    {
      id: 17,
      name: "Samuel Fabayo",
      track: "Visual And User Experience Designer",
      twitter: "amstillfabz",
      github: "amstillfabz",
      image: "Samuel.jpg"
    },

    {
      id: 18,
      name: "Wolede Adeniyi",
      track: "Visual And User Experience Designer",
      twitter: "oluwawolede",
      github: "wolede",
      image: "wolede.jpg"
    },

    {
      id: 19,
      name: "Nma Okafor",
      track: "Visual And User Experience Designer",
      twitter: "nmaokafor",
      github: "nmaokafor_",
      image: "nma.jpg"
    },

    {
      id: 20,
      name: "Ameen Alade",
      track: "Visual And User Experience Designer",
      twitter: "",
      github: "",
      image: "profile.jpg"
    },

    {
      id: 21,
      name: "Fisayo Watti",
      track: "Visual And User Experience Designer",
      twitter: "wells_inpixels",
      github: "",
      image: "profile.jpg"
    },
  ];

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
