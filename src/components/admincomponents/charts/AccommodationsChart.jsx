"use client"
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";
import {  places } from "@/lib/data";

const randomColor=()=>{
    const r=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`
}
Chart.register(CategoryScale);
const AccommodationsChart = ({placeCount}) => {
    // const {orders, paidOrders} = props;
    const dataPaid={
        labels: placeCount.map(place=>place.accommodation),
        datasets: [{
           label: "No of Bookings",
           data: placeCount.map(place=>place.count),
           backgroundColor: places.map((place)=> randomColor()),
           barThickness: 20,
        }]
    }
    const paidOptions= {
        plugins:{
            title:{
                display: true,
                text: "Most Popular accomodations",
                font: {
                    size: "20px",
                }
            }
        }
    }
    return (
        <div style={{ height: "300px", width: "500px" }}>
            <Bar data={dataPaid} options={paidOptions}/>    
        </div>
    );
}

export default AccommodationsChart;