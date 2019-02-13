import React from "react";

const SVG = ({
  style = {},
  fill = "",
  path = "",
  width = "",
  className = "",
  viewBox = ""
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
        fill={fill}
        d={path}
    />
  </svg>
);

export default SVG;