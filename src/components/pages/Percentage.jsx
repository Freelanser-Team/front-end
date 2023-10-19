import React from "react";
import "../../styles/Perscentage.css";
export function Percentage(persentageData) {
  const { persentage, circleWidth, radius, dashArray, dashOffset } =
    persentageData.persentageData;
  return (
    <div className="list col-12 col-sm-6 col-md-4 p-3 text-center position-relative">
      <p className="fs-5 fw-bold ">نسبة الانجاز</p>
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          className="circle-backGround"
        />

        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          className="circle-progress"
          style={{ strokeDasharray: dashArray, strokeDashoffset: dashOffset }}
        />
      </svg>
      <p className=" persentage  fw-bold fs-2 position-absolute start-50 translate-middle">
        % {persentage}
      </p>
    </div>
  );
}
