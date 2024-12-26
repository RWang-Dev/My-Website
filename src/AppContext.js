// src/context/AppContext.js
import React, { createContext, useContext, useState } from "react";

// Create the context
const AppContext = createContext();

// Create the provider component
export function AppProvider({ children }) {
  // Define your state here
  const [userData, setUserData] = useState({
    theme: "light",
    settings: {},
    profile: {},
  });

  // Define your methods to update state
  const updateUserData = (key, value) => {
    setUserData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Value object that will be available to consumers
  const value = {
    userData,
    updateUserData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// Custom hook to use the context
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
