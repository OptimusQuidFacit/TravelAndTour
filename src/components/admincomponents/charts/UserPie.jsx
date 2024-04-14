"use client"
import { Chart } from "chart.js/auto";
import {  CategoryScale } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useState } from "react";

Chart.register(CategoryScale);
const UserPie = () => {
    const [chartData, setChartData] = useState({
        labels: ['Google', 'Github', "Credentials"],
        datasets: [{
            label: 'No of Users',
            data: [2, 4, 8],
            backgroundColor: [
                'blue', 'green', 'yellow'
            ],
            borderColor:'black',
            borderWidth: 2,
        }]
    })
    return (
        <div style={{height:"350px", width:"350px"}} className="mx-auto">
           <Pie data={chartData}
           options={{
               plugins:{
                title : {
                    display: true,
                    text: "Chart distribution of how users signed up",
                    font:{
                        size: '24px'
                    }
                }
               }
           }}
           /> 
        </div>
    );
}

export default UserPie;