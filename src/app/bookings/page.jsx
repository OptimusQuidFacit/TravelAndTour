import Bookings from "@/components/bookings/Bookings";
import styles from "./page.module.css"

export const metadata= {
    title: "Book Your Dream Getaway with Ease",
    description: "Seamless Travel Planning: Experience hassle-free travel booking and reservations with our intuitive platform. From flights and hotels to tours and activities, secure your dream getaway with just a few clicks. Start planning your next adventure and turn your travel dreams into reality."
   }
const page = (props) => {
  const {searchParams} = props;
  console.log(searchParams.package);
    return (
        <div className= {`${styles.container}`} >
            <Bookings option={searchParams.package}/>
        </div>
    );
}

export default page;