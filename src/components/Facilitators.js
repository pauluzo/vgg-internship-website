import React from "react";
import FacilitatorItems from "./FacilitatorItems";
import "./facilitatorStyle.css";


const Facilitators = () => {
  const facilitatorDetails = [
    {
      id: 1,
      name: "Mario Michael",
      track: "Community Manager",
      twitter: "Positive_Mario",
      instagram: "Positive_Mario",
      image: "Mario.jpg",
      bio:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nisi, deserunt numquam hic cum!",
    },

    {
      id: 2,
      name: "Vincent Olajide",
      track: "Programme Coordinator",
      twitter: "sunskyuk",
      instagram: "",
      image: "profile.jpg",
      bio:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nisi, deserunt numquam hic cum!",
    },

    {
      id: 3,
      name: "Precious Uchendu",
      track: "Frontend Developer",
      twitter: "allindeveloper",
      instagram: "",
      image: "Precious.jpg",
      bio:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nisi, deserunt numquam hic cum!",
    },

    {
      id: 4,
      name: "Olatokunbo Ogunlade",
      track: "Frontend Developer",
      twitter: "OgunladeTokunbo",
      instagram: "",
      image: "Ogunlade.jpg",
      bio:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nisi, deserunt numquam hic cum!",
    },

    {
      id: 5,
      name: "Tunde Ojediran",
      track: "Frontend Developer",
      twitter: "danieltundeoje",
      instagram: "tundeojediran",
      image: "Tunde.jpg",
      bio:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nisi, deserunt numquam hic cum!",
    },

    {
      id: 6,
      name: "John Stephen",
      track: "Backend Developer(Java)",
      twitter: "progsteve",
      instagram: "progsteve",
      image: "Progsteve.jpg",
      bio:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nisi, deserunt numquam hic cum!",
    },

    {
      id: 7,
      name: "Azeezat Raheem",
      track: "Backend Developer(Java)",
      twitter: "TheCodingHijabi",
      instagram: "TheCodingHijabi",
      image: "profile.jpg",
      bio:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nisi, deserunt numquam hic cum!",
    },

    {
      id: 8,
      name: "Theophilus Ighalo",
      track: "Backend Developer(Python)",
      twitter: "",
      instagram: "",
      image: "profile.jpg",
      bio:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nisi, deserunt numquam hic cum!",
    },

    {
      id: 9,
      name: "Chidi Onyeachonam",
      track: "Backend Developer(Python)",
      twitter: "",
      instagram: "",
      image: "profile.jpg",
      bio:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nisi, deserunt numquam hic cum!",
    },

    {
      id: 10,
      name: "Daniel Ogwu",
      track: "Backend Developer(C#)",
      twitter: "danhero3",
      instagram: "ddanhero",
      image: "Ogwu.jpg",
      bio:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nisi, deserunt numquam hic cum!",
    },

    {
      id: 11,
      name: "Collins Nwaogugu",
      track: "Backend Developer(C#)",
      twitter: "",
      instagram: "",
      image: "profile.jpg",
      bio:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nisi, deserunt numquam hic cum!",
    },

    {
      id: 12,
      name: "Ikechukwu konweh",
      track: "Backend Developer(C#)",
      twitter: "",
      instagram: "",
      image: "profile.jpg",
      bio:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nisi, deserunt numquam hic cum!",
    },

    {
      id: 13,
      name: "Azeezat Asimolowo",
      track: "Software Quality Assurance",
      twitter: "",
      instagram: "unqazdam",
      image: "Azeezat.jpg",
      bio:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nisi, deserunt numquam hic cum!",
    },

    {
      id: 14,
      name: "Segun Abdrauf",
      track: "Software Quality Assurance",
      twitter: "realshegmovic",
      instagram: "realshegmovic",
      image: "segun.jpg",
      bio:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nisi, deserunt numquam hic cum!",
    },

    {
      id: 15,
      name: "Promise Chukwuenyem",
      track: "DEVOPS Engineer",
      twitter: "PromisePreston",
      instagram: "PromisePreston",
      image: "Promise.jpg",
      bio:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nisi, deserunt numquam hic cum!",
    },

    {
      id: 16,
      name: "Onyinye Uce",
      track: "DEVOPS Engineer",
      twitter: "sylon23",
      instagram: "",
      image: "Sylon.jpg",
      bio:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nisi, deserunt numquam hic cum!",
    },

    {
      id: 17,
      name: "Olakunle Abiola",
      track: "DEVOPS Engineer",
      twitter: "mr_kyen",
      instagram: "mr_kyen",
      image: "Olakunle.jpg",
      bio:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nisi, deserunt numquam hic cum!",
    },

    {
      id: 18,
      name: "Samuel Fabayo",
      track: "Visual And User Experience Designer",
      twitter: "amstillfabz",
      instagram: "amstillfabz",
      image: "Samuel.jpg",
      bio:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nisi, deserunt numquam hic cum!",
    },

    {
      id: 19,
      name: "Wolede Adeniyi",
      track: "Visual And User Experience Designer",
      twitter: "oluwawolede",
      instagram: "wolede",
      image: "wolede.jpg",
      bio:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nisi, deserunt numquam hic cum!",
    },

    {
      id: 20,
      name: "Nma Okafor",
      track: "Visual And User Experience Designer",
      twitter: "nmaokafor",
      instagram: "nmaokafor_",
      image: "nma.jpg",
      bio:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nisi, deserunt numquam hic cum!",
    },

    {
      id: 21,
      name: "Ameen Alade",
      track: "Visual And User Experience Designer",
      twitter: "",
      instagram: "",
      image: "profile.jpg",
      bio:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nisi, deserunt numquam hic cum!",
    },

    {
      id: 22,
      name: "Fisayo Watti",
      track: "Visual And User Experience Designer",
      twitter: "wells_inpixels",
      instagram: "",
      image: "profile.jpg",
      bio:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nisi, deserunt numquam hic cum!",
    },
  ];

  return (
    <div  className="container facilitator">
        <h1 className="text-center meet-facilitators">Meet <span className="line">The Facilit</span>ators</h1>
      <div className=" row no-gutters facilitators">
        {facilitatorDetails.map((facilitator) => {
          return (
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-2 no-gutters" key={facilitator.id}>
              <FacilitatorItems facilitator={facilitator} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Facilitators;
