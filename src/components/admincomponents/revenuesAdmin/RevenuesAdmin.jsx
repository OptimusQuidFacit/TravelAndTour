import { getOrders, getSpecificOrders } from "@/lib/data";
import styles from "./RevenuesAdmin.module.css"
import RevenueChart from "../charts/RevenueChart";

const revenueGenerator= (bookings)=>{
    let prices = bookings?.map(booking=>
        {
            let flightPrice=booking.flightFee?booking.flightFee:booking.flight_Fee
            return (booking.paid?booking.accommodationFee+
        flightPrice:0)});
    let revenue=prices.reduce((sum, value)=> sum+value, 0);
    return revenue;

}
const RevenuesAdmin = async () => {
    const allOrders = await getOrders();
    const revenue= revenueGenerator(allOrders);
    const date = new Date();
    const thisMonth= date.getMonth();
    const thisMonthDate= date.setMonth(thisMonth-1);
    const lastMonthDate= date.setMonth(thisMonth-2);
    const thisMonthOrders = await getSpecificOrders({createdAt: {$gte: thisMonthDate}});
    const lastMonthOrders = await getSpecificOrders({createdAt: {$gte: lastMonthDate, $lte: thisMonthDate}});
    const lastMonthRevenue = revenueGenerator(lastMonthOrders);
    const thisMonthRevenue= revenueGenerator(thisMonthOrders);
    const percentage= lastMonthRevenue? Math.floor((( thisMonthRevenue - lastMonthRevenue)/lastMonthRevenue)*100) :100;
    //For the last six Months
    const sixMonthsRevenue= []
    for(let i=0; i<=5; i++){
        const lastMonthOrders = await getSpecificOrders({createdAt: {$gte: date.setMonth(thisMonth-(i+1)), $lte:date.setMonth(thisMonth-i)}});
        let revenue= revenueGenerator(lastMonthOrders);
        sixMonthsRevenue.push(revenue);
    }
    console.log(thisMonthRevenue, lastMonthRevenue, sixMonthsRevenue.reverse());
    return (
        <div className={styles.container}>
            <div className={`${styles.section1} d-flex align-items-center mt-3`}>
                <div className={`${styles.col}`}>
                    <p className="fw-bold">
                        Total Revenue Generated
                    </p>
                    <p className="fs-1 text-primary">
                        ${revenue}
                    </p>
                </div>
                <div className={`${styles.col}`}>
                    <p className="fw-bold">
                         Revenue Generated in the past 30 days
                    </p>
                    <p className="fs-1 text-info">
                        ${thisMonthRevenue}
                    </p>
                </div>
                <div className={`${styles.col}`}>
                    <p className="fw-bold">
                         Percentage increase from previous 30 days
                    </p>
                    <p className={`fs-1 text-primary ${percentage<0?'text-danger':'text-success'}`}>
                        {percentage}%
                    </p>
                </div>
            </div>
            <div className={`${styles.section2} mt-3`}>
                <RevenueChart revenue={sixMonthsRevenue}/>
            </div>
        </div>
    );
}

export default RevenuesAdmin;