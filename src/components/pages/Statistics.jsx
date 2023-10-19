import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

import { Percentage } from "./Percentage";
import "../../styles/Statistics.css";
export function Statistics() {
  const data = [
    { name: "G1", value: 200 },
    { name: "G2", value: 400 },
    { name: "G3", value: 500 },
    { name: "G4", value: 300 },
    { name: "G5", value: 600 },
  ];
  const circleWidth = 200;
  const radius = 85;
  const persentage = 45.2;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * persentage) / 100;

  const persentageData = {
    circleWidth,
    radius,
    persentage,
    dashArray,
    dashOffset,
  };
  return (
    <div className="row bg-light">
      <ul className="list col-12 col-sm-6 col-md-4 p-3 ">
        <li className="d-flex align-items-center mb-3">
          <span className="west "></span> الغرب
        </li>
        <li className="d-flex align-items-center mb-3">
          <span className="east "></span> الشرق
        </li>
        <li className="d-flex align-items-center mb-3">
          <span className="north "></span> الشمال
        </li>
        <li className="d-flex align-items-center mb-3">
          <span className="south "></span>الجنوب
        </li>
      </ul>
      <div className="list col-12 col-sm-6 col-md-4 p-3">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <Percentage persentageData={persentageData} />
    </div>
  );
}
