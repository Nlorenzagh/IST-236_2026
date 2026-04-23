import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const theme = {
    isDarkMode,
    toggleTheme,
    colors: isDarkMode
      ? {
          background: "#000000",
          text: "#FFFFFF",
          card: "#000000",
          accent: "#ffffff",
        }
      : {
          background: "#1262db",
          text: "#ffffff",
          card: "#0ec4ca",
          accent: "#0000FF",
        },
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
