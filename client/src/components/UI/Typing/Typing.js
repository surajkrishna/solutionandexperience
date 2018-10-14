import React from "react";

const Typing = () => (
  <svg
    className="lds-typing"
    width="100px"
    height="100px"
    xmlns="http://www.w3.org/2000/svg"
    xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    style={{ background: "none" }}
  >
    <circle cx="27.5" cy="62.5" r="5" fill="#337ab7">
      <animate
        attributeName="cy"
        calcMode="spline"
        keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5"
        repeatCount="indefinite"
        values="62.5;37.5;62.5;62.5"
        keyTimes="0;0.25;0.5;1"
        dur="1s"
        begin="-0.5s"
      />
    </circle>{" "}
    <circle cx="42.5" cy="62.5" r="5" fill="#5bc0de">
      <animate
        attributeName="cy"
        calcMode="spline"
        keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5"
        repeatCount="indefinite"
        values="62.5;37.5;62.5;62.5"
        keyTimes="0;0.25;0.5;1"
        dur="1s"
        begin="-0.375s"
      />
    </circle>{" "}
    <circle cx="57.5" cy="42.042" r="5" fill="#5cb85c">
      <animate
        attributeName="cy"
        calcMode="spline"
        keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5"
        repeatCount="indefinite"
        values="62.5;37.5;62.5;62.5"
        keyTimes="0;0.25;0.5;1"
        dur="1s"
        begin="-0.25s"
      />
    </circle>{" "}
    <circle cx="72.5" cy="37.5171" r="5" fill="#f0ad4e">
      <animate
        attributeName="cy"
        calcMode="spline"
        keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5"
        repeatCount="indefinite"
        values="62.5;37.5;62.5;62.5"
        keyTimes="0;0.25;0.5;1"
        dur="1s"
        begin="-0.125s"
      />
    </circle>
  </svg>
);

export default Typing;
