import { useState } from "react";

function Tab({ tabs, children, onTabClick }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    if (onTabClick) onTabClick(index); // Trigger onClick if passed
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      {/* Tabs */}
      <div className="flex space-x-2 border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`py-2 px-4 focus:outline-none ${
              activeTab === index
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4 p-4 border">{children[activeTab]}</div>
    </div>
  );
}

export default Tab;
