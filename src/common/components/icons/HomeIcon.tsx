/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

import Icon from "../../interfaces/Icon";

const HomeIcon: React.FC<Icon> = ({ width, height, fill }): JSX.Element => {
  return (
    <svg
      width={width || height || "100"}
      height={width || height || "100"}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        style={{ transition: "0.25s" }}
        d="M41.6666 83.3333V58.3333H58.3333V83.3333H79.1666V50H91.6667L50 12.5L8.33331 50H20.8333V83.3333H41.6666Z"
        fill={fill || "#F0A500"}
      />
    </svg>
  );
};

export default HomeIcon;
