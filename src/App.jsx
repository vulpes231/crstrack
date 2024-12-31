/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Dash from "./pages/Dash";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dash />} />
      </Routes>
    </div>
  );
};

export default App;
