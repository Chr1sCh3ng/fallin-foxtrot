import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import SiteNav from "./components/sitenav/SiteNav";
import Landing from "./components/landing/Landing";
import Mission from "./components/MissionStatement";

function App() {
  return (
    <div className="App">
      <SiteNav />
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/mission" element={<Mission />} />
      </Routes>
    </div>
  );
}

export default App;
