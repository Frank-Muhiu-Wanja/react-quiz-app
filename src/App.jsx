import React from "react";
import { useState } from "react";
import "./App.css";

const questions = [
  {
    questionText: "What is the capital of France?",
    answerOptions: [
      { answerText: "New York", isCorrect: false },
      { answerText: "London", isCorrect: false },
      { answerText: "Paris", isCorrect: true },
      { answerText: "Dublin", isCorrect: false },
    ],
  },
  {
    questionText: "Who is the CEO of Tesla?",
    answerOptions: [
      { answerText: "Jeff Bezos", isCorrect: false },
      { answerText: "Elon Musk", isCorrect: true },
      { answerText: "Bill Gates", isCorrect: false },
      { answerText: "Tony Stark", isCorrect: false },
    ],
  },
  {
    questionText: "What is the Capital of India?",
    answerOptions: [
      { answerText: "Dhaka", isCorrect: false },
      { answerText: "London", isCorrect: false },
      { answerText: "Paris", isCorrect: false },
      { answerText: "Delhi", isCorrect: true },
    ],
  },
  {
    questionText: "What is the Capital of Afghanistan?",
    answerOptions: [
      { answerText: "Dehli", isCorrect: false },
      { answerText: "London", isCorrect: false },
      { answerText: "Kabul", isCorrect: true },
      { answerText: "Dublin", isCorrect: false },
    ],
  },
  {
    questionText: "What is the Capital of Pakistan?",
    answerOptions: [
      { answerText: "New York", isCorrect: false },
      { answerText: "Islamabad", isCorrect: true },
      { answerText: "Paris", isCorrect: false },
      { answerText: "Peshawar", isCorrect: false },
    ],
  },
];

function App() {
  const [currentquestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOption = (index, isCorrect) => {
    setAnswered(true);
    setSelectedAnswer(index);
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const NextQuestion = () => {
    setAnswered(false);
    setSelectedAnswer(null);
    const nextQuestion = currentquestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="App">
      <div>
        <div className="quiz">Quiz App</div>
        {showScore ? (
          <div>
            Your score is {score} of {questions.length}
          </div>
        ) : (
          <div>
            <div>{questions[currentquestion].questionText}</div>
            {questions[currentquestion].answerOptions.map((option, index) => (
              <button
                onClick={() => handleAnswerOption(index, option.isCorrect)}
                className={
                  !answered
                    ? "btn"
                    : option.isCorrect
                    ? "correct"
                    : selectedAnswer === index
                    ? "wrong"
                    : "btn"
                }
              >
                {option.answerText}
              </button>
            ))}
            <button
              className={answered ? "next" : "next2"}
              // disabled={answered ? "" : "disabled"}
              disabled={!answered}
              onClick={NextQuestion}
            >
              Next Question
            </button>
            <p className="qxn">
              Question {currentquestion + 1} of {questions.length}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
