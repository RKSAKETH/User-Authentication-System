import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Root always goes to signup */}
        <Route path="/" element={<Navigate to="/signup" />} />

        {/* Auth pages */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Fallback */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
