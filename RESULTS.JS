import React from "react";

function Result({ score, total, restartQuiz }) {
  return (
    <div className="result-box">
      <h1>Quiz Completed 🎉</h1>

      <h2>
        Your Score: {score} / {total}
      </h2>

      <button onClick={restartQuiz}>
        Restart Quiz
      </button>
    </div>
  );
}

export default Result;
