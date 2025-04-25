import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Main from "./components/main";


function App() {
  return (
    <Router>

      <Header />
      <Main />

      <Routes>

      </Routes>
    </Router>
  );
}

export default App;