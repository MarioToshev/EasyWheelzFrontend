import React, {useState, useEffect} from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area,PieChart, Pie, Legend, ResponsiveContainer } from 'recharts';
import { Typography } from '@mui/material';
import StatisticsService from '../services/StatisticsService';


export default function MostRentedBrands() {



    const [data, setData] = useState([])
    useEffect(() => {
        StatisticsService.getBrandStat()
            .then(response => setData(response));
            console.log(data);

    },[])

  return (


    

    <>
      <Typography variant="h5">
             Cars rented from  each brand:
            </Typography>
            <br/>
       <ResponsiveContainer width={'50%'} height={300}>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    barSize={20}
                >
                    <XAxis dataKey="brand" scale="point" padding={{ left: 10, right: 10 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="count" fill="#8884d8" background={{ fill: '#eee' }} />
                </BarChart>
            </ResponsiveContainer>


            <br/>
            <br/>
            <br/>


{/* 
            <Typography variant="h5">
             Cars rented from each brand:
            </Typography>
            <br/>

            <ResponsiveContainer width={'50%'} height={300}>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="Count"
            isAnimationActive={false}
            data={data}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer> */}
    
    </>
  )
}
