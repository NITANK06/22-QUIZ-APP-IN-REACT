import React, { useState } from "react";

import questions from "./data/questions";

import Question from "./components/Question";
import Result from "./components/Result";

import "./App.css";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (
      selectedOption ===
      questions[currentQuestion].answer
    ) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="app">
      <h1>React Quiz App</h1>

      {showResult ? (
        <Result
          score={score}
          total={questions.length}
          restartQuiz={restartQuiz}
        />
      ) : (
        <Question
          data={questions[currentQuestion]}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
}

export default App;
