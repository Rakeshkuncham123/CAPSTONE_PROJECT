import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // mock auth (replace later with backend)
  const [user, setUser] = useState(null);
  // example user:
  // { role: "ngo" } or { role: "donor" }

  const loginAsDonor = () => setUser({ role: "donor" });
  const loginAsNGO = () => setUser({ role: "ngo" });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider
      value={{ user, loginAsDonor, loginAsNGO, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
