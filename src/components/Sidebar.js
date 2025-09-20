import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { getThemeImage, lightImages } from "../assets/images/images";

function Sidebar() {
  const context = useContext(AppContext);
  if (!context) return <div>Loading...</div>;

  const { theme } = context;

  return (
    <div className="dark:bg-[#1c1c1c] dark:text-[#fff]  dark:border-[#fff] dark:border-opacity-10 w-[212px] p-4 text-[14px] text-[#1c1c1c] border-r border-black border-opacity-20">
      <div className="flex items-center gap-2">
        <img src={lightImages.ByeWind} className="w-[24px]" alt="ByeWind" />
        <div className="">ByeWind</div>
      </div>
      <div className="mt-4">
        <div className="flex gap-x-[8px] items-center px-[4px] py-[12px]">
          <button className="opacity-40">Favorites</button>
          <button className="opacity-20">Recently</button>
        </div>
        <div>
          <ul>
            <li className="py-[4px] px-[8px] flex items-center gap-x-2">
              <span className="dark:bg-[#fff] w-[6px] h-[6px] bg-[#1c1c1c] opacity-20 rounded-full"></span>
              Overview
            </li>
            <li className="py-[4px] px-[8px] flex items-center gap-x-2">
              <span className="dark:bg-[#fff] w-[6px] h-[6px] bg-[#1c1c1c] opacity-20 rounded-full"></span>
              Projects
            </li>
          </ul>
        </div>

        <div className="pb-[4px] mt-4">
          <div className="px-[4px] py-[12px] opacity-40">Dashboards</div>
          <div>
            <ul>
              {Array.from([
                {
                  icon: "ChartPieSlice",
                  name: "Default",
                  active: true,
                },
                {
                  icon: "ShoppingBagOpen",
                  name: "eCommerce",
                  active: false,
                },
                {
                  icon: "FolderNotch",
                  name: "Projects",
                  active: false,
                },
                {
                  icon: "BookOpen",
                  name: "Open Courses",
                  active: false,
                },
              ]).map((currItem) => (
                <li
                  key={currItem.name}
                  className={`relative py-[4px] px-[8px] flex items-center gap-2 ${
                    currItem.active
                      ? "dark:bg-[#fff] dark:bg-opacity-10 bg-[#1c1c1c] bg-opacity-5 rounded-[7px]"
                      : ""
                  }`}
                >
                  <span>
                    <img
                      src={getThemeImage('ArrowLineRight', theme)}
                      className={`w-[16px] h-[16px] ${
                        currItem.active ? "opacity-0" : ""
                      }`}
                      alt="Arrow"
                    />
                  </span>

                  <span>
                    <img
                      src={getThemeImage(currItem.icon, theme)}
                      className="w-[20px] h-[20px]"
                      alt={currItem.name}
                    />
                  </span>
                  {currItem.name}
                  {currItem.active && (
                    <span className="dark:bg-[#c6c7f8] w-[4px] h-[16px] bg-[#1c1c1c] top-1/2 -translate-y-1/2 left-0 rounded-[7px] absolute"></span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Pages Section */}
      <div className="mt-4">
        <div className="px-[4px] py-[12px] opacity-40">Pages</div>
        <div>
          <ul>
            {Array.from(
              [
                {
                  name: "UserProfile",
                  icon: "IdentificationBadge",
                  subItems: [],
                },
                { name: "Account", icon: "IdentificationCard" },
                { name: "Corporate", icon: "UsersThree" },
                { name: "Blog", icon: "Notebook" },
                { name: "Social", icon: "ChatsTeardrop" },
              ].map((currItem, index) => (
                <div key={index}>
                  <li
                    key={currItem.name}
                    className="flex items-center py-[4px] px-[8px] gap-2"
                  >
                    <span>
                      <img
                        src={getThemeImage('ArrowLineRight', theme)}
                        className={`w-[16px] h-[16px] ${
                          currItem.subItems ? "rotate-90" : ""
                        }`}
                        alt="Arrow"
                      />
                    </span>
                    <span>
                      <img
                        src={getThemeImage(currItem.icon, theme)}
                        className="w-[20px] h-[20px]"
                        alt={currItem.name}
                      />
                    </span>
                    {currItem.name}
                  </li>
                  {currItem.subItems && (
                    <ul>
                      {Array.from([
                        { name: "Overview" },
                        { name: "Projects" },
                        { name: "Campaigns" },
                        { name: "Documents" },
                        { name: "Followers" },
                      ]).map((currSubItem, index) => (
                        <li key={index} className="pl-[64px] py-[4px]">
                          {currSubItem.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
