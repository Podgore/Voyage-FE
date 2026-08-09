import { useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext.context";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setTokenState] = useState<string | null>(
    localStorage.getItem("accessToken"),
  );

  const setToken = (newToken: string | null) => {
    if (newToken) {
      localStorage.setItem("accessToken", newToken);
    } else {
      localStorage.removeItem("accessToken");
    }
    setTokenState(newToken);
  };

  return (
    <AuthContext.Provider value={{ token, setToken, isAuthenticated: !!token }}>
      {children}
    </AuthContext.Provider>
  );
}
