import React from 'react';
import './Statistics.css'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const data = [
        {
          A_Id: 'A1',
          number: 57,
          A_Name: 'HTML, CSS and Github as a beginner'
        },
        {
          A_Id: 'A2',
          number: 59,
          A_Name: 'Responsive Web Layout'
        },
        {
          A_Id: 'A3',
          number: 60,
          A_Name: 'CSS Frameworks'
        },
        {
          A_Id: 'A4',
          number: 60,
          A_Name: 'Hello Javascript'
        },
        {
          A_Id: 'A5',
          number: 58,
          A_Name: 'Integrate Javascript'
        },
        {
          A_Id: 'A6',
          number: 54,
          A_Name: 'Intermediate Javascript, API'
        },
        {
          A_Id: 'A7',
          number: 60,
          A_Name: 'Explore Browser and Debug'
        },
        {
          A_Id: 'A8',
          number: 60,
          A_Name: 'Simple React'
        },
      ];
    return (
        <div>
        <AreaChart
            width={500}
            height={400}
            data={data}  
        >
            <XAxis dataKey="A_Id"></XAxis>
            <YAxis></YAxis>
            <Area type="monotone" dataKey="number" ke="#8884d8" fill="#8884d8" />
            <Tooltip></Tooltip>
        </AreaChart>
        </div>
    );
};

export default Statistics;