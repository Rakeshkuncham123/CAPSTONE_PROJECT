import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function RoleTab({ to, icon, label, active }) {
  return (
    <NavLink to={to} className="relative">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`
          flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium
          ${active
            ? "text-emerald-400 bg-emerald-400/10"
            : "text-gray-300 hover:text-emerald-400"}
        `}
      >
        {icon}
        {label}
      </motion.div>

      {active && (
        <motion.div
          layoutId="role-underline"
          className="absolute -bottom-1 left-0 w-full h-[2px] bg-emerald-400 rounded-full"
        />
      )}
    </NavLink>
  );
}
