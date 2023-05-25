import React , {useState, useEffect}from 'react'
import { Container, Typography } from '@mui/material';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import StatisticsService from '../services/StatisticsService';

export default function RentedCarsEveryMonth() {


    const [data, setData] =useState([])
    useEffect(() => {
        StatisticsService.getRentedCarsStat()
            .then(response => setData(response));
    },[])


    return (<>


            <Typography variant="h5">
             Amount of cars rented every month:
            </Typography>
            <br/>

            <ResponsiveContainer width={'50%'} height={300}>
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="reservations_count" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>

        <br/>
        <br/>
        <br/>
        <br/>
       
    </>
    );
}
