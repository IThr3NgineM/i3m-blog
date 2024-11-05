import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Common/header"; 
import  AdminPage from "./pages/admin"

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        {/* Only Route to Header */}
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/admin/*" element={<AdminPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
