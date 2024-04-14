import { brand } from "@/lib/data";
import styles from "./footer.module.css"
import Link from "next/link";

const Footer = () => {
    return (
        <div className="d-flex justify-content-between align-items-center">
            <div className={`${styles.leftText} `}>
                <h3 className="fw-bold fs-5">
                    {brand}
                </h3>
                <p> Discover travel experiences since 1997</p>
                <p className="mt-end">{brand} &copy;</p>
            </div>
            <div className={`${styles.rightText} `}>
                <h3 className="fw-bold fs-5 text-end">
                    Help Center
                </h3>
                <ul className={`${styles.footerList}`}>
                    <li className="text-end"><Link href={`/`} className={styles.link}>
                        FAQs
                    </Link></li>
                    <li className="text-end"><Link href={`/`} className={styles.link}>
                        Support Services
                    </Link></li>
                    <li className="text-end"><Link href={`/`} className={styles.link}>
                        Explore how it
                    </Link></li>
                    <li className="text-end"><Link href={`/`} className={styles.link}>
                        Get in touch
                    </Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;