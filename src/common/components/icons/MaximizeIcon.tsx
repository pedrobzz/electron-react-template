/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

import Icon from "../../interfaces/Icon";

const MaximizeIcon: React.FC<Icon> = ({ width, height, fill }): JSX.Element => {
  return (
    <svg
      width={width || "80"}
      height={width || "80"}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M80 0H0V2V10V72V82H10H70H80V72V10V2V0ZM70 10H10V72H70V10Z"
        fill={fill || "black"}
      />
    </svg>
  );
};

export default MaximizeIcon;
