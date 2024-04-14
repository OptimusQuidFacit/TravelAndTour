import Destination from "@/components/destination/Destination";
import Hero from "@/components/hero/Hero";
import styles from "./home.module.css"
import { accomodations, brand, places } from "@/lib/data";
import Accommodations from "@/components/accommodations/Accommodations";
import Link from "next/link";
import { LocalOffer } from "@mui/icons-material";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: `${brand} | Your Gateway to Extraordinary Journeys and Travel Experiences`,
  description: `Explore Unforgettable Destinations with ${brand} and discover the world\'s wonders with ${brand}. 
  Our travel experts curate extraordinary experiences for every adventurer. From breathtaking landscapes to cultural gems, embark on unforgettable journeys tailored just for you. Start your adventure today!`,
}
const page = () => {

  return (
    <div>
      <header className="px-lg-5 py-lg-3 p-3">
        <Hero/>
      </header>
      <section className="px-lg-5 py-lg-3 p-3">
        <h2>
          Featured destinations
        </h2>
          <div className={`${styles.featuredWrapper} d-flex align-items-center `}>
            { 
              places.map(destination=>
              <Destination key={destination.image} place={destination.place} image={destination.image}/>)
            }
          </div>
      </section>
      <section className="px-lg-5 py-lg-3 p-3">
        <h2>
          Top-rated accommodations
        </h2>
        <div className={`${styles.topRatedWrapper} d-flex align-items-center`}>
            {
              accomodations.map(place=>
                <Accommodations key={place.image} image={place.image} 
                resort={place.resort}
                place={place.place}
                rate={place.rate}
                rating={place.rating}/>)
            }
        </div>
      </section>
      <article className="px-lg-5 py-lg-3 p-3">
            <div className={`${styles.subscribeWrapper} p-2`}>
              <div className={styles.subscribeText}>
                <LocalOffer className="fs-1" />
                <div className="ms-3 mt-3">
                  <p className="fw-bold">
                    Exclusive deals await you
                  </p>
                  <p>
                    Join our exclusive travel club for special offers and discounts on unforgettable gateways
                  </p>
                </div>
              </div>
              <Link className="text-decoration-none" href='/subscribe'>
                <p className={`${styles.btnText} rounded-3 mt-3 px-4 py-2`}>
                  Subscribe now
                </p>
              </Link>
            </div>
      </article>
      <hr />
      <footer className="px-lg-5 py-lg-3 p-3">
            <Footer/>
      </footer>
    </div>
  );
}

export default page;