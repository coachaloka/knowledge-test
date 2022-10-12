import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';

const Statistics = () => {
    const QuizData = useLoaderData()

    return (
        <div className='chart'>
            <div>
                <ResponsiveContainer width='92%' height={400}>
                    <BarChart data={QuizData.data}>
                        <CartesianGrid strokeDaahar ray="3 3" />
                        <XAxis />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="total" fill = "#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;