import Accommodations from "@/components/accommodations/Accommodations";
import { accomodations } from "@/lib/data";
import styles from "./destination.module.css"
import Footer from "@/components/footer/Footer";
import Link from "next/link";

const page = ({params}) => {
    const { slug } = params;
    const filteredAccommodations = accomodations.filter(item=> item.place===slug)
    return (
        <div>
        
            <div className={`${styles.body}`}>
                <section className="px-lg-5 py-lg-3 p-3">
                    <h1 className="fw-bold text-center">
                        Our exciting Travel Packages for 
                        <span className="text-primary">
                             {` ${slug}`}
                        </span>
                    </h1>
                    <div className={styles.container}>
                        {
                            filteredAccommodations.map(item=>
                                <div key={item.image} className="p-3 rounded-3 shadow shadow-1 d-flex align-items-center justify-content-between">
                                    <Link className="text-decoration-none" href={`/bookings?${JSON.stringify(item)}`}>
                                        <Accommodations image={item.image} place={item.place} 
                                        resort={item.resort} rate={item.rate} rating={item.rating} />
                                    </Link>
                                    <div className={`${styles.itinery} p-2`}>
                                        <h2 className="fs-4 text-decoration-underline text-primary">
                                            Itinery
                                        </h2>
                                        <p>
                                            <span className="fw-bold me-1">
                                                Airline: 
                                            </span>
                                            {item.itinery.airline}
                                        </p>
                                        <p>
                                            <span className="fw-bold me-1">
                                                Trip Duration: 
                                            </span>
                                            {item.itinery.flightDuration}
                                        </p>
                                        <p className={`${styles.descContainer}`}>
                                            <span className="fw-bold me-1">
                                               Description: 
                                            </span>
                                            {item.itinery.desc}
                                        </p>
                                    </div>
                                </div>)
                        }
                    </div>


                </section>

            </div>
            <footer className="px-lg-5 py-lg-3 p-3">
                <Footer/>
            </footer>
        </div>
    );
}

export default page;