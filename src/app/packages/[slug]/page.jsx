import Accommodations from "@/components/accommodations/Accommodations";
import { accomodations } from "@/lib/data";
import styles from "../page.module.css"
import Link from "next/link";


const page = ({params}) => {
    const { slug } = params;
    const filteredAccommodations = accomodations.filter(item=> item.place==slug)
    // console.log(filteredAccommodations);
    return (
        <div>
            
            <div className={`${styles.body}`}>
                <section>
                    <h1 className={`fw-bold text-center ${styles.heading}`}>
                        Our exciting Travel Packages for
                        <span className="ms-2 text-primary">
                            {slug}
                        </span>
                    </h1>
                    <div className={filteredAccommodations.length>3?styles.packagesContainer:''}>

                    {
                        filteredAccommodations.map(place=>
                            <Link className="text-decoration-none" href={`/bookings?package=${place.resort}`}>
                                <div key={place.image} className="p-2 d-flex align-items-center justify-content-between">
                                    <Accommodations  image={place.image} 
                                        resort={place.resort}
                                        place={place.place}
                                        rate={place.rate}
                                        rating={place.rating}/>
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