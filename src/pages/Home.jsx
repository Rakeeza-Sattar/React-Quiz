import React from "react";
import { Link } from "react-router-dom";
import bulb from "../Images/bulb.png";

const Home = () => {
  return (
    <div
      className="h-screen flex justify-center items-center"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-vector/gradient-grainy-texture_23-2148976545.jpg?t=st=1730892115~exp=1730895715~hmac=026d1101d3b034effa557bc5d14194af7c24a99bb681933b12028755695c32b5&w=740)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-3xl w-1/3 shadow-lg p-10 text-center flex flex-col justify-center border border-white border-opacity-30">
        <div className="w-full flex justify-center">
          <img src={bulb} alt="bulb" className="w-36 h-36 mb-4" />
        </div>
        <h1 className="text-black text-3xl font-bold mb-2">
          WELCOME TO QUIZ APP
        </h1>
        <p className="text-black text-md w-80 mx-auto mb-6">
          Test your knowledge and challenge yourself with our engaging quizzes!
          Whether you're looking to learn something new or just have fun, we
          have a variety of topics to explore. Let's get started!
        </p>
        <Link
          to="/quiz"
          className="text-white bg-[#FF6F61] hover:bg-[#FF4F30] rounded-full py-2 px-6 transition duration-300"
        >
          Start Quiz
        </Link>
      </div>
    </div>
  );
};

export default Home;
