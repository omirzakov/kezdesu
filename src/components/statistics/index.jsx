import Title from 'antd/lib/typography/Title';
import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { data01, events, users } from '../../mocks';

const Statistics = () => {


    return (
        <>
            <Title level={2}>Статистика</Title>

            <div style={{ display: 'flex' }}>

                <div>
                    <Title level={3}>Статистика по ивентам</Title>
                    <BarChart
                        width={500}
                        height={300}
                        data={events}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Ошибки" fill="red" />
                        <Bar dataKey="Успешно созданы" fill="#82ca9d" />
                    </BarChart>
                </div>

                <div>
                    <Title level={3}>Новые пользователи</Title>
                    <BarChart
                        width={500}
                        height={300}
                        data={users}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Добавлено" fill="#82ca9d" />
                    </BarChart>
                </div>

                <div>
                        <Title level={3}>Популярные категории</Title>
                        <PieChart width={400} height={400}>
                            <Pie label data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" />
                            <Tooltip />
                        </PieChart>
                </div>
            </div>

        </>
    )
}
export default Statistics;