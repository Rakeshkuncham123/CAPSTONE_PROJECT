import { Routes, Route } from "react-router-dom";
import ScrollProgress from "./components/ui/ScrollProgress";

import Navbar from "./components/navbar/Navbar";

import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import DonorDashboard from "./pages/dashboard/DonorDashboard";
import NGODashboard from "./pages/dashboard/NGODashboard";
import ProtectedRoute from "./components/ui/ProtectedRoute";

export default function App() {
  return (
    <>
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      {/* Existing Navbar – unchanged */}
      <Navbar />

      {/* Existing layout wrapper – unchanged */}
      <div className="pt-20">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* Donor Dashboard */}
          <Route
            path="/donor/dashboard"
            element={
              <ProtectedRoute role="donor">
                <DonorDashboard />
              </ProtectedRoute>
            }
          />

          {/* NGO Dashboard */}
          <Route
            path="/ngo/dashboard"
            element={
              <ProtectedRoute role="ngo">
                <NGODashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
}
