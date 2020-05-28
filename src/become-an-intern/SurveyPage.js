import React, { useState } from "react";
import Image from "./images/intro-img.png";
import CloseBtn from "./images/close-icon.png"
import "./SurveyPage.css";
import SurveyQuestions from "./surveyquestions"

export default function SurveyPage() {
  // You'll probably want to delete this, just a placeholder
  const questions = [
    {
      question: "What Interests you the most in an application?",
      answers: [
        {
          answer: "Aesthetics",
          point: 2,
          track: ["frontend", "uiux"],
        },
        {
          answer: "Structure",
          point: 2,
          track: ["backend"],
        },
        {
          answer: "Both",
          point: 2,
          track: ["qa"],
        },
      ],
    },
    {
      question: "How good are you with colors?",
      answers: [
        {
          answer: "Not quite",
          point: 0,
          track: ["backend"],
        },
        {
          answer: "Somewhat",
          point: 1,
          track: ["frontend"],
        },
        {
          answer: "Very",
          point: 2,
          track: ["uiux", "qa"],
        },
      ],
    },
    {
      question:
        "When surfing the internet, are you often concerned about the look and feel of a website?",
      answers: [
        {
          answer: "Look",
          point: 2,
          track: ["uiux"],
        },
        {
          answer: "Feel",
          point: 2,
          track: ["frontend", "backend"],
        },
        {
          answer: "Both",
          point: 2,
          track: ["qa"],
        },
      ],
    },
    {
      question:
        "Do you find yourself suggesting easier ways to make a website more performant?",
      answers: [
        {
          answer: "Yes",
          point: 2,
          track: ["frontend", "qa"],
        },
        {
          answer: "No",
          point: 0,
          track: ["uiux"],
        },
        {
          answer: "I don't know",
          point: 0,
          track: ["backend"],
        },
      ],
    },
    {
      question: "How enthusiastic are you about software architecture?",
      answers: [
        {
          answer: "Not quite",
          point: 0,
          track: ["qa", "uiux"],
        },
        {
          answer: "Somewhat",
          point: 1,
          track: ["frontend"],
        },
        {
          answer: "Very",
          point: 2,
          track: ["backend"],
        },
      ],
    },
    {
      question:
        "Would you rather play a game that tests your analytical skills or your design skills?",
      answers: [
        {
          answer: "Design",
          point: 2,
          track: ["uiux"],
        },
        {
          answer: "Analytical",
          point: 2,
          track: ["backend"],
        },
        {
          answer: "Both",
          point: 2,
          track: ["frontend", "qa", "uiux", "backend"],
        },
      ],
    },
    {
      question: "How good are you with spotting layout errors?",
      answers: [
        {
          answer: "Not quite",
          point: 0,
          track: ["backend"],
        },
        {
          answer: "Somewhat",
          point: 1,
          track: ["backend"],
        },
        {
          answer: "Very",
          point: 2,
          track: ["qa", "frontend", "uiux"],
        },
      ],
    },
    {
      question: "How good are you with spotting functionality errors?",
      answers: [
        {
          answer: "Not quite",
          point: 0,
          track: ["uiux"],
        },
        {
          answer: "Somewhat",
          point: 1,
          track: ["frontend", "backend"],
        },
        {
          answer: "Very",
          point: 2,
          track: ["qa", "backend"],
        },
      ],
    },
    {
      question: "How attentive are you to details?",
      answers: [
        {
          answer: "Not quite",
          point: 0,
          track: ["frontend", "uiux", "backend"],
        },
        {
          answer: "Somewhat",
          point: 1,
          track: ["frontend", "uiux", "backend"],
        },
        {
          answer: "Very",
          point: 2,
          track: ["qa"],
        },
      ],
    },
    {
      question: "Are you very good with writing reports and handling feedback?",
      answers: [
        {
          answer: "Yes",
          point: 2,
          track: ["qa"],
        },
        {
          answer: "No",
          point: 0,
          track: ["uiux"],
        },
        {
          answer: "I don't Know",
          point: 0,
          track: [],
        },
      ],
    },
  ]
const [firstChoice, setFirstChoice] = useState("")
const [secondChoice, setSecondChoice] = useState("")
const [frontend, setFrontend] = useState(0)
const [backend, setBackend] = useState(0)
const [uiux, setUiux] = useState(0)
const [qa, setQa] = useState(0)
const [point, setPoint] = useState(0)

const [showScore, setShowScore] = useState(false)
const [questionIndex, setquestionIndex] = useState(0) 
let currentQuestion = questions[questionIndex]
let currentAnswers = currentQuestion.answers
let questionText = currentQuestion.question
let firstButton = currentAnswers[0].answer
let secondButton = currentAnswers[1].answer
let thirdButton = currentAnswers[2].answer

const handleClick = (event) => {
    const Value = event.target.value
    givePoints(questionIndex, Value)
    if (questionIndex < questions.length - 1) {
        setquestionIndex(prevIndex => prevIndex + 1)
    } else {
        setShowScore(true)
        const scores = [frontend, backend, uiux, qa]
        const Labels = ["Frontend Development", "Backend Development", "UI/UX Design", "Software Quality Assurance"]
        getFirstChoice(scores, Labels)
        
        
    }
}
const getFirstChoice = (arr, Labels) => {
    const Max = Math.max.apply(null,arr)
    const maxIndex = arr.indexOf(Max)
    setFirstChoice(Labels[maxIndex])

    Labels.splice(maxIndex, 1)
    arr.splice(maxIndex, 1)
    getSecondChoice(arr, Labels)
}

const getSecondChoice = (arr, Labels) => {
    const Max = Math.max.apply(null,arr)
    const maxIndex = arr.indexOf(Max)
    setSecondChoice(Labels[maxIndex])
}

const givePoints = (questionIndex, Value) => {
    const answers = questions[questionIndex].answers
    answers.forEach(Answer => {
        const point = Answer.point
        if (Value === Answer.answer) {
            const trackList = Answer.track
            trackList.forEach(track => {
                track === "frontend" ? setFrontend(prevScore => prevScore + point) :
                track === "backend" ? setBackend(prevScore => prevScore + point) :
                track === "uiux" ? setUiux(prevScore => prevScore + point) :
                track === "qa" ? setQa(prevScore => prevScore + point) :
                setPoint(prevScore => prevScore + 0)
            });
        }
    });
}

  return(
    <div className="survey-page-container" >
      <div className="survey-page-body">
        
        <div className="survey-intro">
          <div className="intro-layer">
            <div className="intro-container">
              <div className="img-container">
                <div>
                  <img alt="vgg-img" src={Image}></img>
                </div>
              </div>
              <div className="intro-text">
                <div className="close-btn">
                  <img alt="close-btn" src={CloseBtn} />
                </div>
                <span className="span-1">Survey</span>
                <span className="span-2">Questionnaire</span>
              </div>
            </div>
          </div>
        </div>
        <div className="survey-question">
          {showScore? 
          <div className="result">
            <div>
            <div className="pb-3" style={{borderBottom: "1px solid #228B22"}}><span className="question" style={{fontWeight: "bolder", fontSize: "larger"}}>OUR RECOMMENDATION</span></div>
            <div className="question result-text" >
              Based on your survey result, We Advise that you go for <span style={{fontWeight: "bolder", color: "#228B22"}}>{firstChoice}</span>, or pick the second option of <span style={{fontWeight: "bolder", color: "#228B22"}}>{secondChoice}</span>
              <div className="mt-3" style={{borderRadius: "10px"}}><img src="https://cdn1.vc4a.com/media/2016/08/Schermafbeelding-2018-05-24-om-12.28.11-1280x300.png" alt="venture garden group" style={{width: "100%", height: "100%", borderRadius: "10px"}}/></div>
            </div> 
            </div>
          </div>
          : 
          <div className="question-container">
            <div className="px-2">
              Help us get to know you, pick the option that best describes your interests and personality.
            </div>
            <div className="question">{questionText}</div>
            <div className="button-container">
              <button type="button" className="option-btn" value={firstButton} onClick={handleClick}>{firstButton}</button>
              <button type="button" className="option-btn" value={secondButton} onClick={handleClick}>{secondButton}</button>
              <button type="button" className="option-btn" value={thirdButton} onClick={handleClick}>{thirdButton}</button>
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
}
