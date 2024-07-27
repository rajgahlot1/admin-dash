import React from 'react';
import { XAxis, CartesianGrid, Tooltip, BarChart, Legend, Bar, PieChart, Pie, LineChart, YAxis, Line, ResponsiveContainer } from 'recharts';

export default function Analytics3() {
  const data03 = [
    {
      name: "Group A",
      value: 400,
    },
    {
      name: "Group B",
      value: 300,
    },
    {
      name: "Group C",
      value: 300,
    },
    {
      name: "Group D",
      value: 200,
    },
    {
      name: "Group E",
      value: 278,
    },
    {
      name: "Group F",
      value: 189,
    },
  ];
  const data04 = [
    {
      name: "Group A",
      value: 2000,
    },
    {
      name: "Group B",
      value: 3567,
    },
    {
      name: "Group C",
      value: 598,
    },
    {
      name: "Group D",
      value: 2000,
    },
    {
      name: "Group E",
      value: 1000,
    },
    {
      name: "Group F",
      value: 2500,
    },
  ];

  return (
    <>
      <div className="AnalyticII d-flex align-items-center flex-column justify-content-center position-relative" style={{ zIndex: "1", width: '100%', height: '100%' }}>
        <div className="Chart" style={{ width: '100%', height: '100%' }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data03}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={20}
                fill="#00464e"
              />
              <Pie
                data={data04}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={20}
                outerRadius={40}
                fill="#810551"
                label
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
