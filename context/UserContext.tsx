"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { decodeJwt } from "jose";
import Cookies from "js-cookie";

interface UserData {
  name?: string;
  email?: string;
  [key: string]: any;
}

interface UserContextType {
  user: UserData | null;
  loading: boolean;
}

const UserContext = createContext<UserContextType>({ user: null, loading: true });

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get("session");

    if (token) {
      try {
        const decoded = decodeJwt(token);
        setUser(decoded as UserData);
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }

    setLoading(false);
  }, []);

  return <UserContext.Provider value={{ user, loading }}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  return useContext(UserContext);
}
