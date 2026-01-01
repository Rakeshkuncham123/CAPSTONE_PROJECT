import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function NavItem({ to, label }) {
  return (
    <NavLink to={to} className="relative px-1">
      {({ isActive }) => (
        <div className="group">
          <span
            className={`text-sm transition ${
              isActive ? "text-emerald-400" : "text-gray-300"
            }`}
          >
            {label}
          </span>

          {/* Animated underline */}
          <motion.div
            layoutId="nav-underline"
            className={`h-[2px] bg-emerald-400 rounded-full ${
              isActive ? "block" : "hidden group-hover:block"
            }`}
          />
        </div>
      )}
    </NavLink>
  );
}
