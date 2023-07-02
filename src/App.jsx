import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import SiteNav from "./components/sitenav/SiteNav";
import Landing from "./components/landing/Landing";
import Mission from "./components/MissionStatement";
import LoginPage from "./components/user/Login";
import RegisterPage from "./components/user/Register";
import DailyUpdate from "./components/DailyUpdate";
import ProfilePage from "./user/ProfilePage";

function App() {
  return (
    <div className="App">
      <SiteNav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dailyUpdate" element={<DailyUpdate />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/mission" element={<Mission />} />
      </Routes>
    </div>
  );
}

export default App;
