import {Link} from "react-router-dom";
import ScrollProgress from "../components/ui/ScrollProgress";

import Hero from "../components/Hero";
import StepCard from "../components/StepCard";
import FeatureCard from "../components/FeatureCard";
import RoleCard from "../components/RoleCard";
import StatCard from "../components/StatCard";

import {
  Utensils,
  Bell,
  Truck,
  Heart,
  Users,
  MapPin,
  ShieldCheck,
  BarChart,
} from "lucide-react";

export default function Home() {
  return (
    <div className="font-sans text-gray-800 overflow-x-hidden">
      {/* SCROLL PROGRESS INDICATOR */}
      <ScrollProgress />

      <Hero />

      {/* HOW IT WORKS */}
      <section id="how" className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12 relative after:block after:w-16 after:h-1 after:bg-emerald-600 after:mx-auto after:mt-3">
          How It Works
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <StepCard icon={<Utensils />} title="Donor lists surplus food" />
          <StepCard icon={<Bell />} title="NGO gets notified" />
          <StepCard icon={<Truck />} title="Volunteer collects food" />
          <StepCard icon={<Heart />} title="Food delivered safely" />
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 px-6 bg-emerald-50 text-center">
        <h2 className="text-3xl font-bold mb-12 relative after:block after:w-16 after:h-1 after:bg-emerald-600 after:mx-auto after:mt-3">
          Platform Features
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon={<Users />} title="Role-based Login" />
          <FeatureCard icon={<MapPin />} title="Location Matching" />
          <FeatureCard icon={<ShieldCheck />} title="Hygienic Handling" />
          <FeatureCard icon={<Bell />} title="Emergency Requests" />
          <FeatureCard icon={<Utensils />} title="Live Availability" />
          <FeatureCard icon={<BarChart />} title="Impact Tracking" />
        </div>
      </section>

      {/* ROLES */}
      <section id="roles" className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12 relative after:block after:w-16 after:h-1 after:bg-emerald-600 after:mx-auto after:mt-3">
          User Roles
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <RoleCard title="Donor" desc="List surplus food easily" />
          <RoleCard title="NGO" desc="Request and manage food" />
          <RoleCard title="Volunteer" desc="Pickup and delivery" />
          <RoleCard title="Admin" desc="Platform monitoring" />
        </div>
      </section>

      {/* IMPACT */}
      <section id="impact" className="bg-gradient-to-r from-emerald-800 to-emerald-600 text-white py-20 px-6 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center">
        <StatCard value="25,000+" label="Meals Saved" />
        <StatCard value="1,200+" label="Active Donors" />
        <StatCard value="300+" label="NGOs Connected" />
        <StatCard value="900+" label="Volunteers" />
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold">Be a Part of the Change</h2>
        <p className="text-gray-600 mt-3">
          Join us to reduce food waste and feed the needy.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link
            to="./Login"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-700 to-emerald-500 text-white font-semibold shadow-lg hover:-translate-y-1 transition"
          >
            Join as Donor
          </Link>
          <Link
            to="./Login"
            className="px-8 py-4 rounded-xl border-2 border-emerald-700 text-emerald-700 font-semibold hover:bg-emerald-700 hover:text-white transition"
          >
            Join as NGO
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-10 text-center">
        <h3 className="text-white text-lg mb-1">
          Food Waste Management System
        </h3>
        <p>Saving food. Serving humanity.</p>
      </footer>

    </div>
  );
}
