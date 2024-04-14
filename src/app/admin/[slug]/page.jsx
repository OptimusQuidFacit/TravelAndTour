import RevenuesAdmin from "@/components/admincomponents/revenuesAdmin/RevenuesAdmin";
import styles from "./page.module.css";
import BookingsAdmin from "@/components/admincomponents/bookingsAdminComponent/BookingsAdmin";

const page = async({params}) => {
    const {slug} = params;
    // console.log(slug);
    // let items = slug==='bookings'&& await getOrders();
    
    return (
        <div className={styles.container}>
            {
                slug==="bookings" && <BookingsAdmin/>
            }
            {
                slug==="revenue" && <RevenuesAdmin/>
            }
        </div>
    );
}

export default page;