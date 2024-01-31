import React, { useState } from "react";

const DepartmentDropdown = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedDept, setSelectedDept] = useState("");

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleSelectOption = (value) => {
    setSelectedDept(value);
    setShowOptions(false);
  };

  return (
    <div>
      <div
        className="flex items-start rounded-[0.5rem] p-[1rem] gap-[0.625rem] border-[1px] border-[#f45725]"
        style={{ background: "var(--W-Background, #FFF)", position: "relative" }}
        onClick={handleToggleOptions}
      >
        <div className="w-[22.275rem] h-[auto] outline-none appearance-none text-[#666] font-[400] leading-[1.5rem] font-Noto-Sans">
          {selectedDept || "Select Department"}
        </div>

        <svg
        className={showOptions?"rotate-180":"block"}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          onClick={handleToggleOptions}
          style={{ cursor: "pointer" }}
        >
          <g clipPath="url(#clip0_384_31)">
            <path
              d="M7.41 8.58997L12 13.17L16.59 8.58997L18 9.99997L12 16L6 9.99997L7.41 8.58997Z"
              fill="#F45725"
            />
          </g>
          <defs>
            <clipPath id="clip0_384_31">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        
      </div>

      {showOptions && (
        <div className="absolute  right-0 bg-white border border-[#f4525] w-[26.775rem]  overflow-none rounded-b-[.5rem] z-[1]">
          <div
            className="p-[1rem] border-b-[1px] border-[#ccc] cursor-pointer  hover:text-[#fff] hover:border-[#CCC] hover:bg-[#252625]"
            onClick={() => handleSelectOption("Computer Engineering")}
          >
            Computer Engineering
          </div>
          <div
            className="p-[1rem]  border-b-[1px] border-[#ccc] cursor-pointer  hover:text-[#fff] hover:border-[#CCC] hover:bg-[#252625]"
            onClick={() => handleSelectOption("Mechanical Engineering")}
          >
            Mechanical Engineering
          </div>
          <div
            className="p-[1rem] border-[#ccc] cursor-pointer hover:text-[#fff] hover:border-[#CCC] hover:bg-[#252625]"
            onClick={() => handleSelectOption("Electrical Engineering")}
          >
           Electrical Engineering
          </div>
        </div>
      )}
    </div>
  );
};

export default DepartmentDropdown;