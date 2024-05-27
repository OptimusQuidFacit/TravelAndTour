import Image from "next/image";
import styles from "./destinationHero.module.css";
import Link from "next/link";

const DestinationHero = () => {
    return (
        <div className={`d-lg-flex ${styles.container} px-lg-5 py-lg-3 p-3 align-items-center`}>
            <div className={styles.textContainer}>
                <h1 className="fw-bold">Explore our destinations</h1>
                <p>Top tips for unforgettable travel experiences</p>
                <div className="buttons ">
                    <Link className=" link btn bg-white shadow shadow-1" href={`/bookings`}>
                        Book now
                    </Link>
                    <Link className="link btn  ms-3 bg-white shadow shadow-1" href={`/packages`}>
                        Explore
                    </Link>
                </div>
            </div>
            <div className={styles.imgWrapper}>
                <div className={styles.imgContainer}>
                    <Image src="https://images.pexels.com/photos/15229548/pexels-photo-15229548/free-photo-of-aerial-view-of-the-sydney-opera-house-and-skyscrapers-sydney-australia.jpeg" 
                    fill className={`${styles.img}`} alt="Photo illustrating various travel destinations. Used as hero section for travel destinations page" />
                </div>
            </div>
        </div>
    );
}

export default DestinationHero;