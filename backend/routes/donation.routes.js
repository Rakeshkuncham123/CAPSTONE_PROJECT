const express = require("express");
const router = express.Router();

// 🔐 IMPORT JWT MIDDLEWARE
const {
  verifyToken,
  authorizeRoles,
} = require("../middleware/auth.middleware");

// ✅ PROTECTED ROUTE
router.get("/protected", verifyToken, (req, res) => {
  res.json({
    message: "You accessed a protected route",
    user: req.user, // comes from JWT
  });
});

// ✅ DONOR-ONLY ROUTE
router.post(
  "/create",
  verifyToken,
  authorizeRoles("donor"),
  (req, res) => {
    res.json({
      message: "Donation created successfully",
      user: req.user,
    });
  }
);

module.exports = router;
