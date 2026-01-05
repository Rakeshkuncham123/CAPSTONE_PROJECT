// Load environment variables
require("dotenv").config();
require("./config/db");


// Core packages
const express = require("express");
const cors = require("cors");
const path = require("path");

// App initialization
const app = express();

// Import routes
const authRoutes = require("./routes/auth.routes");
const donationRoutes = require("./routes/donation.routes");
const ngoRoutes = require("./routes/ngo.routes");

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded images statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/donations", donationRoutes);
app.use("/api/ngos", ngoRoutes);

// Health check route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Food Waste Management Backend is running 🚀",
  });
});

// Server port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
