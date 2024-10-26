import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Common/header"; // Ensure the path is correct

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        {/* Only Route to Header */}
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
