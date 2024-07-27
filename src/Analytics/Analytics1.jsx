import React from 'react';
import { XAxis, CartesianGrid, Tooltip, BarChart, Legend, Bar, ResponsiveContainer } from 'recharts';

export default function Analytics1() {
  const data = [
    {
      "name": "jan",
      "Subscribers": 4000,
      "Earnings": 2400
    },
    {
      "name": "feb",
      "Subscribers": 3000,
      "Earnings": 1398
    },
    {
      "name": "mar",
      "Subscribers": 2000,
      "Earnings": 9800
    },
    {
      "name": "april",
      "Subscribers": 2780,
      "Earnings": 3908
    },
    {
      "name": "may",
      "Subscribers": 1890,
      "Earnings": 4800
    },
    {
      "name": "june",
      "Subscribers": 2390,
      "Earnings": 3800
    },
    {
      "name": "july",
      "Subscribers": 3490,
      "Earnings": 4300
    }
  ];

  return (
    <>
      <div className="Analytic chart1 d-flex align-items-center flex-column justify-content-center position-relative h-100" style={{ zIndex: "1" }}>
        <header className="d-flex justify-content-center align-items-center w-100 fs-6  fw-bold">
          <span className="Subscribers" style={{ color: "#00464e" }}>Subscribers:</span>
          <span className="Earnings" style={{ color: "#810551" }}>Earnings:</span>
        </header>
        <div className="Chart" style={{ width: '100%', height: '300px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <Tooltip />
              <Legend />
              <Bar dataKey="Subscribers" fill="#00464e" />
              <Bar dataKey="Earnings" fill="#810551" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}

