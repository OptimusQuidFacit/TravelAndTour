"use client"
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";
// import { accomodations, places } from "@/lib/data";

const randomColor=()=>{
    const r=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`
}
Chart.register(CategoryScale);
const RevenueChart = ({revenue}) => {
    console.log(revenue.reverse())
    // const {orders, paidOrders} = props;
    const data={
        labels: ["Last month", "Last two months", "Last three months", 
        "Last four months", "Last five Months", "Last six months"].reverse(),
        datasets: [{
           label: "Revenue generated from bookings",
           data: revenue.reverse(),
           borderColor: randomColor(),
           backgroundColor: randomColor(),
           tension: 0.4,
        }]
    }
    const options= {
        plugins:{
            title:{
                display: true,
                text: "Revenue generation in the last six months",
                font: {
                    size: "20px",
                }
            }
        }
    }
    return (
        <div style={{ height: "600px", width: "800px" }} className="mx-auto">
            <Line data={data} options={options}/>    
        </div>
    );
}

export default RevenueChart;