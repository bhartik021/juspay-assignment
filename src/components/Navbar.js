import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

function Navbar() {
  const context = useContext(AppContext);
  const { theme, changeTheme } = context || {};

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  if (!context) return <div>Loading...</div>;

  return (
    <div className="dark:bg-[#1c1c1c] dark:border-[#fff] dark:border-opacity-10 px-[28px] py-[20px] border-b border-[#1c1c1c] border-opacity-20 text-[14px] flex justify-between items-center">
      <div className="flex items-center gap-x-[4px]">
        <span className="p-[4px]">
          <img
            src={`/images/${theme === "dark" ? "dark" : "light"}/Sidebar.png`}
            className="w-[20px] h-[20px]"
            alt="Sidebar"
          />
        </span>
        <span className="p-[4px]">
          <img
            src={`/images/${theme === "dark" ? "dark" : "light"}/Star.png`}
            className="w-[20px] h-[20px]"
            alt="Star"
          />
        </span>
        <span className="dark:text-[#fff] p-[4px] opacity-40">Dashboards</span>
        <span className="dark:text-[#fff] p-[4px] opacity-40">/</span>
        <span className="dark:text-[#fff] p-[4px]">Default</span>
      </div>

      <div className="flex items-center gap-x-[4px]">
        {/* Search Box */}
        <div className="p-[4px]">
          <div className="dark:bg-[#fff] dark:bg-opacity-10 px-[8px] py-[4px] w-[160px] flex items-center justify-between bg-[#1c1c1c] bg-opacity-5 rounded-[8px]">
            <div className="flex items-center gap-x-[4px]">
              <span>
                <img
                  src={`/images/${theme === "dark" ? "dark" : "light"}/Search.png`}
                  className="w-[16px] h-[16px]"
                  alt="Search"
                />
              </span>
              <span className="dark:text-[#fff] opacity-20">Search</span>
            </div>
            <div>
              <span className="dark:text-[#fff] opacity-20">/</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center">
          {Array.from([
            { icon: "Sun.png", themeButton: true },
            { icon: "ClockCounterClockwise.png" },
            { icon: "Bell.png" },
            { icon: "Sidebar.png" },
          ]).map((currItem, index) => (
            <div key={index} className="gap-x-[4px] p-[4px]">
              <button
                className=""
                onClick={() => (!!currItem.themeButton ? changeTheme() : null)}
              >
                <img
                  src={`/images/${theme === "dark" ? "dark" : "light"}/${currItem.icon}`}
                  className="w-[20px] h-[20px]"
                  alt={currItem.icon.replace('.png', '')}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
