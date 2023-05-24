import React from "react";
import Body from "./Body/Body";
import Header from "./Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
      </Routes>
    </Router>
  );
};

export default App;
