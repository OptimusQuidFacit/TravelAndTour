import DestinationHero from "@/components/destinationHero/DestinationHero";
import Footer from "@/components/footer/Footer";
import styles from "./destinations.module.css"
import Destination from "@/components/destination/Destination";
import { places } from "@/lib/data";

export const metadata= {
    title: "Discover Your Next Adventure: Explore Our Diverse Travel Destinations",
    description: "Embark on a journey of discovery with our curated selection of travel and tourism destinations. From breathtaking natural wonders to vibrant cultural hotspots, find your perfect getaway and create unforgettable memories. Start planning your next adventure today!"
}
const destinations = () => {
    return (
        <>
            
            <div className={styles.body}>

                <header className="">
                    <DestinationHero/>
                </header>
                <section className="px-lg-5 py-lg-3 p-3">
                    <div>
                        <h2 className="fw-bold text-center">
                            Choose your Destination
                        </h2>
                        <div className={`${styles.destinations}`}>
                            {
                                places.map(place=>
                                    <Destination key={place.image} place={place.place} image={place.image}/>
                                    )
                            }
                        </div>
                    </div>
                </section>
            </div>
            <footer className="px-lg-5 py-lg-3 p-3">
                <Footer/>
            </footer>
        </>
    );
}

export default destinations;