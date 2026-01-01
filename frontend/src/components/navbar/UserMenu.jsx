import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Settings, LogOut, LayoutDashboard } from "lucide-react";

export default function UserMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => !ref.current?.contains(e.target) && setOpen(false);
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="w-9 h-9 rounded-full bg-emerald-400 text-black font-bold"
        aria-label="User menu"
      >
        U
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 mt-3 w-48 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl p-2"
          >
            <MenuItem icon={<LayoutDashboard size={16} />} label="Dashboard" />
            <MenuItem icon={<User size={16} />} label="Profile" />
            <MenuItem icon={<Settings size={16} />} label="Settings" />
            <MenuItem icon={<LogOut size={16} />} label="Logout" danger />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MenuItem({ icon, label, danger }) {
  return (
    <button
      className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition
        ${danger ? "text-red-400 hover:bg-red-500/10" : "text-gray-300 hover:bg-white/10"}
      `}
    >
      {icon}
      {label}
    </button>
  );
}
