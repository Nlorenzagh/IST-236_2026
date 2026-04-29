import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const theme = {
    isDarkMode,
    toggleTheme: () => setIsDarkMode(!isDarkMode),
    colors: isDarkMode
      ? {
          background: "#000000",
          card: "#000000",
          text: "#FFFFFF",
          border: "#FFFFFF",
          subtext: "#888888",
          accent: "#FFFFFF",
        }
      : {
          background: "#F2F2F2", // Light Grey
          card: "#FFFFFF", // White
          text: "#1A1A1A", // Near Black
          border: "#1A1A1A",
          subtext: "#555555",
          accent: "#000000",
        },
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
