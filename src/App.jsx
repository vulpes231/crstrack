/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Dash from "./pages/Dash";
import Xchat from "./components/Xchat";
import Fbchat from "./components/Fbchat";
import Instachat from "./components/Instachat";
import Snap from "./components/Snap";
import Sms from "./components/Sms";
import Mail from "./components/Mail";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dash />} />
        <Route path="/x" element={<Xchat />} />
        <Route path="/fb" element={<Fbchat />} />
        <Route path="/ig" element={<Instachat />} />
        <Route path="/snap" element={<Snap />} />
        <Route path="/sms" element={<Sms />} />
        <Route path="/mail" element={<Mail />} />
      </Routes>
    </div>
  );
};

export default App;
