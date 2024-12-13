'use client'
import { useEffect } from "react";
import { jwtDecode } from 'jwt-decode';
import { useUser, User } from "./useUser";
import { useLocalStorage } from "./useLocalStorage";

export const useAuth = () => {
  // we can re export the user methods or object from this hook
  const { user, addUser, removeUser, setUser } = useUser();
  const { getItem } = useLocalStorage();

  useEffect(() => {
    const user = getItem("user");
    if (user) {
      addUser(JSON.parse(user));
    }
  }, [addUser, getItem]);

  const login = (user: User) => {
    addUser(user);
  };

  const logout = () => {
    removeUser();
  };

  const getUserFromToken = ({token}:{token :string}) => {
    if (!token) return null;
  
    try {
      const user = jwtDecode(token as string) ;
           console.log(" USer" ,user);
           console.log(" token", token);
           return user ;
    } catch (error) {
      console.error('Error decoding token', error);
      return null;
    }
  };

  return { user, login, logout, setUser, getUserFromToken };
};