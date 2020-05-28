import React, { useState } from "react";
import Image from "./images/intro-img.png";
import CloseBtn from "./images/close-icon.png"
import "./SurveyPage.css";

export default function SurveyPage() {
  // You'll probably want to delete this, just a placeholder
  const questionHolder = `
    Sed ut perspiciatis unde omnis iste natus error sit 
    voluptatem accusantium doloremque laudantium.
  `;

  const [question, setQuestion] = useState(questionHolder);
  // I'm not sure how you'd like to implement this. You can change it.
  const [options, setOptions] = useState(["Not Quite", "Somewhat", "Very"]);

  return(
    <div className="survey-page-container" >
      <div className="survey-page-body">
        <div className="close-btn">
          <img alt="close-btn" src={CloseBtn} />
        </div>
        <div className="survey-intro">
          <div className="intro-layer">
            <div className="intro-container">
              <div className="img-container">
                <img alt="vgg-img" src={Image}></img>
              </div>
              <div className="intro-text">
                <span className="span-1">Survey</span>
                <span className="span-2">Questionnaire</span>
              </div>
            </div>
          </div>
        </div>
        <div className="survey-question">
          <div className="question-container">
            <div style={{maxWidth: "300px"}}>{question}</div>
            <div className="button-container">
              <button className="option-btn" onClick={() => {}}>{options[0]}</button>
              <button className="option-btn" onClick={() => {}}>{options[1]}</button>
              <button className="option-btn" onClick={() => {}}>{options[2]}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
