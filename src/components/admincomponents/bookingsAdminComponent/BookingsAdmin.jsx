import { accomodations, getOrders, getSpecificOrders, places } from "@/lib/data";
import styles from "./bookingsAdmin.module.css";
import OrderCharts from "../charts/OrderCharts";
import PlacesChart from "../charts/PlacesChart";
import AccommodationsChart from "../charts/AccommodationsChart";



const BookingsAdmin = async() => {
    // console.log(slug);
    let items = await getOrders();
    const paidOrders= await getSpecificOrders({paid:true})
    // const destinations =[]
    const destinations=places.map(place => place.place);
    const accommodations=accomodations.map(place => place.resort);
    const placeCountPromise = destinations.map( async (destination)=>{
        let order=  await getSpecificOrders({destination: destination})
        return {destination: destination, count: order.length};
        // return order.length;
    }
    )

    // console.log(accommodations);
    const accommodationCountPromise = accommodations.map( async (accommodation)=>{
        let order=  await getSpecificOrders({accommodation: accommodation})
        return {accommodation: accommodation, count: order.length};
    }
    )
    const placeCountDemo= await Promise.all(placeCountPromise)
    const accommodationCountDemo= await Promise.all(accommodationCountPromise)
    const placeCount= placeCountDemo.sort((a,b)=>b.count-a.count).slice(0, 10);
    const accommodationCount= accommodationCountDemo.sort((a,b)=>b.count-a.count).slice(0, 10);

    // let order=  await getSpecificOrders({destination: destinations[4]});
    // let order = await getSpecificOrders({destination: "Maldives"})
    // console.log(accomodationCount);

    let orderProps = {
        orders: items.length, 
        paidOrders: paidOrders.length
    }

    const date = new Date()
    const thisMonth= date.getMonth()
    const today = date.getDate()
    const bookings = await getSpecificOrders({createdAt: {$gte: thisMonth}});
    const bookingsToday = await getSpecificOrders({createdAt: {$gte: today}});
    let sum= 0;
    const prices = bookings.map(booking=>booking.paid?booking.accommodationFee*booking.nights+
        booking.flightFee*booking.guests:0);
        const revenue=prices.reduce((sum, value)=> sum+value, 0)
    console.log(placeCount);

    // const {_id, flight_Fee, accommodationFee ,destination, accommodation, checkIn, guests, nights, Airline, take_Off_Time, comments} = order;

    return (
        <div className={styles.container}>
            <div className={styles.section1}>
                <div className={`d-flex mt-2 ${styles.row}`}>
                    <p className={`${styles.namecol} fw-bold`}>
                        User
                    </p>
                    <p className={`${styles.col} fw-bold`}>
                        Payment Status
                    </p>
                    <p className={`${styles.col} fw-bold`}>
                        Destination
                    </p>
                    <p className={`${styles.col} fw-bold`}>
                        Accom.
                    </p>
                    <p className={`${styles.col} fw-bold`}>
                        No of Guests
                    </p>
                    <p className={`${styles.col} fw-bold`}>
                        No of Nights
                    </p>
                    <p className={`${styles.col} fw-bold`}>
                        Take Off
                    </p>
                </div>
                {
                    items.map(item=>
                        <div key={item._id} className={`d-flex mt-2 ${styles.row}`}>
                            <div className={`${styles.namecol} rounded-2 shadow shadow-1 p-1`}>
                                {item.user.user.email}
                            </div>
                            <div className={`${styles.col} rounded-2 shadow shadow-1 p-1`}>
                                {item.paid?"Paid" : "Not yet paid"}
                            </div>
                            <div className={`${styles.col} rounded-2 shadow shadow-1 p-1`}>
                                {item.destination}
                            </div>
                            <div className={`${styles.col} rounded-2 shadow shadow-1 p-1`}>
                                {item.accommodation}
                            </div>
                            <div className={`${styles.col} rounded-2 shadow shadow-1 p-1`}>
                                {item.guests}
                            </div>
                            <div className={`${styles.col} rounded-2 shadow shadow-1 p-1`}>
                                {item.nights}
                            </div>
                            <div className={`${styles.col} rounded-2 shadow shadow-1 p-1`}>
                                {item.take_Off_Time? item.take_Off_Time: item.takeOffTime}
                            </div>
                        </div>
                            )
                }
            </div>
            <div className={`${styles.section2} mt-3`}>
                <h2 className="fw-bold">
                    Details
                </h2>
                <div className={`d-flex align-items-center ${styles.chartsContainer}`}>
                    <div className="mx-2">

                    <OrderCharts props={orderProps}/>
                    </div>
                    <div className="mx-2">

                    <PlacesChart placeCount={placeCount}/>
                    </div>
                    <div className="mx-2">

                    <AccommodationsChart placeCount={accommodationCount}/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default BookingsAdmin;