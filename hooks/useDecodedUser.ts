"use client";

import { decodeJwt } from "jose";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface UserData {
  name?: string;
  email?: string;
  [key: string]: any;
}

export function useDecodedUser() {
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const token = Cookies.get("session");
  
    if (token) {
      try {
        const decoded = decodeJwt(token);
         setUser(decoded as UserData);
         
      } catch (error) {
        console.error("Error decoding token:", error);
        setUser(null);
      }
    }
  }, []);


  return user;
}
