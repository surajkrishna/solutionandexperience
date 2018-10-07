import React from "react";
import classes from "./Loading.css";

const Loading = () => (
  <div className={classes.Loading}>
    <div className={classes.Overlay} />
    <svg
      className="lds-message"
      width="99px"
      height="99px"
      xmlns="http://www.w3.org/2000/svg"
      xmlns="http://www.w3.org/1999/xlink"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      style={{ background: "none" }}
    >
      <g transform="translate(20 50)">
        <circle
          cx="0"
          cy="0"
          r="6"
          fill="#343a40"
          transform="scale(0.422655 0.422655)"
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            begin="-0.375s"
            calcMode="spline"
            keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
            values="0;1;0"
            keyTimes="0;0.5;1"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
      <g transform="translate(40 50)">
        <circle
          cx="0"
          cy="0"
          r="6"
          fill="#343a40"
          transform="scale(0.111685 0.111685)"
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            begin="-0.25s"
            calcMode="spline"
            keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
            values="0;1;0"
            keyTimes="0;0.5;1"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
      <g transform="translate(60 50)">
        <circle
          cx="0"
          cy="0"
          r="6"
          fill="#343a40"
          transform="scale(0.00775641 0.00775641)"
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            begin="-0.125s"
            calcMode="spline"
            keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
            values="0;1;0"
            keyTimes="0;0.5;1"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
      <g transform="translate(80 50)">
        <circle
          cx="0"
          cy="0"
          r="6"
          fill="#343a40"
          transform="scale(0.228573 0.228573)"
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            begin="0s"
            calcMode="spline"
            keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
            values="0;1;0"
            keyTimes="0;0.5;1"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </svg>
  </div>
);

export default Loading;
