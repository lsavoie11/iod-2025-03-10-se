import React, { createContext, useState, useContext } from "react";

const MoodContext = createContext();

export function MoodProvider({ children }) {
  const [happy, setHappy] = useState(true);
  const toggleMood = () => setHappy((m) => !m);

  return (
    <MoodContext.Provider value={{ happy, toggleMood }}>
      {children}
    </MoodContext.Provider>
  );
}

export function useMood() {
  return useContext(MoodContext);
}
