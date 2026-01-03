import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function RoleTab({ to, label, icon, active }) {
  return (
    <NavLink to={to}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`
          flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium cursor-pointer
          transition
          ${
            active
              ? "bg-emerald-500 text-black shadow-md"
              : "bg-white/5 text-gray-300 hover:bg-white/10"
          }
        `}
      >
        {icon}
        {label}
      </motion.div>
    </NavLink>
  );
}
