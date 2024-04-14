import Image from "next/image";
import Link from "next/link";
import styles from "./destination.module.css"

const Destination = ({place, image}) => {
    return (
        <div> 
            <Link href={`packages/${place}`}>
                <div className={styles.imgContainer}>
                    <Image className="rounded-3" src={image} fill alt={`A photo representing ${place}`}/>
                    <div className={`${styles.textContainer} rounded-4`}>
                        {place}
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Destination;