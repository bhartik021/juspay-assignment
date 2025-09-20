function Notificationbar() {
  return (
    <div className="dark:bg-[#1c1c1c] dark:border-[#fff] dark:border-opacity-10 w-[280px] p-[20px] border-l border-[#1c1c1c] border-opacity-10">
      {/* Notifications Section */}
      <div>
        <div className="dark:text-[#fff] text-[14px] font-semibold">
          Notifications
        </div>
        <div className="flex flex-col gap-y-[8px] mt-[8px]">
          {Array.from([
            {
              notificationText: "You have a bug that needs...",
              time: "Just now",
              icon: "/images/light/BugBeetle.png",
            },
            {
              notificationText: "New user registered",
              time: "59 minutes ago",
              icon: "/images/light/User.png",
            },
            {
              notificationText: "You have a bug that needs...",
              time: "12 hours ago",
              icon: "/images/light/BugBeetle.png",
            },
            {
              notificationText: "Andi Lane subscribed to you...",
              time: "Today, 11:59 AM",
              icon: "/images/light/Broadcast.png",
            },
          ]).map((currItem, index) => (
            <div key={index} className="flex gap-x-[8px] p-[4px] items-start">
              <div className="p-[4px] bg-[#e5ecf6] rounded-[8px]">
                <img src={currItem.icon} className="w-[24px]" alt="Notification" />
              </div>
              <div>
                <div className="dark:text-[#fff] text-[14px] text-[#1c1c1c] font-normal">
                  {currItem.notificationText}
                </div>
                <div className="dark:text-[#fff] text-[12px] text-[#1c1c1c] opacity-40">
                  {currItem.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activities Section */}
      <div className="mt-[24px]">
        <div className="dark:text-[#fff] text-[14px] font-semibold">
          Activities
        </div>
        {Array.from([
          {
            text: "You have a bug that needs...",
            time: "Just now",
            icon: "/images/light/3D05.png",
          },
          {
            text: "Released a new version",
            time: "59 minutes ago",
            icon: "/images/light/Female05.png",
          },
          {
            text: "Submitted a bug",
            time: "12 hours ago",
            icon: "/images/light/3D08.png",
          },
          {
            text: "Modified A data in Page X",
            time: "Today, 11:59 AM",
            icon: "/images/light/Male07.png",
          },
          {
            text: "Deleted a page in Project X",
            time: "Feb 2, 2023",
            icon: "/images/light/Male11.png",
          },
        ]).map((currItem, index) => (
          <div key={index} className="flex gap-x-[8px] p-[4px] items-start">
            <div className="relative p-[4px] rounded-[8px]">
              <img src={currItem.icon} className="w-[24px]" alt="Activity" />
              {index !== 4 && (
                <div className="absolute left-1/2 top-full -translate-x-1/2 w-[1px] h-[14px] bg-[#1c1c1c] bg-opacity-10"></div>
              )}
            </div>
            <div>
              <div className="dark:text-[#fff] text-[14px] text-[#1c1c1c] font-normal">
                {currItem.text}
              </div>
              <div className="dark:text-[#fff] text-[12px] text-[#1c1c1c] opacity-40">
                {currItem.time}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contacts */}
      <div className="mt-[24px]">
        <div className="dark:text-[#fff] text-[14px] font-semibold">
          Contacts
        </div>
        {Array.from([
          {
            icon: "/images/light/Female15.png",
            name: "Natali Craig",
          },
          {
            icon: "/images/light/Male08.png",
            name: "Drew Cano",
          },
          {
            icon: "/images/light/Male06.png",
            name: "Orlando Diggs",
          },
          {
            icon: "/images/light/Female08.png",
            name: "Andi Lane",
          },
          {
            icon: "/images/light/Female09.png",
            name: "Kate Morrison",
          },
          {
            icon: "/images/light/3D03.png",
            name: "Koray Okumus",
          },
        ]).map((currItem, index) => (
          <div key={index} className="flex gap-x-[8px] p-[4px] items-start">
            <div className="relative p-[4px] rounded-[8px]">
              <img src={currItem.icon} className="w-[24px]" alt="Contact" />
            </div>
            <div className="dark:text-[#fff] text-[14px] text-[#1c1c1c] font-normal">
              {currItem.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notificationbar;
