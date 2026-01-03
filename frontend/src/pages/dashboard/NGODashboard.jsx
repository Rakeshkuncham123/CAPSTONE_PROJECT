import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Bell,
  MapPin,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Users,
  Truck,
  FileText,
  LogOut,
} from "lucide-react";

/* ---------------- MOCK DATA ---------------- */

const stats = [
  { label: "Active Requests", value: 3 },
  { label: "Incoming Donations", value: 5 },
  { label: "Food Received Today", value: "48 kg" },
  { label: "People Served", value: 120 },
];

const donations = [
  {
    id: 1,
    food: "Cooked Rice",
    qty: "20 kg",
    distance: "2.1 km",
    expires: "1 hr",
    urgent: true,
  },
  {
    id: 2,
    food: "Bread Packets",
    qty: "50 packs",
    distance: "4.8 km",
    expires: "6 hrs",
    urgent: false,
  },
];

const notificationsMock = [
  "New donation available near your location",
];

/* ---------------- MAIN COMPONENT ---------------- */

export default function NGODashboard() {
  const [donationFeed, setDonationFeed] = useState(donations);
  const [notifications, setNotifications] = useState(notificationsMock);

  /* ---- Simulated real-time updates ---- */
  useEffect(() => {
    const timer = setTimeout(() => {
      setNotifications((prev) => [
        "Volunteer assigned to pickup",
        ...prev,
      ]);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const acceptDonation = (id) => {
    setDonationFeed(donationFeed.filter((d) => d.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      {/* ---------------- HEADER ---------------- */}
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">
            NGO Dashboard
          </h1>
          <p className="text-gray-400">
            Managing food redistribution efficiently
          </p>
        </div>

        {/* Notifications */}
        <div className="relative">
          <Bell className="cursor-pointer" />
          {notifications.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-green-500 text-xs px-2 rounded-full">
              {notifications.length}
            </span>
          )}
        </div>
      </header>

      {/* ---------------- OVERVIEW STATS ---------------- */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 border border-white/10 rounded-xl p-4"
          >
            <p className="text-gray-400 text-sm">{stat.label}</p>
            <h2 className="text-2xl font-bold text-green-400">
              {stat.value}
            </h2>
          </motion.div>
        ))}
      </section>

      {/* ---------------- LIVE DONATION FEED ---------------- */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">
          Live Donation Feed
        </h2>

        <div className="space-y-4">
          {donationFeed.map((donation) => (
            <motion.div
              key={donation.id}
              whileHover={{ y: -3 }}
              className="bg-white/5 border border-white/10 rounded-xl p-4 flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold flex items-center gap-2">
                  {donation.food}
                  {donation.urgent && (
                    <AlertTriangle className="text-red-400" size={16} />
                  )}
                </h3>
                <p className="text-sm text-gray-400">
                  {donation.qty} • {donation.distance} • Expires in {donation.expires}
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => acceptDonation(donation.id)}
                  className="bg-green-500 text-black px-3 py-1 rounded text-sm"
                >
                  Accept
                </button>
                <button className="border border-white/20 px-3 py-1 rounded text-sm">
                  Reject
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- REQUEST FOOD ---------------- */}
      <section className="bg-white/5 border border-white/10 rounded-xl p-6 mb-12">
        <h2 className="text-xl font-semibold mb-4">
          Request Food
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            placeholder="Food Type"
            className="px-4 py-2 rounded bg-black/40 border border-white/10"
          />
          <input
            placeholder="Required Quantity"
            className="px-4 py-2 rounded bg-black/40 border border-white/10"
          />
          <input
            placeholder="Location"
            className="px-4 py-2 rounded bg-black/40 border border-white/10"
          />
          <select className="px-4 py-2 rounded bg-black/40 border border-white/10">
            <option>Urgency Level</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <button className="mt-4 bg-green-500 px-4 py-2 rounded text-black font-semibold">
          Submit Request
        </button>
      </section>

      {/* ---------------- VOLUNTEER COORDINATION ---------------- */}
      <section className="bg-white/5 border border-white/10 rounded-xl p-6 mb-12">
        <h2 className="text-xl font-semibold mb-4">
          Volunteer Coordination
        </h2>

        <p className="text-gray-400 mb-2">
          Assign volunteers to accepted donations
        </p>

        <div className="flex items-center gap-3">
          <Users />
          <Truck />
          <MapPin />
          <span className="text-sm text-gray-400">
            Route visualization (Map integration)
          </span>
        </div>
      </section>

      {/* ---------------- REPORTS ---------------- */}
      <section className="bg-white/5 border border-white/10 rounded-xl p-6 mb-12">
        <h2 className="text-xl font-semibold mb-4">
          Reports & History
        </h2>

        <button className="flex items-center gap-2 border border-white/20 px-4 py-2 rounded">
          <FileText /> Download Monthly Report
        </button>
      </section>

      {/* ---------------- PROFILE ---------------- */}
      <section className="bg-white/5 border border-white/10 rounded-xl p-6 flex justify-between items-center">
        <div>
          <p className="font-semibold">Verified NGO</p>
          <p className="text-sm text-gray-400">
            Trust status: Approved
          </p>
        </div>

        <button className="flex items-center gap-2 text-red-400">
          <LogOut /> Logout
        </button>
      </section>
    </div>
  );
}
