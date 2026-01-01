import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, User, Building2 } from "lucide-react";

/* ---------------- VALIDATION SCHEMAS ---------------- */

const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Minimum 8 characters"),
});

const registerSchema = z
  .object({
    name: z.string().min(3, "Name too short"),
    email: z.string().email("Invalid email"),
    password: z.string().min(8, "Minimum 8 characters"),
    confirmPassword: z.string(),
    role: z.enum(["donor", "ngo"]),
    terms: z.literal(true, {
      errorMap: () => ({ message: "Accept terms to continue" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

/* ---------------- COMPONENT ---------------- */

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [loading, setLoading] = useState(false);

  const loginForm = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const registerForm = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  /* ---------------- SUBMIT HANDLERS ---------------- */

  const handleLogin = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Logged in (mock)");
    }, 1500);
  };

  const handleRegister = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Registered successfully (mock)");
    }, 1500);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-black text-white">

      {/* ---------------- LEFT QUOTE SECTION ---------------- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="hidden lg:flex relative"
      >
        <img
          src="https://images.unsplash.com/photo-1599058917212-d750089bc07c"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Food Donation"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 p-16 flex flex-col justify-center">
          <h1 className="text-4xl font-bold leading-snug">
            “Not everyone can afford food, <br /> but everyone can help.”
          </h1>
          <p className="mt-4 text-gray-300">— FoodShare Community</p>
        </div>
      </motion.div>

      {/* ---------------- RIGHT FORM SECTION ---------------- */}
      <div className="flex items-center justify-center p-6">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-full max-w-md bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-xl"
        >
          <h2 className="text-2xl font-semibold mb-6">
            {showRegister ? "Create Account" : "Welcome Back"}
          </h2>

          {/* ---------------- LOGIN FORM ---------------- */}
          {!showRegister && (
            <form
              onSubmit={loginForm.handleSubmit(handleLogin)}
              className="space-y-5"
            >
              <Input
                label="Email"
                icon={<Mail size={16} />}
                type="email"
                {...loginForm.register("email")}
                error={loginForm.formState.errors.email}
              />

              <Input
                label="Password"
                icon={<Lock size={16} />}
                type={showPassword ? "text" : "password"}
                toggle={() => setShowPassword(!showPassword)}
                showToggle
                {...loginForm.register("password")}
                error={loginForm.formState.errors.password}
              />

              <button
                disabled={!loginForm.formState.isValid || loading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-400 text-black font-semibold disabled:opacity-50"
              >
                {loading ? "Signing in..." : "Login"}
              </button>

              <p className="text-sm text-gray-400 text-center">
                Don’t have an account?{" "}
                <button
                  type="button"
                  onClick={() => setShowRegister(true)}
                  className="text-emerald-400 hover:underline"
                >
                  Create one now
                </button>
              </p>
            </form>
          )}

          {/* ---------------- INLINE REGISTER FORM ---------------- */}
          <AnimatePresence>
            {showRegister && (
              <motion.form
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                onSubmit={registerForm.handleSubmit(handleRegister)}
                className="space-y-4 overflow-hidden"
              >
                <Input
                  label="Full Name"
                  icon={<User size={16} />}
                  {...registerForm.register("name")}
                  error={registerForm.formState.errors.name}
                />

                <Input
                  label="Email"
                  icon={<Mail size={16} />}
                  {...registerForm.register("email")}
                  error={registerForm.formState.errors.email}
                />

                <Input
                  label="Password"
                  icon={<Lock size={16} />}
                  type="password"
                  {...registerForm.register("password")}
                  error={registerForm.formState.errors.password}
                />

                <Input
                  label="Confirm Password"
                  icon={<Lock size={16} />}
                  type="password"
                  {...registerForm.register("confirmPassword")}
                  error={registerForm.formState.errors.confirmPassword}
                />

                <div className="flex gap-4 text-sm">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="donor"
                      {...registerForm.register("role")}
                    />
                    Donor
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="ngo"
                      {...registerForm.register("role")}
                    />
                    NGO
                  </label>
                </div>

                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" {...registerForm.register("terms")} />
                  Accept Terms & Conditions
                </label>

                <button
                  disabled={!registerForm.formState.isValid || loading}
                  className="w-full py-3 rounded-xl bg-emerald-500 text-black font-semibold disabled:opacity-50"
                >
                  {loading ? "Creating..." : "Register"}
                </button>

                <button
                  type="button"
                  onClick={() => setShowRegister(false)}
                  className="text-sm text-gray-400 hover:underline w-full text-center"
                >
                  Back to Login
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

/* ---------------- INPUT COMPONENT ---------------- */

function Input({ label, icon, error, showToggle, toggle, ...props }) {
  return (
    <div className="relative">
      <input
        {...props}
        placeholder=" "
        className="
          peer w-full bg-black/30 border border-white/10 rounded-xl px-10 py-3
          focus:border-emerald-400 outline-none transition
        "
      />
      <label className="absolute left-10 top-1/2 -translate-y-1/2 text-gray-400 text-sm peer-focus:top-1 peer-focus:text-xs peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm transition">
        {label}
      </label>
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        {icon}
      </span>

      {showToggle && (
        <button
          type="button"
          onClick={toggle}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
        >
          {props.type === "password" ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      )}

      {error && (
        <p className="text-xs text-red-400 mt-1">{error.message}</p>
      )}
    </div>
  );
}
