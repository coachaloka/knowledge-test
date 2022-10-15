import React from "react";
import { useLoaderData } from "react-router-dom";
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";
import './Statistics.css';

const Statistics = () => {
  const QuizData = useLoaderData();
  
   return (
    <div className="chart">
       <div>
                <ResponsiveContainer width='100%' height={400}>
                    <BarChart data={QuizData.data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="total" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
     </div>
   );
 };

 export default Statistics;
