"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  isLoading: boolean;
  login: (token: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  // useEffect hataidine, direct useState bhitra check garne:
  // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
  //   if (typeof window !== "undefined") {
  //     const token = localStorage.getItem("access_token");
  //     return !!token; // token chha bhane true, chaina bhane false
  //   }
  //   return false;
  // });  ==> yesto ni garna milxa ( when we do it ... euta inital value linu prney haina ..fucntion ni linxaw??)

  //   useEffect(() => {
  //     if (typeof window !== undefined) {
  //       const token = localStorage.getItem("access_token");
  //       return !!token;
  //     }
  //     return false;
  //     //   setIsLoggedIn(true); k vaneko
  //   }, []);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    console.log("token", token);
    // if (token) {
    //   // Sano queue banayera pathayeko jasle React ko lifecycle disturb hudaina
    //   setTimeout(() => {
    //     setIsLoggedIn(true);
    //   }, 0);
    // }
    // const token = localStorage.getItem("access_token");
    // "undefined" string check validation bypass logic
    if (token && token !== "undefined" && token !== "null") {
      setTimeout(() => {
        setIsLoggedIn(true);
      }, 0);
    }
  }, []);

  const login = (token: string) => {
    localStorage.setItem("access_token", token);
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider value={{ isLoading, isLoggedIn, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Use Auth must be wrapped with the Authprovider..");
  }
  return context;
}
