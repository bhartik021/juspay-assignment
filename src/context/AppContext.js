import { createContext, useState, useEffect } from "react";

const AppContext = createContext(null);

function AppProvider({ children }) {
  // Initialize theme from localStorage or default to "light"
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem("juspay-theme");
      return savedTheme || "light";
    } catch (error) {
      console.warn("Error reading theme from localStorage:", error);
      return "light";
    }
  });

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("juspay-theme", theme);
    } catch (error) {
      console.warn("Error saving theme to localStorage:", error);
    }
  }, [theme]);

  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <AppContext.Provider value={{ theme, changeTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
