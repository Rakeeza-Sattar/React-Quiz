import React from "react";

const Result = ({ score, totalQuestions, time, handleRetry }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-green-600 mb-4">
        Quiz Completed!
      </h2>
      <p className="text-xl font-medium text-gray-800 mb-2">
        Your Score: <span className="text-blue-600">{score}</span> /{" "}
        {totalQuestions}
      </p>
      <p className="text-lg text-gray-600 mb-6">
        Time Remaining: <span className="text-red-500">{time}</span> seconds
      </p>
      <button
        onClick={handleRetry}
        className="bg-purple-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
      >
        Retry Quiz
      </button>
    </div>
  );
};

export default Result;
