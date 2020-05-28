import React from "react";
import Image from "./images/intro-img.png";
import "./SurveyPage.css";

export default function SurveyPage() {

  return(
    <div className="survey-page-container" >
      <div className="survey-page-body">
        <div className="survey-intro">
          <div className="intro-layer">
            <div className="intro-container">
              <img alt="vgg-img" src={Image}></img>
              <div className="intro-text">
                <span className="span-1">Survey</span>
                <span className="span-2">Questionnaire</span>
              </div>
            </div>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}
