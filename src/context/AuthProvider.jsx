/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

if (typeof window !== "undefined") {
  const _logged = localStorage.getItem("loggedInUser");
  if (_logged === "") localStorage.removeItem("loggedInUser");
}

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  // localStorage.clear();

  useEffect(() => {
    setLocalStorage();
    const { employees } = getLocalStorage();
    setUserData(employees);
  }, []);
  return (
    <div>
      <AuthContext.Provider value={[userData, setUserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};
