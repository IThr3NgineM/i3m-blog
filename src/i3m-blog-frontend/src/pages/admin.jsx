import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../components/Admin/Dashboard";

const Admin = () => {
  return (
    
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

  );
};

export default Admin;
