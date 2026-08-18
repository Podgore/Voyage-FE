import { useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext.context";
import { setStoredToken, getToken } from "./tokenStore";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setTokenState] = useState<string | null>(getToken());

  const setToken = (newToken: string | null) => {
    setStoredToken(newToken);
    setTokenState(newToken);
  };

  return (
    <AuthContext.Provider value={{ token, setToken, isAuthenticated: !!token }}>
      {children}
    </AuthContext.Provider>
  );
}
