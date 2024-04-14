import Image from "next/image";
import styles from './hero.module.css'
import { Start } from "@mui/icons-material";
const Hero = () => {
    return (
        <section className={`${styles.heroContainer}`}>
        <div className={styles.imgContainer}>
          <Image className="rounded-4" src="/hills.jpg" fill alt="Image of an attractive tourist center"/>
          <div className={`${styles.textContainer} text-white`}>
            <h1 className="text-white fw-bold">
              Plan your dream vacation with
            </h1>
            <p>Discover 1,480,086 unique stays worldwide</p>
          </div>
        </div>
        <div className={` ${styles.bookingContainer} d-flex justify-content-between align-items-center p-2`}>
            <div className={`${styles.option} px-2`}>
              <p className="fw-bold">Location</p>
              <p className={`${styles.reduceHeight} px-2`}>Choose Location</p>
            </div>
            <div className={`${styles.option} px-2`}>
              <p className="fw-bold">Check-in date</p>
              <p className={`${styles.reduceHeight}`}>Choose arrival</p>
            </div>
            <div className={`${styles.option} px-2`}>
              <p className="fw-bold">Check-out date</p>
              <p className={`${styles.reduceHeight}`}>Choose</p>
            </div>
            <div className={`${styles.option} px-2`}>
              <p className="fw-bold">Guests</p>
              <p className={`${styles.reduceHeight}`}>Select number of</p>
            </div>
            <div className={`${styles.option} px-2`}>
              <div className={styles.startIcon}>

              <Start/>
              </div>
            </div>
        </div>
      </section>
    );
}

export default Hero;