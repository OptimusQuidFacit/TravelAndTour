"use client"
import { usePathname } from "next/navigation";
import styles from "@/components/navbar/Menulink/menulink.module.css"
import Link from "next/link";

const Menulink = ({path, name, secondlinks}) => {
    const pathname= usePathname()
    return (
        <li className={`${styles.navlink} ${secondlinks&&styles.link2} ${secondlinks&&path===pathname&&styles.activeContainer}`}>
        <Link className={`${styles.link} ${path===pathname&&styles.active}`} href={path}>
           {name}
        </Link>
    </li>
    );
}

export default Menulink;