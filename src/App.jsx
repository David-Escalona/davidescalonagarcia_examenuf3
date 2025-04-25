import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header";
import Main from "./components/main";
import Usuarios from "./views/usuarios";
import Camareros from "./views/camareros";


function App() {
  return (
    <Router>

      <Header />

      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/camareros" element={<Camareros />} />
      </Routes>
    </Router>
  );
}

export default App;