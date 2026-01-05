import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Signup from "./Signup";
import Login from "./Login";
import Content from "./Content";

const App = () => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // Wake backend (Render cold start)
  useEffect(() => {
    fetch(API_BASE_URL).catch(() => {});
  }, [API_BASE_URL]);

  return (
    <Router>
      <Routes>
        {/* Root goes to signup */}
        <Route path="/" element={<Navigate to="/signup" />} />

        {/* Pages */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/content" element={<Content />} />

        {/* Fallback */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
