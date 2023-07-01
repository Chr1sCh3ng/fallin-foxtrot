import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import SiteNav from "./components/sitenav/SiteNav";
import Landing from "./components/landing/Landing";

function App() {
  return (
    <div className="App">
      <SiteNav />
      <Routes>
        <Route path="./" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
