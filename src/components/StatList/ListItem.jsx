"use client";

import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export const ListItem = ({ Icon, statNumber }) => {
  const [counterStart, setCounterStart] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center shadow-lg w-full h-48 lg:h-72 rounded-lg">
      <span className="flex items-center bg-green-100 rounded-lg p-2 lg:p-4 w-12 h-12 lg:h-16 lg:w-16 mb-4">
        {Icon}
      </span>
      <ScrollTrigger onEnter={() => setCounterStart(true)}>
        <div className="text-base lg:text-xl font-semibold lg:tracking-wider">
          {counterStart && (
            <CountUp start={0} end={statNumber.replace(",", "")} duration={2} />
          )}
        </div>
      </ScrollTrigger>
      <p className="text-sm md:text-base">Followers</p>
    </div>
  );
};
