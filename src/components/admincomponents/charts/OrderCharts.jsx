"use client"
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale);
const OrderCharts = ({props}) => {
    const {orders, paidOrders} = props;
    const dataPaid={
        labels: ['Paid', "Unpaid"],
        datasets: [{
           label: "No of Bookings",
           data: [paidOrders, orders - paidOrders],
           backgroundColor: ['green', 'black'],
           barThickness: 20,
           categoryPercentage: 0.3,
        }]
    }
    const paidOptions= {
        plugins:{
            title:{
                display: true,
                text: "Paid vs Unpaid Orders",
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

export default OrderCharts;