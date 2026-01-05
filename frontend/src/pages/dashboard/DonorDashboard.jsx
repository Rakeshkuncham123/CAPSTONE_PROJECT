import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bell,
  Plus,
  CheckCircle,
  Clock,
  Truck,
  User,
  LogOut,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useAuth } from "../../context/AuthContext";

/* ---------------- STATIC UI DATA (CAN BE API LATER) ---------------- */

const statsData = [
  { label: "Total Donations", value: 28 },
  { label: "Meals Saved", value: 340 },
  { label: "Active Requests", value: 2 },
  { label: "Impact Score", value: 92 },
];

const chartData = [
  { month: "Jan", meals: 40 },
  { month: "Feb", meals: 70 },
  { month: "Mar", meals: 120 },
  { month: "Apr", meals: 110 },
];

/* ---------------- MAIN COMPONENT ---------------- */

export default function DonorDashboard() {
  const { user, logout } = useAuth();
  const [showDonate, setShowDonate] = useState(false);
  const [notifications, setNotifications] = useState([
    "NGO accepted your donation",
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotifications((prev) => [
        "Volunteer picked up your food",
        ...prev,
      ]);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      {/* ---------------- HEADER ---------------- */}
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">
            Welcome, {user?.name} 👋
          </h1>
          <p className="text-gray-400">
            Your generosity creates real impact
          </p>
        </div>

        <div className="relative">
          <Bell className="cursor-pointer" />
          {notifications.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-emerald-500 text-xs px-2 rounded-full">
              {notifications.length}
            </span>
          )}
        </div>
      </header>

      {/* ---------------- STATS ---------------- */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {statsData.map((stat) => (
          <motion.div
            key={stat.label}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4"
          >
            <p className="text-gray-400 text-sm">{stat.label}</p>
            <h2 className="text-3xl font-bold text-emerald-400">
              {stat.value}
            </h2>
          </motion.div>
        ))}
      </section>

      {/* ---------------- DONATE FOOD BUTTON ---------------- */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowDonate(true)}
        className="mb-10 flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-400 text-black px-6 py-3 rounded-xl font-semibold"
      >
        <Plus /> Donate Food
      </motion.button>

      {/* ---------------- IMPACT GRAPH ---------------- */}
      <section className="bg-white/5 border border-white/10 rounded-xl p-6 mb-12">
        <h2 className="text-xl font-semibold mb-4">
          Impact Over Time
        </h2>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <XAxis dataKey="month" stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="meals"
                stroke="#34d399"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* ---------------- PROFILE ---------------- */}
      <section className="bg-white/5 border border-white/10 rounded-xl p-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <User />
          <div>
            <p className="font-semibold">{user?.name}</p>
            <p className="text-sm text-gray-400">Donor Account</p>
          </div>
        </div>

        <button
          onClick={logout}
          className="flex items-center gap-2 text-red-400 hover:text-red-500"
        >
          <LogOut /> Logout
        </button>
      </section>

      {/* ---------------- DONATION MODAL ---------------- */}
      <AnimatePresence>
        {showDonate && (
          <DonateModal onClose={() => setShowDonate(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------------- DONATE MODAL (BACKEND CONNECTED) ---------------- */

function DonateModal({ onClose }) {
  const [foodName, setFoodName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/donations/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            food_name: foodName,
            quantity,
            pickup_location: pickupLocation,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to create donation");
      }

      alert("Donation created successfully!");
      onClose();
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="bg-slate-900 p-6 rounded-2xl w-full max-w-md"
      >
        <h2 className="text-xl font-semibold mb-4">
          Donate Food
        </h2>

        <input
          placeholder="Food Type & Category"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
          className="w-full mb-3 px-4 py-2 rounded bg-black/40 border border-white/10"
        />

        <input
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full mb-3 px-4 py-2 rounded bg-black/40 border border-white/10"
        />

        <input
          placeholder="Pickup Location"
          value={pickupLocation}
          onChange={(e) => setPickupLocation(e.target.value)}
          className="w-full mb-3 px-4 py-2 rounded bg-black/40 border border-white/10"
        />

        <div className="flex justify-between mt-4">
          <button onClick={onClose} className="text-gray-400">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-emerald-500 px-4 py-2 rounded text-black font-semibold disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
