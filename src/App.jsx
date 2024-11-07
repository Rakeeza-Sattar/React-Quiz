import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Quiz from "./pages/Quiz";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </>
  );
};

export default App;
