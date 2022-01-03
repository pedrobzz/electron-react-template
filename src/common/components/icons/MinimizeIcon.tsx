/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

import Icon from "../../interfaces/Icon";

const MinimizeIcon: React.FC<Icon> = ({ width, height, fill }): JSX.Element => {
  return (
    <svg
      width={width || 80}
      height={height || 10}
      viewBox="0 0 80 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="80" height="10" fill={fill || "black"} />
    </svg>
  );
};

export default MinimizeIcon;
