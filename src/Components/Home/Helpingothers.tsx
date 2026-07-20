import React from "react";

const data = [
  {
    circleBg: "#3EB9FF",
    number: "1",
    text: "Brainstorming and Creative ideas & Research",
  },
  {
    circleBg: "#abbf78",
    number: "2",
    text: "Fully-Automated Keyword Grouping",
  },
  {
    circleBg: "#FFB876",
    number: "3",
    text: "Building the strategy to boost Your Sales",
  },
  {
    circleBg: "#FFA0C9",
    number: "4",
    text: "Helping to achieve more People",
  },
];

const Helpingothers = () => {
  return (
    <div className="w-full py-5 sm:py-12 px-6">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-5 sm:mb-10">
        Helping Others Succeed
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-8 relative">
        {data.map((item, index) => (
          <div key={index} className="relative p-4 sm:p-6 text-center sm:space-y-4">
            {/* Circle */}
            <div
              className="w-16 h-16 flex items-center justify-center rounded-full mx-auto pt-3.5 hover:pt-0 transition-all duration-300"
              style={{ border: `1px solid ${item.circleBg}` }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center rounded-full text-white  text-xl"
                style={{ backgroundColor: item.circleBg }}
              >
                {item.number}
              </div>
            </div>

            {/* Text */}
            <p className="text-gray-700 font-medium sm:pt-0 pt-6">{item.text}</p>

            {/* Curved dashed connector */}
            {index < data.length - 1 && (
              <div
                className="absolute lg:flex hidden top-4 right-[-30%] w-[150px] h-[100px]"
                style={{ pointerEvents: "none" }}
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 200 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current text-gray-400"
                >
                  <path
                    d={
                      index % 2 === 0
                        ? "M0 50 C50 0, 150 100, 200 50"
                        : "M0 50 C50 100, 150 0, 200 50"
                    }
                    stroke="#6F7276"
                    strokeWidth="2"
                    fill="transparent"
                    strokeDasharray="2 5"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      values="30;0" // right direction
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </path>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Helpingothers;
