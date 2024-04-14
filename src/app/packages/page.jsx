import Accommodations from "@/components/accommodations/Accommodations";
import { accomodations } from "@/lib/data";
import styles from "./page.module.css"
import Link from "next/link";

export const metadata= {
    title: "Explore Exclusive Travel Packages and Luxurious Accommodations",
    description: "Unleash Wanderlust: Indulge in luxury and adventure with our handpicked travel packages and exquisite accommodations. From lavish resorts to bespoke experiences, elevate your travel experience and create unforgettable moments. Discover the perfect blend of comfort and excitement for your next getaway."
}

const page = ({params}) => {
    return (
        <div>
            
            <div className={`${styles.body}`}>
                <section>
                    <h1 className="fw-bold text-center">
                        Our exciting Travel Packages
                        
                    </h1>
                    <div className={styles.packagesContainer}>
                    {
                        accomodations.map(place=>
                        <Link className="text-decoration-none" href={`bookings?package=${place.resort}`}>
                            <div key={place.image} className={`${place.rating>9.5 ? styles.gridItem:""} p-2 d-flex align-items-center justify-content-between`}>
                                 <Accommodations  image={place.image} 
                                    resort={place.resort}
                                    place={place.place}
                                    rate={place.rate}
                                    rating={place.rating} />
                            </div>
                        </Link>
                            )
                    }
                    </div>


                </section>

            </div>
           
        </div>
    );
}

export default page;