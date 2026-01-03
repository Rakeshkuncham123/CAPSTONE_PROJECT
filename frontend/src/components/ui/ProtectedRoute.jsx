import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

/**
 * ProtectedRoute
 * @param children - component to render
 * @param role - allowed role ("donor" | "ngo")
 */
export default function ProtectedRoute({ children, role }) {
  const { user, loading } = useAuth();

  // ⏳ Prevent flicker while auth state restores
  if (loading) return null;

  // 🔒 Not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 🚫 Role mismatch
  if (role && user.role !== role) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
