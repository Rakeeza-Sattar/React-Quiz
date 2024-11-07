import React, { useEffect, useState } from "react";
import reactQuizQuestions from "../component/reactQuizQuestions";
import Result from "./Result";

const Quiz = () => {
  const [quiz, setQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(60);
  const [quizComplete, setQuizComplete] = useState(false);

  const currentQuestion = reactQuizQuestions[quiz];

  useEffect(() => {
    if (quizComplete || time === 0) return;
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time, quizComplete]);

  useEffect(() => {
    if (time === 0) {
      setQuizComplete(true);
    }
  }, [time]);

  const handleAnswer = (ans) => {
    if (ans === currentQuestion.answer) {
      setScore(score + 1);
    }
    if (quiz < reactQuizQuestions.length - 1) {
      setQuiz(quiz + 1);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRetry = () => {
    setQuiz(0);
    setScore(0);
    setTime(60);
    setQuizComplete(false);
  };

  return (
    <div
      className="h-screen overflow-hidden p-5 flex justify-center items-center"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-vector/gradient-grainy-texture_23-2148976545.jpg?t=st=1730892115~exp=1730895715~hmac=026d1101d3b034effa557bc5d14194af7c24a99bb681933b12028755695c32b5&w=740)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white overflow-hidden bg-opacity-20 backdrop-blur-md rounded-3xl w-full max-w-md shadow-lg p-8 text-center flex flex-col justify-center border border-white border-opacity-30">
        {quizComplete ? (
          <Result
            score={score}
            totalQuestions={reactQuizQuestions.length}
            time={time}
            handleRetry={handleRetry}
          />
        ) : (
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Question {quiz + 1} of {reactQuizQuestions.length}
            </h2>
            <h3 className="text-lg font-medium mb-6">
              {currentQuestion.question}
            </h3>
            <div className="grid gap-4 mb-8">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="bg-blue-500 text-white py-2 px-4 rounded-full transition duration-300 ease-in-out hover:bg-blue-700 focus:outline-none"
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="text-gray-800 font-bold text-xl">
              Time Remaining: <span className="text-red-500">{time}</span>{" "}
              seconds
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
