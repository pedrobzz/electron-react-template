/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

import Icon from "../../interfaces/Icon";

const CloseIcon: React.FC<Icon> = ({ width, height, fill }): JSX.Element => {
  return (
    <svg
      width={width || 78}
      height={width || 78}
      viewBox="0 0 78 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.8909 31.8198L7.07104 0L0 7.07104L31.8198 38.8909L0 70.7107L7.07104 77.7817L38.8909 45.9619L70.7107 77.7817L77.7817 70.7107L45.9619 38.8909L77.7817 7.07111L70.7107 0L38.8909 31.8198Z"
        fill={fill || "red"}
      />
    </svg>
  );
};

export default CloseIcon;
