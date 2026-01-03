import { Link } from "react-router-dom";
import { Menu, Building2, HandHeart } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import NavItem from "./NavItem";
import RoleTab from "./RoleTab";
import UserMenu from "./UserMenu";
import MobileMenu from "./MobileMenu";
import { useAuth } from "../../context/AuthContext";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};


export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
const location = useLocation();

const goHome = () => {
  if (location.pathname === "/") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  }
};

const scrollToSection = (id) => {
  if (location.pathname !== "/") {
    navigate("/");
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
};


  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LEFT: Logo */}
          <Link
            to="/"
            className="text-xl font-bold text-emerald-400 hover:drop-shadow-[0_0_10px_rgba(52,211,153,0.6)] transition"
          >
            FoodShare
          </Link>

          {/* CENTER: Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
          <button
              onClick={goHome}
              className="text-gray-300 hover:text-emerald-400 transition font-medium"
            >
              Home
            </button>

          <button
            onClick={() => scrollToSection("how")}
            className="text-gray-300 hover:text-emerald-400 transition"
          >
              How It Works
          </button>

          <button
              onClick={() => scrollToSection("features")}
              className="text-gray-300 hover:text-emerald-400 transition"
          >
              Features
          </button>

          <button
            onClick={() => scrollToSection("impact")}
            className="text-gray-300 hover:text-emerald-400 transition"
          >
            Impact
          </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-emerald-400 transition"
            >
              Contact
            </button>
          </nav>


          {/* ROLE ACCESS */}
          <div className="hidden lg:flex items-center gap-3">
            <RoleTab
            //to="/ngo/NGODashboard"
            to="/ngo/dashboard"
            label="NGO Portal"
            icon={<Building2 size={16} />}
            active={user?.role === "ngo"}
          />

            <RoleTab
              //to="/donor/DonorDashboard"
              to="/donor/dashboard"
              label="Donor Portal"
              icon={<HandHeart size={16} />}
              active={user?.role === "donor"}
            />

          </div>

          {/* RIGHT: AUTH */}
          <div className="hidden md:flex items-center gap-4">
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-lg border border-white/20 text-gray-300 hover:border-emerald-400 hover:text-emerald-400 transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-5 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-400 text-black font-semibold hover:shadow-lg hover:shadow-emerald-500/40 transition"
                >
                  Get Started
                </Link>
              </>
            ) : (
              <UserMenu />
            )}
          </div>

          {/* MOBILE */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileOpen(true)}
          >
            <Menu />
          </button>
        </div>
      </motion.header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
