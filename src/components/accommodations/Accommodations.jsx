import Image from "next/image";
import styles from "./accommodations.module.css"
import StarIcon from '@mui/icons-material/Star';
import { ArrowRight } from "@mui/icons-material";

const Accommodations = ({image, resort, place, rate, rating}) => {
    return (
        <div className={`${styles.container} p-2 me-2 rounded-3`}>
            <div className={`${styles.imgContainer} rounded-3`}>
                <Image className="rounded-3" src={image} fill alt={`A photo of ${resort}`}/>
                <div className={`${styles.ratingContainer} p-3 d-flex justify-content-between align-items-center`}>
                <div className="bg-dark p-2 rounded-5 text-white">{rating}</div> 
                <div className="bg-dark p-2 rounded-5">
                    <StarIcon className={`${styles.icon} text-white`}/>
                </div>
                </div>
            </div>
            <div className={styles.textContainer}>
                <p>{resort}</p>
                <p>{place}</p>
                <p className="fw-bold d-flex align-items-center justify-content-between">
                    <span>
                        from ${rate}/night 
                    </span>
                <ArrowRight/></p>
            </div>
        </div>
    );
}

export default Accommodations;