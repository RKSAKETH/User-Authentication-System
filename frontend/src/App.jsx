import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./Signup";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/signup" replace />} />

        {/* Signup page */}
        <Route path="/signup" element={<Signup />} />

        {/* Fallback route */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
