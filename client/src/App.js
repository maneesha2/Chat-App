import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Chat from "./Chattab";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chattab" element={<Chat />} />
      </Routes>
    </Router>
  );
};

export default App;
