import React, { useState } from 'react'

const SurveyQuestions = () => {

const questions = [
    {
        question: "What Interests you the most?",
        answers: [
            {
                answer: "Aesthetics",
                point: 2,
                track: ["frontend", "uiux"]
            }, 
            {
                answer: "Structure",
                point: 2, 
                track: ["backend"]
            },
            {
                answer: "Both",
                point: 2,
                track: ["qa"]
            }
        ]
    },
    {
        question: "How wild are your imaginations?",
        answers: [
            {
                answer: "Not quite",
                point: 0,
                track: ["backend"]
            }, 
            {
                answer: "Somewhat",
                point: 1,
                track: []
            },
            {
                answer: "Very",
                point: 2,
                track: ["frontend", "uiux", "qa"]
            }

        ]
    },
    {
        question: "How good are you with colors?",
        answers: [
            {
                answer: "Not quite",
                point: 0,
                track: ["backend"]
            }, 
            {
                answer: "Somewhat",
                point: 1,
                track: ["frontend", "qa"]
            },
            {
                answer: "Very",
                point: 2,
                track: ["uiux"]
            }

        ]
    },
    {
        question: "When surfing the internet, are you often concerned about the looks or the feel?",
        answers: [
            {
                answer: "Looks",
                point: 2,
                track: ["uiux"]
            }, 
            {
                answer: "Feel",
                point: 2,
                track: ["frontend", "backend"]
            },
            {
                answer: "Both",
                point: 2,
                track: ["qa"]
            }

        ]
    },
    {
        question: "Do you find youself suggesting easier ways to achieve a better perfomance of web App features that you use?",
        answers: [
            {
                answer: "Yes",
                point: 2,
                track: ["frontend"]
            }, 
            {
                answer: "No",
                point: 0,
                track: ["uiux"]
            },
            {
                answer: "I don't know",
                point: 0,
                track: []
            }

        ]
    },
    {
        question: "How enthusiatic are you about building solutions?",
        answers: [
            {
                answer: "Not quite",
                point: 0,
                track: ["frontend", "uiux"]
            }, 
            {
                answer: "Somewhat",
                point: 1,
                track: ["qa"]
            },
            {
                answer: "Very",
                point: 2,
                track: ["backend"]
            }

        ]
    },
    {
        question: "Would you rather play a game that tests your analytical skills or your design skills?",
        answers: [
            {
                answer: "Design",
                point: 2,
                track: ["uiux"]
            }, 
            {
                answer: "Analytical",
                point: 2,
                track: ["backend"]
            },
            {
                answer: "Both",
                point: 2,
                track: ["frontend", "qa"]
            }

        ]
    },
    {
        question: "How well can you handle failure?",
        answers: [
            {
                answer: "Not quite",
                point: 0,
                track: ["uiux", "qa"]
            }, 
            {
                answer: "Somewhat",
                point: 1,
                track: ["frontend"]
            },
            {
                answer: "Very",
                point: 2,
                track: ["backend"]
            }

        ]
    },
    {
        question: "When you fail, How quick are you to restrategizing?",
        answers: [
            {
                answer: "Not quite",
                point: 0,
                track: ["uiux", "qa"]
            }, 
            {
                answer: "Somewhat",
                point: 1,
                track: ["frontend"]
            },
            {
                answer: "Very",
                point: 2,
                track: ["backend"]
            }

        ]
    },
    {
        question: "How good are you with spotting errors?",
        answers: [
            {
                answer: "Not quite",
                point: 0,
                track: ["frontend", "uiux"]
            }, 
            {
                answer: "Somewhat",
                point: 1,
                track: ["backend"]
            },
            {
                answer: "Very",
                point: 2,
                track: ["qa"]
            }

        ]
    },
    {
        question: "How attentive are you to details?",
        answers: [
            {
                answer: "Not quite",
                point: 0,
                track: ["frontend", "uiux"]
            }, 
            {
                answer: "Somewhat",
                point: 1,
                track: ["backend"]
            },
            {
                answer: "Very",
                point: 2,
                track: ["qa"]
            }

        ]
    },
    {
        question: "How Diplomatic can you be?",
        answers: [
            {
                answer: "Not quite",
                point: 0,
                track: ["frontend", "backend", "uiux"]
            }, 
            {
                answer: "Somewhat",
                point: 1,
                track: []
            },
            {
                answer: "Very",
                point: 2,
                track: ["qa"]
            }

        ]
    },
    {
        question: "Are you very good with writing reports and giving feedbacks?",
        answers: [
            {
                answer: "Yes",
                point: 2,
                track: ["qa"]
            }, 
            {
                answer: "No",
                point: 0,
                track: []
            },
            {
                answer: "I don't Know",
                point: 0,
                track: []
            }

        ]
    }
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
return (
    <div className="mt-5">
        {
            showScore? 
            <div>Based on your survey result, We Advise that you go for <span style={{fontWeight: "bolder", color: "red"}}>{firstChoice}</span>, or pick the second option of <span style={{fontWeight: "bolder", color: "red"}}>{secondChoice}</span></div> 
            : 
            <div>
                <div>
                    Instruction: You can only answer once!!! Be sure to pick the right answer.
                </div>
                <div>
                    {questionText}
                </div>
                <div>
                    <button type="button" value={firstButton} onClick={handleClick}>{firstButton}</button>
                    <button type="button" value={secondButton} onClick={handleClick}>{secondButton}</button>
                    <button type="button" value={thirdButton} onClick={handleClick}>{thirdButton}</button>
                </div>
        </div>
        }
        
    </div>
)
}

export default SurveyQuestions