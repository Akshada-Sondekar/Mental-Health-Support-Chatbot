import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

// Component Imports
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Chat from "./components/Chat";
import Profile from "./pages/Profile";
import MoodCalendar from './components/MoodCalendar';
import MoodLogForm from './components/MoodLog';
import SentimentAnalysis from "./components/sa";
import About from "./components/About";
import ContactUs from './pages/ContactUs';


const App = () => {
  const isLoggedIn = localStorage.getItem("token"); // Used for protected routes

  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* Protected Routes */}
        <Route path="/chat" element={isLoggedIn ? <Chat /> : <Navigate to="/signup" />} />
        <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/signup" />} />
        <Route path="/mood-log" element={isLoggedIn ? <MoodCalendar /> : <Navigate to="/signup" />} />
        <Route path="/mood-log/:date" element={isLoggedIn ? <MoodLogForm /> : <Navigate to="/signup" />} />

        <Route path="/sentiment-analysis" element={isLoggedIn ? <SentimentAnalysis /> : <Navigate to="/signup" />} />
      </Routes>
    </Router>
  );
};

export default App;
