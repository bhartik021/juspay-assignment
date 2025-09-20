import { createContext, useState } from "react";

const AppContext = createContext(null);

function AppProvider({ children }) {
  const [theme, setTheme] = useState("light");

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
