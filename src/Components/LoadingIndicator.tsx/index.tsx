import React from "react";

type Props = {
    width?: number;
    height?: number;
    color?: string;
    text?: boolean, 
  
  }

function LoadingIndicator({
  width = 100,
  height = 100,
  color = "#000",
  text = true,
}:Props) {
  return (
    <div className="flex col gap-10 center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ margin: "auto" }}
        width={width}
        height={height}
        display="block"
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="25"
          fill="none"
          stroke={color}
          strokeDasharray="117.80972450961724 41.269908169872416"
          strokeWidth="6"
        >
          <animateTransform
            attributeName="transform"
            dur="2.7027027027027026s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="rotate"
            values="0 50 50;360 50 50"
          ></animateTransform>
        </circle>
      </svg>
      {text &&       <p>Loading...</p>}

    </div>
  );
}

export default LoadingIndicator;
