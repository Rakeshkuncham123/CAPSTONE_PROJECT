import { motion } from "framer-motion";
import { X, Building2, HandHeart } from "lucide-react";
import NavItem from "./NavItem";
import { useAuth } from "../../context/AuthContext";

export default function MobileMenu({ open, onClose }) {
  const { user } = useAuth();

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: open ? 0 : "100%" }}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl p-6"
    >
      <button onClick={onClose} className="absolute top-5 right-5">
        <X className="text-white" />
      </button>

      {/* ROLE BUTTONS */}
      <div className="mt-16 space-y-4">
        <NavItem to="/ngo" label="NGO Portal" />
        <NavItem to="/donor" label="Donor Portal" />
      </div>

      <nav className="mt-10 flex flex-col gap-6 text-lg">
        <NavItem to="/" label="Home" />
        <NavItem to="/how" label="How It Works" />
        <NavItem to="/features" label="Features" />
        <NavItem to="/impact" label="Impact" />
        <NavItem to="/contact" label="Contact" />
      </nav>
    </motion.div>
  );
}
